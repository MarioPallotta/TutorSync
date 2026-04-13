import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/lib/prisma";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const userId = session.user.id;

  const student = await prisma.student.findUnique({
    where: { User_ID: userId },
    select: { GPA: true },
  });

  return Response.json({
    gpa: student?.GPA ?? null,
  });
}
