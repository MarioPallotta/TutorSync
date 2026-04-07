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
  const upcomingTutorSessionsRaw = await prisma.TUTORING_SESSION.findMany({
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
    };
  });

  // ⭐ Study groups (stub for now)
  const upcomingStudyGroups = [];

  return (
    <StudentHome
      gpa={gpa}
      upcomingTutorSessions={upcomingTutorSessions}
      upcomingStudyGroups={upcomingStudyGroups}
    />
  );
}
