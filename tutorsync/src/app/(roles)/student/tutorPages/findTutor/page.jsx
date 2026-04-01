import { PrismaClient } from "@/lib/prisma/generated";
import FindTutorClient from "./findATutor";

const prisma = new PrismaClient();

export default async function FindTutorPage() {
  const courses = await prisma.cOURSES.findMany({
    select: {
      Course_ID: true,
      Course_Section: true,
      Course_Title: true,
    },
    orderBy: { Course_Section: "asc" },
  });

  return <FindTutorClient courses={courses} />;
}
