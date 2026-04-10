import prisma from "@/lib/prisma";

export async function getAvailableStudyGroups(courseTitle) {
  const enrollments = await prisma.ENROLLMENTS.findMany({
    where: {
      COURSES: {
        Course_Title: courseTitle,
      },
    },
    select: {
      Enrollment_ID: true,
      COURSES: {
        select: { Course_Title: true },
      },
      STUDY_BUDDY_GROUPS: {
        select: {
          Group_ID: true,
          Group_Members: true,
          Has_Tutor: true,
          Group_Date: true,
          Group_Time: true,
          STUDY_GROUP_MEMBERS: {
            select: { Member_ID: true },
          },
        },
      },
    },
  });

  const groups = enrollments.flatMap((enrollment) =>
    enrollment.STUDY_BUDDY_GROUPS.map((group) => ({
      ...group,
      course: enrollment.COURSES.Course_Title,
    }))
  );

  return {
    groups: groups.map((g) => {
      // ⭐ DATE — NO TIMEZONE CONVERSION
      const formattedDate = g.Group_Time
  ? new Intl.DateTimeFormat("en-US", {
      timeZone: "America/New_York",
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(new Date(g.Group_Time))
  : "TBD";


      // ⭐ TIME — CONVERT TO EST
      const formattedTime = g.Group_Time
        ? new Intl.DateTimeFormat("en-US", {
            timeZone: "America/New_York",
            hour: "numeric",
            minute: "2-digit",
          }).format(new Date(g.Group_Time))
        : "TBD";

      return {
        id: g.Group_ID,
        course: g.course,
        date: formattedDate,
        time: formattedTime,
        members: g.STUDY_GROUP_MEMBERS.length,
max: 8,

      };
    }),
  };
}
