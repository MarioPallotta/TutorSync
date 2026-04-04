import { PrismaClient } from "@/lib/prisma/generated";
import GroupDetailsClient from "./groupDetailsClient";

const prisma = new PrismaClient();

export default async function Page({ params }) {
  const groupId = Number(params.id);

  const group = await prisma.sTUDY_BUDDY_GROUPS.findUnique({
    where: { Group_ID: groupId },
    select: {
      Group_ID: true,
      User_ID: true,
      Group_Members: true,
      Has_Tutor: true,
      Enrollment_ID: true,   // ⭐ REQUIRED
      ENROLLMENTS: {
        select: {
          Enrollment_ID: true, // ⭐ REQUIRED
          COURSES: {
            select: { Course_Title: true }
          },
          USERS: {
            select: { Name: true }
          }
        }
      }
    }
  });

  if (!group) return <div>Invalid group.</div>;

  return <GroupDetailsClient group={group} />;
}
