export const dynamic = "force-dynamic";

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

  const safeCourses = courses.map((c) => ({
    ...c,
    Course_Section: c.Course_Section?.toString(),
  }));

  return <FindTutorClient courses={safeCourses} />;
}

export async function getAvailableTutors(courseTitle, date) {
  const prisma = new PrismaClient();

  const tutors = await prisma.tutor.findMany({
    where: {
      TUTOR_COURSE: {
        some: { COURSES: { Course_Title: courseTitle } },
      },
      TUTOR_AVAILABILITY: {
        some: {
          Is_Approved: true,
          Date_Requested: new Date(date),
        },
      },
    },
    select: {
      Tutor_ID: true,
      USERS: { select: { Name: true } },
      TUTOR_AVAILABILITY: {
        where: {
          Is_Approved: true,
          Date_Requested: new Date(date),
        },
        select: {
          Times_Requested: true,
        },
      },
    },
  });

  return {
    tutors: tutors.map((t) => {
      if (!t.TUTOR_AVAILABILITY.length) {
        return {
          id: t.Tutor_ID,
          name: t.USERS.Name,
          availability: "Unavailable",
        };
      }

      const start = new Date(String(t.TUTOR_AVAILABILITY[0].Times_Requested));
      const end = new Date(start.getTime() + 3 * 60 * 60 * 1000);

      return {
        id: t.Tutor_ID,
        name: t.USERS.Name,
        availability:
          start.toLocaleTimeString([], {
            hour: "numeric",
            minute: "2-digit",
          }) +
          " - " +
          end.toLocaleTimeString([], {
            hour: "numeric",
            minute: "2-digit",
          }),
      };
    }),
  };
}
