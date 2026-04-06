
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/lib/prisma";

export async function POST(req) {
  try {
    const session = await getServerSession(authOptions);
    const userId = Number(session?.user?.id);

    if (!userId) {
      return Response.json({ error: "Not authorized" }, { status: 401 });
    }

    const { courseTitle, date, time, maxMembers, includeTutor, tutorId } =
      await req.json();

    if (!courseTitle || !date || !time) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const enrollment = await prisma.eNROLLMENTS.findFirst({
      where: {
        User_ID: userId,
        COURSES: { Course_Title: courseTitle },
      },
    });

    if (!enrollment) {
      return Response.json(
        { error: "You are not enrolled in this course" },
        { status: 400 }
      );
    }

    const group = await prisma.sTUDY_BUDDY_GROUPS.create({
      data: {
        User_ID: userId,
        Enrollment_ID: enrollment.Enrollment_ID,
        Tutor_ID: includeTutor ? Number(tutorId) : null,
        Has_Tutor: includeTutor,
        Group_Members: 1,
        Group_Date: new Date(date),
        Group_Time: new Date(`${date}T${time}:00`),
        Is_Accepted: true,
      },
    });

    return Response.json({ success: true, group });
  } catch (err) {
    console.error("Create Study Group ERROR:", err);
    return Response.json({ error: err.message }, { status: 500 });
  }
}
