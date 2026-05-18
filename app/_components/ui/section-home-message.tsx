import Link from "next/link";
import { Button } from "./button";
import Image from "next/image";
import img01 from "../../../public/images/sedeKairos.jpeg";

const SectionHomeMessage = () => {
  return (
    <div className="bg-primary/10 text-black flex items-center justify-between px-8 py-6 w-full min-h-130 lg:flex-row flex-col gap-8">
      <div className="flex flex-col justify-center items-start gap-4 lg:w-6/10">
        <h1 className="font-title font-light lg:text-7xl text-5xl leading-[1.1] tracking-wide">
          Pronto para transformar sua próxima
          <span className="text-primary italic"> conquista?</span>
        </h1>

        <p className="max-w-lg text-sm text-gray-500 font-body">
          Nossa equipe de especialistas está disponível para atender você com
          toda a atenção que você merece.
        </p>

        <Button asChild>
          <Link href="/contact">Entre em contato conosco</Link>
        </Button>
      </div>

      <div className="relative lg:w-[55%] w-full h-112.5 overflow-hidden rounded-2xl">
        <Image
          src={img01}
          alt="Imagem institucional"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default SectionHomeMessage;
