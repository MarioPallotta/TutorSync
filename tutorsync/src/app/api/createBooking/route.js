import { PrismaClient } from "@/lib/prisma/generated";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const {
      tutorId,
      studentId,
      courseTitle,
      sessionDate,
      sessionTime,
      sessionLocation,
    } = await req.json();

    if (
      !tutorId ||
      !studentId ||
      !courseTitle ||
      !sessionDate ||
      !sessionTime ||
      !sessionLocation
    ) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Find the course by title to get course ID
    const course = await prisma.COURSES.findFirst({
      where: { Course_Title: courseTitle },
      select: { Course_ID: true },
    });

    if (!course) {
      return Response.json({ error: "Course not found" }, { status: 404 });
    }

    // Check if student is enrolled in this course
    const enrollment = await prisma.ENROLLMENTS.findFirst({
      where: {
        User_ID: studentId,
        Course_ID: course.Course_ID,
      },
      select: { Enrollment_ID: true },
    });

    if (!enrollment) {
      return Response.json(
        { error: "Student not enrolled in this course" },
        { status: 403 },
      );
    }

    // Create the tutoring session
    const session = await prisma.TUTORING_SESSION.create({
      data: {
        User_ID: studentId,
        Tutor_ID: tutorId,
        Enrollment_ID: enrollment.Enrollment_ID,
        Session_Date: new Date(sessionDate),
        Session_Time: new Date(sessionTime),
        Session_Loc: sessionLocation,
        Students_Booked: 1,
      },
    });

    return Response.json(
      { session, message: "Booking confirmed!" },
      { status: 201 },
    );
  } catch (error) {
    console.error("Booking API error:", {
      message: error.message,
      stack: error.stack,
    });
    return Response.json(
      { error: "Failed to create booking", details: error.message },
      { status: 500 },
    );
  }
}
