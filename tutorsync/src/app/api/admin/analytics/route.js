import prisma from "@/lib/prisma";

export async function GET() {
  // Mock monthly visits
  const mockVisits = [
    { month: "Jan", visits: 120 },
    { month: "Feb", visits: 180 },
    { month: "Mar", visits: 240 },
    { month: "Apr", visits: 300 },
  ];

  const totalStudyGroups = await prisma.STUDY_BUDDY_GROUPS.count();
  const totalSessions = await prisma.TUTORING_SESSION.count();

  return Response.json({
    visits: mockVisits,
    totalStudyGroups,
    totalSessions,
  });
}
