// lib/getAvailableTutors.js
import { PrismaClient } from "@prisma/client";

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
    tutors: tutors.map((t) => ({
      id: t.Tutor_ID,
      name: t.USERS.Name,
      availability: t.TUTOR_AVAILABILITY.length
        ? new Date(t.TUTOR_AVAILABILITY[0].Times_Requested).toLocaleTimeString(
            [],
            { hour: "numeric", minute: "2-digit" },
          ) +
          " - " +
          new Date(
            t.TUTOR_AVAILABILITY[0].Times_Requested.getTime() + 60 * 60 * 1000,
          ).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })
        : "Unavailable",
    })),
  };
}
