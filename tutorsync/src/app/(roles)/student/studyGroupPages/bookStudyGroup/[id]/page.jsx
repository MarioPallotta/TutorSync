import prisma from "@/lib/prisma";
import GroupDetailsClient from "./bookAStudyGroup";

export default async function Page({ params }) {
  const { id } = await params;
  const groupId = Number(id);

  if (!groupId) {
    return <div>Invalid group ID.</div>;
  }

  const group = await prisma.STUDY_BUDDY_GROUPS.findUnique({
    where: { Group_ID: groupId },
    select: {
      Group_ID: true,
      User_ID: true,
      Group_Members: true,
      Has_Tutor: true,
      Group_Date: true,
      Group_Time: true,
      Enrollment_ID: true,
      ENROLLMENTS: {
        select: {
          Enrollment_ID: true,
          COURSES: { select: { Course_Title: true } },
          USERS: { select: { Name: true } },
        },
      },
      STUDY_GROUP_MEMBERS: {
        select: {
          User_ID: true,
          USERS: { select: { Name: true } },
        },
      },
    },
  });

  if (!group) return <div>Invalid group.</div>;

  return <GroupDetailsClient group={group} />;
}
