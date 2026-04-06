import prisma from "@/lib/prisma";

export async function getAvailableTutors(courseTitle, date) {
  const [year, month, day] = date.split("-");
  const queryDate = new Date(
    Date.UTC(parseInt(year), parseInt(month) - 1, parseInt(day)),
  );

  const tutors = await prisma.tutor.findMany({
    where: {
      TUTOR_COURSE: {
        some: { COURSES: { Course_Title: courseTitle } },
      },
      TUTOR_AVAILABILITY: {
        some: {
          Is_Approved: true,
          Date_Requested: queryDate,
        },
      },
    },
    select: {
      Tutor_ID: true,
      USERS: { select: { Name: true } },
      TUTOR_AVAILABILITY: {
        where: {
          Is_Approved: true,
          Date_Requested: queryDate,
        },
        select: {
          Availability_ID: true,
          Times_Requested: true,
        },
        take: 1,
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
          Times_Requested: null,
          availabilityId: null,
        };
      }

      const start = new Date(String(t.TUTOR_AVAILABILITY[0].Times_Requested));
      const end = new Date(start.getTime() + 4 * 60 * 60 * 1000);

      return {
        id: t.Tutor_ID,
        name: t.USERS.Name,
        availabilityId: t.TUTOR_AVAILABILITY[0].Availability_ID,
        Times_Requested: start.toISOString(),
        availability:
          start.toLocaleTimeString("en-US", {
            timeZone: "America/New_York",
            hour: "numeric",
            minute: "2-digit",
          }) +
          " - " +
          end.toLocaleTimeString("en-US", {
            timeZone: "America/New_York",
            hour: "numeric",
            minute: "2-digit",
          }),
      };
    }),
  };
}
