import prisma from "@/lib/prisma";
import BookingTutorPage from "./bookATutor";

export default async function Page({ params, searchParams }) {
  const { id } = await params;
  const { date, time, availabilityId, course } = await searchParams;

  const tutorId = Number(id);

  if (!tutorId) {
    return <div>Invalid tutor ID.</div>;
  }

  // Fetch tutor info + courses
  const tutor = await prisma.tutor.findUnique({
    where: { Tutor_ID: tutorId },
    select: {
      Tutor_ID: true,
      USERS: { select: { Name: true, Email: true } },
      TUTOR_COURSE: {
        select: {
          COURSES: { select: { Course_Title: true } },
        },
      },
    },
  });

  if (!tutor) return <div>Invalid tutor.</div>;

  // Fetch availability row
  let availability = null;

  if (availabilityId) {
    availability = await prisma.TUTOR_AVAILABILITY.findUnique({
      where: { Availability_ID: Number(availabilityId) },
      select: { Times_Requested: true },
    });
  }

  // Fetch booked sessions for this tutor on this date
  const bookedSessions = await prisma.TUTORING_SESSION.findMany({
    where: {
      Tutor_ID: tutorId,
      Session_Date: new Date(date),
    },
    select: { Session_Time: true },
  });

  const bookedTimes = bookedSessions.map((s) =>
    s.Session_Time.toISOString()
  );

  return (
    <BookingTutorPage
      tutor={{
        id: tutor.Tutor_ID,
        name: tutor.USERS.Name,
        email: tutor.USERS.Email,
        courses: tutor.TUTOR_COURSE.map((tc) => tc.COURSES.Course_Title),
        Times_Requested: availability?.Times_Requested || time || null,
        availabilityId: availabilityId ? Number(availabilityId) : null,
        selectedCourse: course || null,
        date,
        bookedTimes, // ⭐ pass booked times to client
        bio: "Bio coming soon.",
      }}
    />
  );
}
