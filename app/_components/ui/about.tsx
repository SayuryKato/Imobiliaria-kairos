import Image from "next/image";
import Img02 from "../../../public/images/img02.png";
import CardAbout from "./card-about";

const AboutUs = () => {
  return (
    <div
      className="bg-black flex flex-col lg:flex-row justify-around p-6 w-full gap-10"
      id="about"
    >
      <div className="w-full lg:w-1/2 h-62.5 lg:h-auto relative">
        <Image
          src={Img02}
          alt="About Us"
          fill
          className="mx-auto"
          objectFit="contain"
        />

        <div className="absolute inset-0 bg-linear-to-l from-black via-black/40 to-transparent" />
      </div>

      <div className="flex flex-col justify-center items-start gap-2 lg:w-5/10">
        <p className="text-primary text-sm">Sobre nós</p>
        <h1 className="font-title font-light leading-[1.1] tracking-wide text-5xl lg:text-7xl">
          Construímos mais do que imóveis: criamos
          <span className="text-primary italic"> histórias</span>
        </h1>

        <p className="mt-1 max-w-lg text-sm text-gray-500 font-body">
          Mais de 500 famílias já realizaram o sonho da casa própria com a New
          Home. Confira algumas histórias reais.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <CardAbout
            title="Transparência"
            description="Processos claros e sem surpresas do início ao fim"
          />
          <CardAbout
            title="Excelência"
            description="Projetos entregues no prazo com padrão premium
          "
          />
          <CardAbout
            title="Proximidade"
            description="Consultores dedicados para cada cliente
          "
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
