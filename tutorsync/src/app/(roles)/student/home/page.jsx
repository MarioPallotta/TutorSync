export const dynamic = "force-dynamic";

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/lib/prisma";
import StudentHome from "./studentHome";

export default async function Page() {
  const session = await getServerSession(authOptions);
  if (!session) return <div>Unauthorized</div>;

  const userId = Number(session.user.id);

  // ⭐ GPA
  const student = await prisma.student.findUnique({
    where: { User_ID: userId },
    select: { GPA: true },
  });

  const gpa = student?.GPA ? Number(student.GPA) : null;

  // ⭐ Upcoming tutoring sessions
  const upcomingTutorSessionsRaw = await prisma.tUTORING_SESSION.findMany({
    where: {
      User_ID: userId,
      Session_Time: { gt: new Date() },
    },
    include: {
      ENROLLMENTS: {
        include: {
          COURSES: true,
        },
      },
    },
    orderBy: { Session_Time: "asc" },
  });

  const upcomingTutorSessions = upcomingTutorSessionsRaw.map((s) => {
    const course = s.ENROLLMENTS?.COURSES;
    const start = s.Session_Time;

    return {
      Session_ID: s.Session_ID,
      course: course?.Course_Title || "Unknown Course",
      timeFormatted: start
        ? new Date(start).toLocaleString("en-US", {
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit",
          })
        : "TBD",
      Session_Loc: s.Session_Loc || "Study Room Library",
      sortTime: start ? new Date(start).getTime() : Infinity,
    };
  });

  // ⭐ Upcoming study groups
  const upcomingStudyGroupsRaw = await prisma.sTUDY_BUDDY_GROUPS.findMany({
    where: {
      Group_Time: { gt: new Date() },
      OR: [
        { User_ID: userId }, // creator
        {
          STUDY_GROUP_MEMBERS: {
            some: { User_ID: userId }, // member
          },
        },
      ],
    },
    include: {
      ENROLLMENTS: {
        include: {
          COURSES: true,
        },
      },
      STUDY_GROUP_MEMBERS: true,
      Tutor: {
        include: {
          USERS: true, // ⭐ Needed for tutor name
        },
      },
    },
    orderBy: { Group_Time: "asc" },
  });

  const upcomingStudyGroups = upcomingStudyGroupsRaw.map((g) => {
    const course = g.ENROLLMENTS?.COURSES;

    return {
      Group_ID: g.Group_ID,
      course: course?.Course_Title || "Unknown Course",
      timeFormatted: g.Group_Time
        ? new Date(g.Group_Time).toLocaleString("en-US", {
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit",
          })
        : "TBD",
      Group_Members: g.Group_Members ?? g.STUDY_GROUP_MEMBERS.length,

      // ⭐ Tutor status
      Has_Tutor: g.Has_Tutor ?? false,
      Is_Accepted: g.Is_Accepted ?? false,
      Tutor_Name: g.Tutor?.USERS?.Name || null,

      // ⭐ Leader logic
      isLeader: g.User_ID === userId,

      sortTime: g.Group_Time ? new Date(g.Group_Time).getTime() : Infinity,
    };
  });

  console.log("RAW GROUPS:", JSON.stringify(upcomingStudyGroupsRaw, null, 2));

  // ⭐ Sort by closest upcoming
  upcomingTutorSessions.sort((a, b) => a.sortTime - b.sortTime);
  upcomingStudyGroups.sort((a, b) => a.sortTime - b.sortTime);

  return (
    <StudentHome
      gpa={gpa}
      upcomingTutorSessions={upcomingTutorSessions}
      upcomingStudyGroups={upcomingStudyGroups}
    />
  );
}
