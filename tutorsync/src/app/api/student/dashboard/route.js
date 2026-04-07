export const dynamic = "force-dynamic";

import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    const userId = Number(session?.user?.id);

    if (!userId) {
      return Response.json(
        { error: "Unauthorized", gpa: null, upcomingTutorSessions: [], upcomingStudyGroups: [] },
        { status: 401 }
      );
    }

    // ⭐ GPA (if you don't have this yet, it will just be null)
    let gpa = null;
    // You can compute GPA here later if needed

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

    // ⭐ Upcoming study groups (stubbed for now if you don't have logic yet)
    const upcomingStudyGroups = []; // fill in later if needed

    const payload = {
      gpa,
      upcomingTutorSessions,
      upcomingStudyGroups,
    };

    console.log("API /student/dashboard RESPONSE:", payload);

    return Response.json(payload);
  } catch (err) {
    console.error("DASHBOARD API ERROR:", err);
    return Response.json(
      { error: "Internal Server Error", gpa: null, upcomingTutorSessions: [], upcomingStudyGroups: [] },
      { status: 500 }
    );
  }
}
