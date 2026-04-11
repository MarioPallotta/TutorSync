import prisma from "@/lib/prisma";

export async function POST(req) {
  const { id } = await req.json();

  // Denied stays Is_Approved = false
  // We simply remove it from pending UI
  return Response.json({ success: true });
}
