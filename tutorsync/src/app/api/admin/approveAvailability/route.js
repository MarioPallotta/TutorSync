import prisma from "@/lib/prisma";

export async function POST(req) {
  const { id } = await req.json();

  await prisma.tUTOR_AVAILABILITY.update({
    where: { Availability_ID: id },
    data: { Is_Approved: true },
  });

  return Response.json({ success: true });
}
