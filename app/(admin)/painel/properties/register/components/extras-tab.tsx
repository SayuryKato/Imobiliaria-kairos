"use client";

import { useFormContext } from "react-hook-form";

export function ExtrasTab() {
  const { register } = useFormContext();

  return (
    <div className="space-y-4">
      <input type="number" {...register("bedrooms")} placeholder="Quartos" />

      <input type="number" {...register("bathrooms")} placeholder="Banheiros" />
    </div>
  );
}
