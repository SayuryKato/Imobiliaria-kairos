import { HeroCarouselProperty } from "@/app/_components/ui/hero-carousel-property";
import { prisma } from "@/app/_lib/prisma";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../../_components/ui/breadcrumb";
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
import Image from "next/image";
import { splitTitleSmart } from "@/app/_components/_utils/split-title";

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
    include: {
      images: true,
      floorPlans: true,
      media: true,
      realtor: true,
      dimensions: true,
      features: {
        include: {
          feature: true,
        },
      },
      nearby: true,
    },
  });

  if (!property) {
    return <div>Imóvel não encontrado</div>;
  }

  return (
    <div className="text-gray-500">
      <HeroCarouselProperty
        images={property.images.map((img) => img.imageUrl)}
        mapa={{
          address: property.address,
          city: property.city,
        }}
      />

      <div className="p-8">
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

        <div className="mt-4 flex justify-between gap-4 lg:flex-row flex-col">
          <section className="flex flex-col gap-8 w-full lg:w-7/10">
            <div className="flex flex-col gap-2">
              <TextTitle
                title={splitTitleSmart(property.title).title.toUpperCase()}
                subtitle={splitTitleSmart(
                  property.title,
                ).subtitle.toUpperCase()}
              />

              <p className="flex gap-2 items-center">
                <MapPin className="text-primary" />
                {property.address} - {property.city}, {property.state}
              </p>
            </div>

            <section className="grid lg:grid-cols-5 grid-cols-2 gap-2">
              <CardPropertyInfor title="Quartos" value={2} icon={<Bed />} />
              <CardPropertyInfor
                title="Banheiros"
                value={property.bathrooms}
                icon={<ShowerHead />}
              />
              <CardPropertyInfor
                title="Vagas"
                value={property.parkingSpaces}
                icon={<Car />}
              />
              <CardPropertyInfor
                title="Área Total"
                value={`${property.areaTotal}m²`}
                icon={<Ruler />}
              />
              <CardPropertyInfor
                title="Andar"
                value={` ${property.floor || 0}º `}
                icon={<Building />}
              />
            </section>

            <section>
              <h1 className="text-primary font-title text-2xl mb-2">
                DESCRIÇÃO
              </h1>
              <p>{property.description || "-"}</p>
            </section>

            {property.nearby && property.nearby.length > 0 && (
              <section>
                <h1 className="text-primary font-title text-2xl mb-2">
                  LOCALIZAÇÃO E PROXIMIDADES
                </h1>
                <CardPropertyInforTime nearby={property.nearby} />
              </section>
            )}

            {property.dimensions && property.dimensions.length > 0 && (
              <section>
                <h1 className="text-primary font-title text-2xl mb-2">
                  DIMENSÕES
                </h1>
                <CardPropertyInforDimensions dimensions={property.dimensions} />
              </section>
            )}

            {property.features && property.features.length > 0 && (
              <section>
                <h1 className="text-primary font-title text-2xl mb-2">
                  CARACTERÍSTICAS E DIFERENCIAIS
                </h1>
                <CardPropertyInforCaracteristics features={property.features} />
              </section>
            )}

            {property.floorPlans && property.floorPlans.length > 0 && (
              <section>
                <h1 className="text-primary font-title text-2xl mb-2">
                  PLANTA
                </h1>
                <div className="justify-center items-center flex">
                  <Image
                    src={property.floorPlans[0]?.imageUrl}
                    alt="Planta do imóvel"
                    height={500}
                    width={500}
                  />
                </div>
              </section>
            )}

            {/* {property.media && property.media.length > 0 && (
              <section>
                <h1 className="text-primary font-title text-2xl mb-2">
                  TOUR VIRTUAL & VÍDEO
                </h1>
                <div className="justify-center items-center flex">
                  <iframe
                    width="800"
                    height="450"
                    src={property.media[0]?.url}
                    title="Tour do imóvel"
                    allowFullScreen
                    className="rounded-xl"
                  ></iframe>
                </div>
              </section>
            )} */}
          </section>

          <div className="flex flex-col gap-6 w-full lg:w-3/10 static">
            <CardPropertyInforPayment
              price={property.price}
              pricePerM2={property.pricePerM}
              condominiumFee={property.condominiumFee ?? 0}
              iptu={property.iptu ?? 0}
              realtor={{
                name: property.realtor?.name || "",
                creci: property.realtor?.creci || undefined,
                description: property.realtor?.description || undefined,
                photoUrl: property.realtor?.photoUrl || undefined,
                rating: property.realtor?.rating || undefined,
                phones: property.realtor.phones[0],
              }}
            />

            <div className="grid grid-cols-3 gap-2">
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

            {property.realtor && (
              <CardPropertyInforPerson
                realtor={{
                  name: property.realtor.name,
                  creci: property.realtor.creci ?? undefined,
                  description: property.realtor.description ?? undefined,
                  photoUrl: property.realtor.photoUrl ?? undefined,
                  rating: property.realtor.rating ?? undefined,
                  phones: property.realtor.phones[0],
                }}
              />
            )}

            <div className="flex flex-col items-center justify-center">
              <p>🔒 Dados protegidos · Sem taxa de consulta</p>
              <p className="text-primary">Financiamento bancário disponível</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
