import Link from "next/link";
import { Button } from "./button";
import Image from "next/image";
import img01 from "../../../public/images/sedeKairos.jpeg";

const SectionHomeMessage = () => {
  return (
    <div className="bg-primary/10 text-black flex items-center justify-around p-2 h-full w-full lg:h-130 lg:flex-row flex-col gap-1">
      <div className="flex flex-col justify-center items-start gap-4">
        <h1 className="font-title font-light lg:text-7xl text-5xl leading-[1.1] tracking-wide">
          Pronto para encontrar o seu
          <br />
          <span className="text-primary italic">lar perfeito?</span>
        </h1>

        <p className="max-w-lg text-sm text-gray-500 font-body">
          Nossa equipe de especialistas está disponível para atender você com
          toda a atenção que você merece.
        </p>

        <Button asChild>
          <Link href="/contact">Entre em contato conosco</Link>
        </Button>
      </div>

      <div className="relative w-1/3 h-64 lg:h-96">
        <Image
          src={img01}
          alt="Imagem de uma casa moderna com piscina"
          fill
          objectFit="contain"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default SectionHomeMessage;
