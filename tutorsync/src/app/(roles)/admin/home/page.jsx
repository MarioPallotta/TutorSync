import prisma from "@/lib/prisma";
import AdminHomeClient from "./home";

export default async function AdminHomePage() {
  const pending = await prisma.tUTOR_AVAILABILITY.findMany({
    where: { Is_Approved: false },
    include: {
      Tutor: {
        include: {
          USERS: {
            select: { Name: true },
          },
        },
      },
    },
    orderBy: { Date_Requested: "asc" },
  });

  const approved = await prisma.tUTOR_AVAILABILITY.findMany({
    where: { Is_Approved: true },
    include: {
      Tutor: {
        include: {
          USERS: {
            select: { Name: true },
          },
        },
      },
    },
    orderBy: { Date_Requested: "asc" },
  });

  return <AdminHomeClient pending={pending} approved={approved} />;
}
