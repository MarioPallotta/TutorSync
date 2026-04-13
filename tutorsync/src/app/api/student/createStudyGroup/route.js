
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

function convertTo24Hour(timeStr) {

  const [time, modifier] = timeStr.split(" ");
  let [hours, minutes] = time.split(":");

  hours = parseInt(hours, 10);

  if (modifier === "PM" && hours !== 12) {
    hours += 12;
  }
  if (modifier === "AM" && hours === 12) {
    hours = 0;
  }

  return `${String(hours).padStart(2, "0")}:${minutes}:00`;
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
const time24 = convertTo24Hour(time);

const group = await prisma.sTUDY_BUDDY_GROUPS.create({
  data: {
    User_ID: userId,
    Enrollment_ID: enrollment.Enrollment_ID,
    Tutor_ID: includeTutor ? Number(tutorId) : null,
    Has_Tutor: includeTutor,
    Is_Accepted: false,
    Group_Members: 0,
    Group_Date: new Date(date),
    Group_Time: new Date(`${date}T${time24}`),
  },
});

await prisma.sTUDY_GROUP_MEMBERS.create({
  data: {
    Group_ID: group.Group_ID,
    User_ID: userId,
    Enrollment_ID: enrollment.Enrollment_ID,
  },
});

const memberCount = await prisma.sTUDY_GROUP_MEMBERS.count({
  where: { Group_ID: group.Group_ID },
});

await prisma.sTUDY_BUDDY_GROUPS.update({
  where: { Group_ID: group.Group_ID },
  data: { Group_Members: memberCount },
});



    return Response.json({ success: true, group });
  } catch (err) {
    console.error("Create Study Group ERROR:", err);
    return Response.json({ error: err.message }, { status: 500 });
  }
}
