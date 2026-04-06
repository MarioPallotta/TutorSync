import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function GET(req) {
  const session = await getServerSession({ req, ...authOptions });

  const tutorId = Number(session?.user?.tutorId);

  if (!tutorId) {
    return Response.json({ error: "Not authorized" }, { status: 401 });
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  console.log("SESSION:", session);
  console.log("Tutor ID:", session?.user?.tutorId);

  const pendingRequests = await prisma.sTUDY_BUDDY_GROUPS.findMany({
    where: {
      Tutor_ID: tutorId,
      Has_Tutor: true,
      Is_Accepted: false,
    },
    include: {
      ENROLLMENTS: {
        include: {
          COURSES: true,
        },
      },
    },
  });

  const todaySessions = await prisma.tUTORING_SESSION.findMany({
    where: {
      Tutor_ID: tutorId,
      Session_Date: {
        gte: today,
        lt: tomorrow,
      },
    },
    include: {
      USERS: true,
      ENROLLMENTS: {
        include: { COURSES: true },
      },
    },
  });

  const upcomingSessions = await prisma.tUTORING_SESSION.findMany({
    where: {
      Tutor_ID: tutorId,
      Session_Date: {
        gt: tomorrow,
      },
    },
    include: {
      USERS: true,
      ENROLLMENTS: {
        include: { COURSES: true },
      },
    },
  });

  return Response.json({
    pendingRequests,
    todaySessions,
    upcomingSessions,
  });
}
