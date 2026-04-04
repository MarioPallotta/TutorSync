import { PrismaClient } from "@/lib/prisma/generated";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const { courseTitle } = await req.json();

    if (!courseTitle) {
      return NextResponse.json({ groups: [] });
    }

    const groups = await prisma.sTUDY_BUDDY_GROUPS.findMany({
      where: {
        ENROLLMENTS: {
          COURSES: { Course_Title: courseTitle },
        },
      },
      select: {
        Group_ID: true,
        Group_Members: true,
        Has_Tutor: true,
        ENROLLMENTS: {
          select: {
            COURSES: { select: { Course_Title: true } },
          },
        },
      },
    });

    const formatted = groups.map((g) => ({
      id: g.Group_ID,
      course: g.ENROLLMENTS.COURSES.Course_Title,
      time: "TBD", // You will replace this once you add date/time fields
      members: g.Group_Members,
      max: 8,
    }));

    return NextResponse.json({ groups: formatted });
  } catch (err) {
    return NextResponse.json({ groups: [] });
  }
}
