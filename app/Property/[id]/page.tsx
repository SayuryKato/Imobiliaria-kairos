import { HeroCarouselProperty } from "@/app/_components/ui/hero-carousel-property";
import { prisma } from "@/app/_lib/prisma";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../_components/ui/breadcrumb";
import TextTitle from "@/app/_components/ui/text-title";
import { MapPin } from "lucide-react";
import {
  CardPropertyInfor,
  CardPropertyInforTime,
  CardPropertyInforDimensions,
  CardPropertyInforCaracteristics,
  CardPropertyInforPayment,
  CardPropertyInforPerson,
} from "@/app/_components/ui/card-property-infor";
import { Bed, ShowerHead, Car, Ruler, Building } from "lucide-react";
import imgPlanta from "@/public/images/planta01.png";
import Image from "next/image";

interface PropertyDetailsProps {
  params: Promise<{
    id: string;
  }>;
}

const PropertyDetails = async ({ params }: PropertyDetailsProps) => {
  const { id } = await params;

  const property = await prisma.property.findUnique({
    where: {
      id: Number(id),
    },
  });

  console.log(property);

  return (
    <div className="text-gray-500">
      {property && <HeroCarouselProperty images={property.imagesUrl} />}

      <div className="p-8 flex justify-between gap-4">
        <section className="flex flex-col gap-8 w-7/10">
          <div className="flex flex-col gap-2">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Início</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/Property">Empreendimentos</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Detalhes</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <TextTitle title="RESIDÊNCIA" subtitle="ALTO PINHEIROS" />
            <p className="flex gap-2 items-center">
              <MapPin className="text-primary" /> Alameda Santos, 1000 - São
              Paulo, SP
            </p>
          </div>

          <section className="flex items-center justify-between gap-2">
            <CardPropertyInfor title="Quartos" value={2} icon={<Bed />} />
            <CardPropertyInfor
              title="Banheiros"
              value={2}
              icon={<ShowerHead />}
            />
            <CardPropertyInfor title="Vagas" value={3} icon={<Car />} />
            <CardPropertyInfor
              title="Área Total"
              value={"148m²"}
              icon={<Ruler />}
            />
            <CardPropertyInfor title="Andar" value={"8º"} icon={<Building />} />
          </section>

          <section>
            <h1 className="text-primary font-title text-2xl mb-2">DESCRIÇÃO</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </section>

          <section>
            <h1 className="text-primary font-title text-2xl mb-2">
              LOCALIZAÇÃO E PROXIMIDADES
            </h1>
            <CardPropertyInforTime />
          </section>

          <section>
            <h1 className="text-primary font-title text-2xl mb-2">MAPA</h1>
            <div className="justify-center items-center flex">
              <Image src={imgPlanta} alt="Planta do imóvel" height={500} />
            </div>
          </section>

          <section>
            <h1 className="text-primary font-title text-2xl mb-2">DIMENSÕES</h1>
            <CardPropertyInforDimensions />
          </section>

          <section>
            <h1 className="text-primary font-title text-2xl mb-2">
              CARACTERÍSTICAS E DIFERENCIAIS
            </h1>
            <CardPropertyInforCaracteristics />
          </section>

          <section>
            <h1 className="text-primary font-title text-2xl mb-2">PLANTA</h1>
            <div className="justify-center items-center flex">
              <Image src={imgPlanta} alt="Planta do imóvel" height={500} />
            </div>
          </section>

          <section>
            <h1 className="text-primary font-title text-2xl mb-2">
              TOUR VIRTUAL & VÍDEO
            </h1>
            <div className="justify-center items-center flex">
              <Image src={imgPlanta} alt="Planta do imóvel" height={500} />
            </div>
          </section>
        </section>

        <div className="flex flex-col gap-6 w-3/10 static">
          <CardPropertyInforPayment />

          <div className="flex gap-2">
            <CardPropertyInfor
              title="anos de mercado
"
              value={12}
            />
            <CardPropertyInfor
              title="imóveis vendidos
"
              value={"340+"}
            />
            <CardPropertyInfor
              title="satisfação
"
              value={"98%"}
            />
          </div>

          <CardPropertyInforPerson />

          <div className="flex flex-col items-center justify-center">
            <p>🔒 Dados protegidos · Sem taxa de consulta</p>
            <p className="text-primary">Financiamento bancário disponível</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
