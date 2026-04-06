export const dynamic = "force-dynamic";

import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import CreateStudyGroupPage from "./createStudyGroup";

export default async function Page() {
  const session = await getServerSession(authOptions);
  const studentId = Number(session?.user?.id);

  if (!studentId) {
    return <div>You must be logged in to create a study group.</div>;
  }

  const enrollments = await prisma.ENROLLMENTS.findMany({
    where: { User_ID: studentId },
    select: {
      COURSES: {
        select: {
          Course_ID: true,
          Course_Title: true,
          Course_Section: true,
        },
      },
    },
  });

  const courses = enrollments.map((e) => ({
    Course_ID: e.COURSES.Course_ID,
    Course_Title: e.COURSES.Course_Title,
    Course_Section: e.COURSES.Course_Section?.toString(),
  }));

  const courseIds = courses.map((c) => c.Course_ID);

  const tutors = await prisma.TUTOR_COURSE.findMany({
    where: {
      Course_ID: { in: courseIds },
    },
    select: {
      Tutor: {
        select: {
          Tutor_ID: true,
          USERS: { select: { Name: true } },
        },
      },
      COURSES: {
        select: {
          Course_Title: true,
        },
      },
    },
  });

  // Flatten tutor list
  const tutorList = tutors.map((t) => ({
    id: t.Tutor.Tutor_ID,
    name: t.Tutor.USERS.Name,
    course: t.COURSES.Course_Title,
  }));

  return (
    <CreateStudyGroupPage
      courses={courses}
      tutors={tutorList}
    />
  );
}
