import { NextResponse } from "next/server";
import { prisma } from "../../_lib/prisma";

export async function GET() {
  const realtors = await prisma.realtor.findMany({
    select: {
      id: true,
      name: true,
      email: true,
    },
    orderBy: {
      name: "asc",
    },
  });

  return NextResponse.json(realtors);
}
