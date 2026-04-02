import { PrismaClient } from "@prisma/client";
import { getAvailableTutors } from "@/lib/getAvailableTutors";

export async function POST(req) {
  try {
    const { courseTitle, date } = await req.json();
    const tutors = await getAvailableTutors(courseTitle, date);
    return Response.json(tutors);
  } catch (err) {
    console.error("API ERROR:", err);
    return Response.json({ tutors: [] }, { status: 500 });
  }
}
