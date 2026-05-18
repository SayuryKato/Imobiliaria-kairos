import { put } from "@vercel/blob";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  console.log("TOKEN:", process.env.BLOB_READ_WRITE_TOKEN);
  console.log("TOKEN EXISTS:", !!process.env.BLOB_READ_WRITE_TOKEN);
  try {
    console.log("Recebendo upload...");
    const formData = await req.formData();
    const files = formData.getAll("file") as File[];
    console.log("TOKEN:", process.env.BLOB_READ_WRITE_TOKEN);

    if (!files.length) {
      return NextResponse.json(
        { error: "Arquivo não enviado" },
        { status: 400 },
      );
    }

    const uploadedFiles = await Promise.all(
      files.map(async (file) => {
        const blob = await put(file.name, file, {
          access: "public",
          token: process.env.BLOB_READ_WRITE_TOKEN,
        });

        return blob.url;
      }),
    );

    return NextResponse.json({
      urls: uploadedFiles,
    });
  } catch (error: any) {
    console.error("UPLOAD ERROR:", error);

    return NextResponse.json(
      {
        error: error?.message || "Erro ao fazer upload",
      },
      { status: 500 },
    );
  }
}
