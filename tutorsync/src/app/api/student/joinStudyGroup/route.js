import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req) {
  try {
    const { groupId, userId } = await req.json();

    const group = await prisma.sTUDY_BUDDY_GROUPS.findUnique({
      where: { Group_ID: groupId },
      include: {
        STUDY_GROUP_MEMBERS: true,
        ENROLLMENTS: true, // needed to check course match
      },
    });

    if (!group) {
      return NextResponse.json({ error: "Group not found" }, { status: 404 });
    }

    // cannot join your own group
    if (group.User_ID === userId) {
      return NextResponse.json(
        { error: "You cannot join a group you created." },
        { status: 400 }
      );
    }

    const memberCount = group.STUDY_GROUP_MEMBERS.length;

    // group full
    if (memberCount >= 8) {
      return NextResponse.json(
        { error: "This group is full." },
        { status: 400 }
      );
    }

    // already a member
    const alreadyMember = group.STUDY_GROUP_MEMBERS.some(
      (m) => m.User_ID === userId
    );

    if (alreadyMember) {
      return NextResponse.json(
        { error: "You are already in this group." },
        { status: 400 }
      );
    }

    // must be enrolled in the same course
    const enrollment = await prisma.eNROLLMENTS.findFirst({
      where: {
        User_ID: userId,
        Course_ID: group.ENROLLMENTS.Course_ID,
      },
    });

    if (!enrollment) {
      return NextResponse.json(
        { error: "You are not enrolled in this course." },
        { status: 400 }
      );
    }

    await prisma.sTUDY_GROUP_MEMBERS.create({
      data: {
        Group_ID: groupId,
        User_ID: userId,
        Enrollment_ID: enrollment.Enrollment_ID,
      },
    });

    const newCount = await prisma.sTUDY_GROUP_MEMBERS.count({
      where: { Group_ID: groupId },
    });

    await prisma.sTUDY_BUDDY_GROUPS.update({
      where: { Group_ID: groupId },
      data: { Group_Members: newCount },
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Join group error:", err);
    return NextResponse.json(
      { error: "Failed to join group" },
      { status: 500 }
    );
  }
}
