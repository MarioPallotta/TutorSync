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

    // Check membership
    const membership = await prisma.sTUDY_GROUP_MEMBERS.findUnique({
      where: {
        Group_ID_User_ID: { Group_ID: groupId, User_ID: userId },
      },
    });

    if (!membership) {
      return Response.json({ error: "Not a member" }, { status: 400 });
    }

    // Remove membership
    await prisma.sTUDY_GROUP_MEMBERS.delete({
      where: {
        Group_ID_User_ID: { Group_ID: groupId, User_ID: userId },
      },
    });

    // Decrement member count
    await prisma.sTUDY_BUDDY_GROUPS.update({
      where: { Group_ID: groupId },
      data: { Group_Members: { decrement: 1 } },
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error("Leave group error:", err);
    return Response.json({ error: "Failed to leave group" }, { status: 500 });
  }
}
