import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/lib/prisma";

export async function DELETE(req) {
  try {
    const session = await getServerSession(authOptions);
    if (!session)
      return Response.json({ error: "Unauthorized" }, { status: 401 });

    const userId = Number(session.user.id);
    const { sessionId } = await req.json();

    // Ensure the session belongs to the student
    const tutoringSession = await prisma.tUTORING_SESSION.findUnique({
      where: { Session_ID: sessionId },
    });

    if (!tutoringSession || tutoringSession.User_ID !== userId) {
      return Response.json({ error: "Not allowed" }, { status: 403 });
    }

    // Delete the session
    await prisma.tUTORING_SESSION.delete({
      where: { Session_ID: sessionId },
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error("Cancel session error:", err);
    return Response.json({ error: "Failed to cancel session" }, { status: 500 });
  }
}
