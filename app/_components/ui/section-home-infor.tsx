import Image from "next/image";
import img01 from "../../../public/images/img.jpg";
import { Button } from "./button";
import Link from "next/link";

const SectionHomeInfor = () => {
  return (
    <div
      className="flex 
      flex-col 
      justify-around
      lg:flex-row 
      items-center 
      p-6 
      bg-primary/10 
      text-black
    "
    >
      <div className="flex flex-col justify-center items-start gap-4">
        <p className="text-primary text-sm">KAIROS REAL STATE</p>
        <h1 className="font-title font-light text-7xl leading-[1.1] tracking-wide">
          Sua casa do seu
          <br />
          <span className="text-primary italic">jeito</span>
        </h1>

        <p className="mt-6 max-w-lg text-sm text-gray-500 font-body">
          Desenvolvemos projetos residenciais que equilibram arquitetura
          contemporânea com qualidade de vida. Cada empreendimento é pensado nos
          mínimos detalhes para oferecer conforto, segurança e beleza — porque
          você merece um lar à sua altura.
        </p>

        <Button asChild>
          <Link href={"/#about"}>CONHECER A EMPRESA</Link>
        </Button>
      </div>

      <Image
        src={img01}
        alt="Imagem de uma casa moderna com piscina"
        width={750}
        height={600}
        className="mt-6"
        objectFit="cover"
      />
    </div>
  );
};

export default SectionHomeInfor;
