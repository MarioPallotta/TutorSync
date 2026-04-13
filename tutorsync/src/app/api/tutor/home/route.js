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

  // pending group requests (not yet accepted)
  const pendingRequests = await prisma.STUDY_BUDDY_GROUPS.findMany({
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
    orderBy: [
      { Group_Date: "asc" },
      { Group_Time: "asc" },
    ],
  });

  // today's tutoring sessions (by Session_Date)
  const todaySessions = await prisma.TUTORING_SESSION.findMany({
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
    orderBy: {
      Session_Time: "asc",
    },
  });

  // upcoming tutoring sessions (after today)
  const upcomingSessions = await prisma.TUTORING_SESSION.findMany({
    where: {
      Tutor_ID: tutorId,
      Session_Date: {
        gt: today,
      },
    },
    include: {
      USERS: true,
      ENROLLMENTS: {
        include: { COURSES: true },
      },
    },
    orderBy: [
      { Session_Date: "asc" },
      { Session_Time: "asc" },
    ],
  });

  // today's accepted study groups
  const todayStudyGroups = await prisma.STUDY_BUDDY_GROUPS.findMany({
    where: {
      Tutor_ID: tutorId,
      Has_Tutor: true,
      Is_Accepted: true,
      Group_Date: {
        gte: today,
        lt: tomorrow,
      },
    },
    include: {
      ENROLLMENTS: {
        include: {
          COURSES: true,
        },
      },
    },
    orderBy: [
      { Group_Time: "asc" },
    ],
  });

  // upcoming accepted study groups
  const upcomingStudyGroups = await prisma.STUDY_BUDDY_GROUPS.findMany({
    where: {
      Tutor_ID: tutorId,
      Has_Tutor: true,
      Is_Accepted: true,
      Group_Date: {
        gt: today,
      },
    },
    include: {
      ENROLLMENTS: {
        include: {
          COURSES: true,
        },
      },
    },
    orderBy: [
      { Group_Date: "asc" },
      { Group_Time: "asc" },
    ],
  });

  return Response.json({
    pendingRequests,
    todaySessions,
    upcomingSessions,
    todayStudyGroups,
    upcomingStudyGroups,
  });
}
