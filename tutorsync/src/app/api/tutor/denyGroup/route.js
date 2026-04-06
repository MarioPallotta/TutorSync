import prisma from "@/lib/prisma";

export async function POST(req) {
  const { groupId } = await req.json();

  await prisma.sTUDY_BUDDY_GROUPS.update({
    where: { Group_ID: groupId },
    data: {
      Tutor_ID: null,
      Has_Tutor: false,
      Is_Accepted: false,
    },
  });

  return Response.json({ success: true });
}
