import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/lib/prisma";

export async function DELETE(req) {
  try {
    const session = await getServerSession(authOptions);
    if (!session)
      return Response.json({ error: "Unauthorized" }, { status: 401 });

    const userId = Number(session.user.id);
    const { groupId } = await req.json();

    const group = await prisma.sTUDY_BUDDY_GROUPS.findUnique({
      where: { Group_ID: groupId },
    });

    if (!group || group.User_ID !== userId) {
      return Response.json({ error: "Not allowed" }, { status: 403 });
    }

    // Delete all members first
    await prisma.sTUDY_GROUP_MEMBERS.deleteMany({
      where: { Group_ID: groupId },
    });

    // Delete the group
    await prisma.sTUDY_BUDDY_GROUPS.delete({
      where: { Group_ID: groupId },
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error("Delete group error:", err);
    return Response.json({ error: "Failed to delete group" }, { status: 500 });
  }
}
