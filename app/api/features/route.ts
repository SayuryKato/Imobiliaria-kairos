import { NextResponse } from "next/server";
import { prisma } from "../../_lib/prisma";

export async function GET() {
  const features = await prisma.feature.findMany({
    select: {
      id: true,
      name: true,
    },
    orderBy: {
      name: "asc",
    },
  });

  return NextResponse.json(features);
}
