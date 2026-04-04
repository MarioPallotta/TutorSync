import { getAvailableTutors } from "@/lib/getAvailableTutors";

export async function POST(req) {
  try {
    const { courseTitle, date } = await req.json();
    
    if (!courseTitle || !date) {
      return Response.json(
        { error: "Missing courseTitle or date", tutors: [] },
        { status: 400 }
      );
    }

    const result = await getAvailableTutors(courseTitle, date);
    return Response.json(result);
  } catch (err) {
    console.error("getTutors API ERROR:", err);
    return Response.json(
      { error: err.message, tutors: [] },
      { status: 500 }
    );
  }
}