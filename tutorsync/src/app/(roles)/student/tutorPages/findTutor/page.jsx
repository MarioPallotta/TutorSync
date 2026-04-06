export const dynamic = "force-dynamic";

import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import FindTutorClient from "./findATutor";

export default async function FindTutorPage() {
  const session = await getServerSession(authOptions);
  const studentId = Number(session?.user?.id);

  if (!studentId) {
    return <div>You must be logged in to view tutors.</div>;
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

  const courses = enrollments.map((e) => e.COURSES);

  const safeCourses = courses.map((c) => ({
    ...c,
    Course_Section: c.Course_Section?.toString(),
  }));

  return <FindTutorClient courses={safeCourses} />;
}
