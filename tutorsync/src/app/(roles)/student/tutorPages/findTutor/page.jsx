export const dynamic = "force-dynamic";

import prisma from "@/lib/prisma";
import FindTutorClient from "./findATutor";

export default async function FindTutorPage() {
  const courses = await prisma.COURSES.findMany({
    select: {
      Course_ID: true,
      Course_Section: true,
      Course_Title: true,
    },
    orderBy: { Course_Section: "asc" },
  });

  const safeCourses = courses.map((c) => ({
    ...c,
    Course_Section: c.Course_Section?.toString(),
  }));

  return <FindTutorClient courses={safeCourses} />;
}