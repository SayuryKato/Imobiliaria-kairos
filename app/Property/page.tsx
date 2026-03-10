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
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../_components/ui/pagination";

import CardPropertyFilter from "../_components/ui/card-property-filter";
const PropertyPage = () => {
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
        <Filter />
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
              Conheça todos os projetos residenciais e comerciais da New Home em
              São Paulo.
            </p>
          </div>

          <div className="flex items-center justify-start gap-4 rounded">
            <CardPropertyFilter title="IMÓVEIS DISPONÍVEIS" value={24} />
            <CardPropertyFilter title="BAIRROS" value={6} />
            <CardPropertyFilter title="NOVOS LANÇAMENTOS" value={3} />
          </div>
        </div>

        <SectionProperty visibleButton={false} />

        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </section>
    </div>
  );
};

export default PropertyPage;
