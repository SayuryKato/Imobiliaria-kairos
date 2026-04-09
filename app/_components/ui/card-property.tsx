import Image from "next/image";
import { Pentagon, Bed, Car } from "lucide-react";
import { Button } from "./button";
import Link from "next/link";
import { Prisma } from "@/generated/prisma/client";
import logo from "../../../public/logo.jpeg";
import { formatPrice } from "../../_lib/utils";

type PropertyWithRelations = Prisma.PropertyGetPayload<{
  include: {
    images: true;
  };
}>;

const CardProperty = ({ property }: { property: PropertyWithRelations }) => {
  return (
    <div className="relative w-100 h-140 rounded-md overflow-hidden">
      {/* imagem */}
      <Image
        src={property.images[0]?.imageUrl || `${logo.src}`}
        alt={property.title}
        fill
        className="object-cover"
      />

      {/* overlay */}
      <div className="absolute inset-0 bg-black/36" />

      {/* tag */}
      <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm">
        {property.neighborhood}
      </div>

      {/* conteúdo */}
      <div className="absolute bottom-0 w-full p-6 text-white bg-linear-to-t from-black/90 via-black/50 to-transparent">
        {/* <p className="text-white tracking-widest text-sm">{property.category}</p> */}

        <h2 className="text-3xl font-serif mt-1">{property.title}</h2>

        <p className="text-gray-200 mt-1">{property.address} - {property.city}</p>

        {/* infos */}
        <div className="flex gap-6 mt-4 text-sm">
          <span className="flex gap-1 items-center">
            <Pentagon size={14} className="text-primary" />
            {property.areaTotal}m²
          </span>
          <span className="flex gap-1 items-center">
            <Bed size={14} className="text-primary" />
            {property.bedrooms} dorms
          </span>
          <span className="flex gap-1 items-center">
            <Car size={14} className="text-primary" />
            {property.parkingSpaces} vagas
          </span>
        </div>

        <p className="font-title text-3xl mt-4 font-light">
          {formatPrice(property.price)}
        </p>

        {/* botão */}
        <Button className="mt-4 h-14 py-3 text-lg font-medium w-full">
          <Link href={`/property/${property.id}`}>Ver mais detalhes</Link>
        </Button>
      </div>
    </div>
  );
};

export default CardProperty;
