import Image from "next/image";
import img03 from "../../public/images/img03.jpg";
import Filter from "../_components/ui/filter";
import SectionProperty from "../_components/ui/section-property";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../_components/ui/breadcrumb";
import { prisma } from "../_lib/prisma";
import { getPropertyFilterOptions } from "../_data/property-filters";

const PropertyPage = async ({
  searchParams,
}: {
  searchParams?: {
    page?: string;
    tipo?: string;
    bairro?: string;
    quartos?: string;
    banheiros?: string;
    vagas?: string;
  };
  }) => {
  const params = await searchParams;
  const PAGE_SIZE = 8;

  const page = Number(params?.page) || 1;

  const where = {

    ...(params?.bairro && {
      neighborhood: params.bairro,
    }),

    ...(params?.quartos && {
      bedrooms: Number(params.quartos),
    }),

    ...(params?.banheiros && {
      bathrooms: Number(params.banheiros),
    }),

    ...(params?.vagas && {
      parkingSpaces: Number(params.vagas),
    }),
  };

  const totalProperties = await prisma.property.count({
    where,
  });

  const totalPages = Math.ceil(totalProperties / PAGE_SIZE);

  const properties = await prisma.property.findMany({
    where,
    skip: (page - 1) * PAGE_SIZE,
    take: PAGE_SIZE,
    include: {
      images: true,
    },
  });

  const filterOptions = await getPropertyFilterOptions();

  console.log("searchParams:", searchParams);
  console.log("bairro:", searchParams?.bairro);

  return (
    <div>
      <section className="relative w-full h-150">
        <Image
          src={img03}
          alt={"Image 03"}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-30"></div> */
        <Filter
          neighborhoods={filterOptions.neighborhoods}
          bedrooms={filterOptions.bedrooms}
          bathrooms={filterOptions.bathrooms}
          parkingSpaces={filterOptions.parkingSpaces}
        />
      </section>

      <section className="p-8">
        <div className="flex flex-col gap-2 ">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Início</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Empreendimentos</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div>
            <h1 className="font-title font-light text-4xl leading-[1.1] tracking-wide text-black">
              NOSSOS
              <span className="text-primary italic"> EMPREENDIMENTOS</span>
            </h1>
            <p className="max-w-lg text-sm text-gray-500 font-body">
              Conheça todos os projetos residenciais e comerciais da KAIRÓS
              IMOBILIÁRIA em São Paulo.
            </p>
          </div>
        </div>

        <SectionProperty
          visibleButton={false}
          properties={properties}
          totalProperties={totalProperties}
          page={page}
          totalPages={totalPages}
        />
      </section>
    </div>
  );
};

export default PropertyPage;
