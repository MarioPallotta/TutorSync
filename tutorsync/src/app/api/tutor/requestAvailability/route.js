import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/lib/prisma";

export async function POST(req) {
  try {
    const session = await getServerSession(authOptions);
    if (!session)
      return Response.json({ error: "Unauthorized" }, { status: 401 });

    const { tutorId, courseId, date, time } = await req.json();

    if (!tutorId || !courseId || !date || !time) {
      return Response.json({ error: "Missing fields" }, { status: 400 });
    }

    function convertTo24Hour(timeStr) {
      const [t, modifier] = timeStr.split(" ");
      let [hours, minutes] = t.split(":");
      hours = parseInt(hours, 10);

      if (modifier === "PM" && hours !== 12) hours += 12;
      if (modifier === "AM" && hours === 12) hours = 0;

      return `${String(hours).padStart(2, "0")}:${minutes}:00`;
    }

    const time24 = convertTo24Hour(time);
    const timestamp = new Date(`${date}T${time24}`);

    await prisma.tUTOR_COURSE.upsert({
      where: {
        Tutor_ID_Course_ID: {
          Tutor_ID: Number(tutorId),
          Course_ID: Number(courseId),
        },
      },
      update: {},
      create: {
        Tutor_ID: Number(tutorId),
        Course_ID: Number(courseId),
      },
    }).catch(async () => {
      const exists = await prisma.tUTOR_COURSE.findFirst({
        where: {
          Tutor_ID: Number(tutorId),
          Course_ID: Number(courseId),
        },
      });

      if (!exists) {
        await prisma.tUTOR_COURSE.create({
          data: {
            Tutor_ID: Number(tutorId),
            Course_ID: Number(courseId),
          },
        });
      }
    });

    await prisma.tUTOR_AVAILABILITY.create({
      data: {
        Tutor_ID: Number(tutorId),
        Date_Requested: new Date(date),
        Times_Requested: timestamp,
        Is_Approved: false,
      },
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error("Availability request error:", err);
    return Response.json(
      { error: err.message || "Failed to submit availability" },
      { status: 500 }
    );
  }
}
