import prisma from "@/lib/prisma";

export async function POST(req) {
  try {
    const {
      tutorId,
      studentId,
      courseTitle,
      sessionDate,   // e.g. "2026-04-26"
      sessionTime,   // ISO string "2026-04-26T14:00:00.000Z"
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
        { status: 400 }
      );
    }

    // Normalize date to avoid timezone shifting the calendar day
    // Store date around midday so local toLocaleDateString shows the correct day
    const sessionDateObj = new Date(sessionDate + "T12:00:00");

    // Build a time value on the same calendar date as sessionDate
    const rawTime = new Date(sessionTime);
    const sessionTimeObj = new Date(sessionDateObj);
    sessionTimeObj.setHours(
      rawTime.getHours(),
      rawTime.getMinutes(),
      rawTime.getSeconds(),
      0
    );

    // Conflict checks
    const studentTutorConflict = await prisma.TUTORING_SESSION.findFirst({
      where: {
        User_ID: studentId,
        Session_Date: sessionDateObj,
        Session_Time: sessionTimeObj,
      },
    });

    if (studentTutorConflict) {
      return Response.json(
        { error: "You already have a tutoring session at this time." },
        { status: 400 }
      );
    }

    const studentGroupConflict = await prisma.STUDY_BUDDY_GROUPS.findFirst({
      where: {
        Group_Date: sessionDateObj,
        Group_Time: sessionTimeObj,
        STUDY_GROUP_MEMBERS: {
          some: { User_ID: studentId },
        },
      },
    });

    if (studentGroupConflict) {
      return Response.json(
        { error: "You already have a study group at this time." },
        { status: 400 }
      );
    }

    const tutorTutorConflict = await prisma.TUTORING_SESSION.findFirst({
      where: {
        Tutor_ID: tutorId,
        Session_Date: sessionDateObj,
        Session_Time: sessionTimeObj,
      },
    });

    if (tutorTutorConflict) {
      return Response.json(
        { error: "This tutor already has a session at this time." },
        { status: 400 }
      );
    }

    const tutorGroupConflict = await prisma.STUDY_BUDDY_GROUPS.findFirst({
      where: {
        Tutor_ID: tutorId,
        Group_Date: sessionDateObj,
        Group_Time: sessionTimeObj,
      },
    });

    if (tutorGroupConflict) {
      return Response.json(
        { error: "This tutor is already leading a study group at this time." },
        { status: 400 }
      );
    }

    const course = await prisma.COURSES.findFirst({
      where: { Course_Title: courseTitle },
      select: { Course_ID: true },
    });

    if (!course) {
      return Response.json({ error: "Course not found" }, { status: 404 });
    }

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
        { status: 403 }
      );
    }

    const session = await prisma.TUTORING_SESSION.create({
      data: {
        User_ID: studentId,
        Tutor_ID: tutorId,
        Enrollment_ID: enrollment.Enrollment_ID,
        Session_Date: sessionDateObj,   // @db.Date
        Session_Time: sessionTimeObj,   // @db.Timestamp(0)
        Session_Loc: sessionLocation,
        Students_Booked: 1,
      },
    });

    return Response.json(
      { session, message: "Booking confirmed!" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Booking API error:", {
      message: error.message,
      stack: error.stack,
    });
    return Response.json(
      { error: "Failed to create booking", details: error.message },
      { status: 500 }
    );
  }
}
