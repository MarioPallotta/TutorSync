export const dynamic = "force-dynamic";

import { PrismaClient } from "@/lib/prisma/generated";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import StudyGroupClient from "./findAStudyGroup";

const prisma = new PrismaClient();

export default async function StudyGroupPage() {
  const session = await getServerSession(authOptions);
  const studentId = Number(session?.user?.id);

  if (!studentId) {
    return <div>You must be logged in to view study groups.</div>;
  }

  // Get ONLY courses the student is enrolled in
  const enrollments = await prisma.eNROLLMENTS.findMany({
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

  return <StudyGroupClient courses={safeCourses} />;
}
