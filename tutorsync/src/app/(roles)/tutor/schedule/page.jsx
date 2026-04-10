import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/lib/prisma";
import RequestAvailabilityClient from "./schedule";

export default async function RequestAvailabilityPage() {
  const session = await getServerSession(authOptions);
  const tutorUserId = Number(session?.user?.id);

  if (!tutorUserId) return <div>Unauthorized</div>;

  const tutor = await prisma.tutor.findFirst({
    where: { User_ID: tutorUserId },
  });

  if (!tutor) return <div>You are not registered as a tutor.</div>;

  const allCourses = await prisma.cOURSES.findMany({
    orderBy: { Course_Title: "asc" },
  });

  const safeCourses = allCourses.map((c) => ({
    ...c,
    Course_Section: c.Course_Section?.toString() ?? null,
  }));

  return (
    <RequestAvailabilityClient
      tutorId={tutor.Tutor_ID}
      tutorName={session.user.name}
      courses={safeCourses}
    />
  );
}
