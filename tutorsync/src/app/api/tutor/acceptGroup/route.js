import prisma from "@/lib/prisma";

export async function POST(req) {
  const { groupId } = await req.json();

  await prisma.sTUDY_BUDDY_GROUPS.update({
    where: { Group_ID: groupId },
    data: { Is_Accepted: true },
  });

  return Response.json({ success: true });
}
