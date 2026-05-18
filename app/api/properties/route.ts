// import { prisma } from "../../_lib/prisma";
// import { NextResponse } from "next/server";

// export async function POST(req: Request) {
//   const body = await req.json();

//   const property = await prisma.property.create({
//     data: body,
//   });

//   return NextResponse.json(property);
// }

import { NextResponse } from "next/server";
import { prisma } from "../../_lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const property = await prisma.property.create({
      data: body,
      include: {
        images: true,
        media: true,
        floorPlans: true,
      },
    });

    return NextResponse.json(property, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Erro ao criar imóvel" },
      { status: 500 },
    );
  }
}