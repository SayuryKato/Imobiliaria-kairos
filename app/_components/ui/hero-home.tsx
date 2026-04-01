import { ChevronsRight } from "lucide-react";
import { Button } from "./button";
import { prisma } from "../../_lib/prisma";
import HeroCarousel from "./heroCarousel";
import Link from "next/link";
import { notFound } from "next/navigation";
export default async function HeroHome() {
  const property = await prisma.property.findUnique({
    where: { id: 1 },
    include: {
      images: true,
    },
  });
  console.log("property", property);

  if (!property) {
   return <div>Não foi possível carregar os dados.</div>;
  }

  return (
    <main className="relative min-h-screen w-full text-white">
      {/* Imagem de fundo */}
      {property && (
        <div className="absolute inset-0 -z-10">
          <div key={property.id}>
            <HeroCarousel images={property.images.map((img) => img.imageUrl)} />
          </div>

          {/* overlay escuro */}
          <div className="absolute inset-0 bg-black/70" />
        </div>
      )}

      {/* Conteúdo */}
      <div className="flex flex-col justify-center min-h-screen max-w-6xl mx-auto px-6">
        {/* Título */}
        <h1 className="font-title font-light text-7xl leading-[1.1] tracking-wide">
          Uma vida <span className="text-primary italic">mais fácil</span>
          <br />
          com uma casa como
          <br />a nossa casa.
        </h1>

        {/* descrição */}
        <p className="mt-6 max-w-lg text-sm text-gray-200 font-body">
          Encontre o imóvel perfeito para o seu estilo de vida. Há 15 anos
          conectando pessoas aos seus lares com excelência e sofisticação.
        </p>

        {/* botão */}
        <div className="flex mt-6">
          <Button asChild>
            <Link href={"/Property"}>
              <span>Explorar mais</span>
              <ChevronsRight size={18} />
            </Link>
          </Button>
        </div>
      </div>

      {/* Hotspots da imagem */}
      {/* <div className="absolute top-[30%] right-[20%] bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
        Localização Vila Matilde
      </div>

      <div className="absolute top-[50%] right-[30%] bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
        Dois andares
      </div>

      <div className="absolute bottom-[20%] right-[35%] bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
        Casa com piscina
      </div> */}
    </main>
  );
}
