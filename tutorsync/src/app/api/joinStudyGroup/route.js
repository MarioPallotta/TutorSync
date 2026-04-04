import { PrismaClient } from "@/lib/prisma/generated";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const { groupId, userId } = await req.json();

    const group = await prisma.sTUDY_BUDDY_GROUPS.findUnique({
      where: { Group_ID: groupId },
    });

    if (!group) {
      return NextResponse.json(
        { error: "Group not found" },
        { status: 404 }
      );
    }

    if (group.User_ID === userId) {
      return NextResponse.json(
        { error: "You cannot join a group you created." },
        { status: 400 }
      );
    }

    if (group.Group_Members >= 8) {
      return NextResponse.json(
        { error: "This group is full." },
        { status: 400 }
      );
    }

    // Add member
    await prisma.sTUDY_BUDDY_GROUPS.update({
      where: { Group_ID: groupId },
      data: {
        Group_Members: group.Group_Members + 1,
      },
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to join group" },
      { status: 500 }
    );
  }
}
