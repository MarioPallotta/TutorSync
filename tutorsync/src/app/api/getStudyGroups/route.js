import { getAvailableStudyGroups } from "@/lib/getAvailableStudyGroups";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { courseTitle } = await req.json();

    if (!courseTitle) {
      return NextResponse.json({ groups: [] });
    }

    const result = await getAvailableStudyGroups(courseTitle);
    return NextResponse.json(result);
  } catch (err) {
    console.error("getStudyGroups error:", err);
    return NextResponse.json(
      { error: err.message || "Failed to fetch study groups" },
      { status: 500 }
    );
  }
}
