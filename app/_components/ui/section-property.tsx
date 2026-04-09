import CardProperty from "./card-property";
import { prisma } from "../../_lib/prisma";
import { Property, PropertyImage } from "@/generated/prisma/client";
import { Button } from "./button";
import Link from "next/link";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./pagination";
import CardPropertyFilter from "./card-property-filter";

type PropertyWithImages = Property & {
  images: PropertyImage[];
};

interface SectionPropertyProps {
  visibleButton?: boolean;
  properties: PropertyWithImages[];
  totalProperties?: number;
  page?: number;
  totalPages?: number;
}

const SectionProperty = ({
  visibleButton = true,
  properties,
  totalProperties,
  page = 1,
  totalPages = 1,
}: SectionPropertyProps) => {
  if (!properties) {
    return <div>Não foi possível carregar os empreendimentos.</div>;
  }

  return (
    <div className="flex flex-col gap-6 p-6">
      {totalProperties !== undefined && (
        <div className="flex items-center justify-start gap-4 rounded">
          <CardPropertyFilter
            title="IMÓVEIS DISPONÍVEIS"
            value={totalProperties ?? 0}
          />
        </div>
      )}

      <div className="grid grid-cols-1 justify-items-center gap-8 md:grid-cols-2 xl:grid-cols-4">
        {properties.map((property) => (
          <CardProperty key={property.id} property={property} />
        ))}
      </div>

      {visibleButton && (
        <div className="flex items-center justify-center">
          <Button className="mt-4 h-14 py-3 text-lg font-medium" asChild>
            <Link href="/property">Ver todos os empreendimentos →</Link>
          </Button>
        </div>
      )}

      {totalPages > 1 && (
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href={`?page=${Math.max(page - 1, 1)}`} />
            </PaginationItem>

            {Array.from({ length: totalPages }, (_, i) => {
              const pageNumber = i + 1;

              return (
                <PaginationItem key={pageNumber}>
                  <PaginationLink
                    href={`?page=${pageNumber}`}
                    isActive={page === pageNumber}
                  >
                    {pageNumber}
                  </PaginationLink>
                </PaginationItem>
              );
            })}

            <PaginationItem>
              <PaginationNext
                href={`?page=${Math.min(page + 1, totalPages)}`}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
};

export default SectionProperty;
