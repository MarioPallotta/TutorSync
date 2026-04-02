import prisma from "@/lib/prisma";
import BookingTutorPage from "./bookATutor";

export default async function Page({ params }) {
  const { id } = await params;
  const tutorId = Number(id);

  if (!tutorId) {
    return <div>Invalid tutor ID.</div>;
  }

  const tutor = await prisma.tutor.findUnique({
    where: { Tutor_ID: tutorId },
    select: {
      Tutor_ID: true,
      USERS: { select: { Name: true, Email: true } },
      TUTOR_COURSE: {
        select: {
          COURSES: { select: { Course_Title: true } }
        }
      },
      TUTOR_AVAILABILITY: {
        select: { Times_Requested: true },
        orderBy: { Times_Requested: "asc" },
        take: 1
      }
    }
  });

  if (!tutor) return <div>Invalid tutor.</div>;

  return (
    <BookingTutorPage
      tutor={{
        id: tutor.Tutor_ID,
        name: tutor.USERS.Name,
        email: tutor.USERS.Email,
        course: tutor.TUTOR_COURSE[0]?.COURSES.Course_Title || "Course",
        Times_Requested: tutor.TUTOR_AVAILABILITY[0]?.Times_Requested || null,
        bio: "Bio coming soon."
      }}
    />
  );
}
