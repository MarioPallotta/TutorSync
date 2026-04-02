export const dynamic = "force-dynamic";

import { getAvailableTutors } from "@/app/(roles)/student/tutorPages/findTutor/page";

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
