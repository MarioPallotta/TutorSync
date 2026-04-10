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

    // Cannot join your own group
    if (group.User_ID === userId) {
      return NextResponse.json(
        { error: "You cannot join a group you created." },
        { status: 400 }
      );
    }

    const memberCount = group.STUDY_GROUP_MEMBERS.length;

    // Group full
    if (memberCount >= 8) {
      return NextResponse.json(
        { error: "This group is full." },
        { status: 400 }
      );
    }

    // Already a member
    const alreadyMember = group.STUDY_GROUP_MEMBERS.some(
      (m) => m.User_ID === userId
    );

    if (alreadyMember) {
      return NextResponse.json(
        { error: "You are already in this group." },
        { status: 400 }
      );
    }

    // Must be enrolled in the same course
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

    // ⭐ Add student to STUDY_GROUP_MEMBERS
    await prisma.sTUDY_GROUP_MEMBERS.create({
      data: {
        Group_ID: groupId,
        User_ID: userId,
        Enrollment_ID: enrollment.Enrollment_ID,
      },
    });

    // ⭐ Sync Group_Members to actual count
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
