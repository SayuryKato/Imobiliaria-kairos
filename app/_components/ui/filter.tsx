"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import FilterSelect from "./filter-select";
import { Button } from "./button";

interface Option {
  label: string;
  value: string;
}

interface FilterProps {
  neighborhoods: Option[];
  bedrooms: Option[];
  bathrooms: Option[];
  parkingSpaces: Option[];
}

const Filter = ({
  neighborhoods,
  bedrooms,
  bathrooms,
  parkingSpaces,
}: FilterProps) => {
  const router = useRouter();

  const [filters, setFilters] = useState({
    bairro: "",
    quartos: "",
    banheiros: "",
    vagas: "",
  });

  const handleChange = (field: keyof typeof filters, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleFilter = () => {
    const params = new URLSearchParams();

    Object.entries(filters).forEach(([key, value]) => {
      if (value) {
        params.set(key, value);
      }
    });

    router.push(`/Property?${params.toString()}`);
  };

  return (
    <div className="absolute bottom-20 left-1/2 w-9/10 max-w-5xl -translate-x-1/2 rounded-xl border border-primary/50 bg-black/20 p-8 backdrop-blur-md">
      <div className="flex flex-wrap items-center justify-center gap-4">
        <FilterSelect
          placeholder="Bairro"
          value={filters.bairro}
          onValueChange={(value) => handleChange("bairro", value)}
          items={neighborhoods}
        />

        <FilterSelect
          placeholder="Quartos"
          value={filters.quartos}
          onValueChange={(value) => handleChange("quartos", value)}
          items={bedrooms}
        />

        <FilterSelect
          placeholder="Banheiros"
          value={filters.banheiros}
          onValueChange={(value) => handleChange("banheiros", value)}
          items={bathrooms}
        />

        <FilterSelect
          placeholder="Vagas"
          value={filters.vagas}
          onValueChange={(value) => handleChange("vagas", value)}
          items={parkingSpaces}
        />

        <Button onClick={handleFilter}>Filtrar dados</Button>
      </div>
    </div>
  );
};

export default Filter;
