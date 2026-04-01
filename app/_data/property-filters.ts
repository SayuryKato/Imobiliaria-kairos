import { prisma } from "../_lib/prisma";

export async function getPropertyFilterOptions() {
  const [neighborhoods, bedrooms, bathrooms, parkingSpaces] = await Promise.all(
    [
      prisma.property.findMany({
        select: { neighborhood: true },
        distinct: ["neighborhood"],
        orderBy: { neighborhood: "asc" },
      }),

      prisma.property.findMany({
        select: { bedrooms: true },
        distinct: ["bedrooms"],
        orderBy: { bedrooms: "asc" },
      }),

      prisma.property.findMany({
        select: { bathrooms: true },
        distinct: ["bathrooms"],
        orderBy: { bathrooms: "asc" },
      }),

      prisma.property.findMany({
        select: { parkingSpaces: true },
        distinct: ["parkingSpaces"],
        orderBy: { parkingSpaces: "asc" },
      }),
    ],
  );

  return {
    neighborhoods: neighborhoods.map((item) => ({
      label: item.neighborhood,
      value: item.neighborhood,
    })),

    bedrooms: bedrooms.map((item) => ({
      label: `${item.bedrooms} quarto${item.bedrooms > 1 ? "s" : ""}`,
      value: String(item.bedrooms),
    })),

    bathrooms: bathrooms.map((item) => ({
      label: `${item.bathrooms} banheiro${item.bathrooms > 1 ? "s" : ""}`,
      value: String(item.bathrooms),
    })),

    parkingSpaces: parkingSpaces.map((item) => ({
      label: `${item.parkingSpaces} vaga${item.parkingSpaces > 1 ? "s" : ""}`,
      value: String(item.parkingSpaces),
    })),
  };
}
