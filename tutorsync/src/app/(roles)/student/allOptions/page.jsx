export const dynamic = "force-dynamic";

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/lib/prisma";
import AllOptionsClient from "./allOptions";

export default async function Page() {
  const session = await getServerSession(authOptions);
  if (!session) return <div>Unauthorized</div>;

  const userId = Number(session.user.id);

  // GPA
  const student = await prisma.student.findUnique({
    where: { User_ID: userId },
    select: { GPA: true },
  });

  const gpa = student?.GPA ? Number(student.GPA) : null;

  // Upcoming tutor sessions
  const upcomingTutorSessionsRaw = await prisma.tUTORING_SESSION.findMany({
    where: {
      User_ID: userId,
      Session_Time: { gt: new Date() },
    },
    include: {
      ENROLLMENTS: { include: { COURSES: true } },
    },
    orderBy: { Session_Time: "asc" },
  });

  const upcomingTutorSessions = upcomingTutorSessionsRaw.map((s) => ({
    Session_ID: s.Session_ID,
    course: s.ENROLLMENTS?.COURSES?.Course_Title || "Unknown Course",
    timeFormatted: new Date(s.Session_Time).toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
    }),
    Session_Loc: s.Session_Loc || "Study Room Library",
  }));

  // Upcoming study groups
  const upcomingStudyGroupsRaw = await prisma.sTUDY_BUDDY_GROUPS.findMany({
    where: {
      Group_Time: { gt: new Date() },
      OR: [
        { User_ID: userId },
        { STUDY_GROUP_MEMBERS: { some: { User_ID: userId } } },
      ],
    },
    include: {
      ENROLLMENTS: { include: { COURSES: true } },
      STUDY_GROUP_MEMBERS: true,
      Tutor: { include: { USERS: true } },
    },
    orderBy: { Group_Time: "asc" },
  });

  const upcomingStudyGroups = upcomingStudyGroupsRaw.map((g) => ({
    Group_ID: g.Group_ID,
    course: g.ENROLLMENTS?.COURSES?.Course_Title || "Unknown Course",
    timeFormatted: new Date(g.Group_Time).toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
    }),
    Group_Members: g.STUDY_GROUP_MEMBERS.length,
    Tutor_Name: g.Tutor?.USERS?.Name || null,
    Has_Tutor: g.Has_Tutor,
    Is_Accepted: g.Is_Accepted,
    isLeader: g.User_ID === userId,
  }));

  return (
    <AllOptionsClient
      gpa={gpa}
      upcomingTutorSessions={upcomingTutorSessions}
      upcomingStudyGroups={upcomingStudyGroups}
    />
  );
}
