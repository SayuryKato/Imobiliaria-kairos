"use client";

import { Field, FieldDescription, FieldGroup, FieldLabel, FieldLegend, FieldSet } from "@/app/_components/ui/field";
import { Input } from "@/app/_components/ui/input";
import { useFormContext } from "react-hook-form";
import { PropertyFormData } from "../schemas/property-schema";

export function DetailsTab() {
  const {
    register,
    formState: { errors },
  } = useFormContext<PropertyFormData>();

  return (
    <FieldGroup>
      <FieldSet>
        <FieldLegend>Detalhes do imóvel</FieldLegend>
        <FieldDescription>Detalhes técnicos e dados de área.</FieldDescription>
      </FieldSet>
      <div className="grid grid-cols-2 gap-4">
        <Field>
          <FieldLabel>
            Quartos <span className="text-destructive">*</span>
          </FieldLabel>
          <Input
            placeholder="Quartos"
            {...register("bedrooms", { valueAsNumber: true })}
          />
          {errors.bedrooms && (
            <p className="text-sm text-red-500">{errors.bedrooms.message}</p>
          )}
        </Field>

        <Field>
          <FieldLabel>
            Banheiros <span className="text-destructive">*</span>
          </FieldLabel>
          <Input
            type="number"
            {...register("bathrooms", { valueAsNumber: true })}
            placeholder="Banheiros"
          />
          {errors.bathrooms && (
            <p className="text-sm text-red-500">{errors.bathrooms.message}</p>
          )}
        </Field>

        <Field>
          <FieldLabel>
            Vagas de Garagem <span className="text-destructive">*</span>
          </FieldLabel>
          <Input
            type="number"
            {...register("parkingSpaces", { valueAsNumber: true })}
            placeholder="Vagas de Garagem"
          />
          {errors.parkingSpaces && (
            <p className="text-sm text-red-500">
              {errors.parkingSpaces.message}
            </p>
          )}
        </Field>

        <Field>
          <FieldLabel>
            Área total (m²) <span className="text-destructive">*</span>
          </FieldLabel>
          <Input
            type="number"
            {...register("areaTotal", { valueAsNumber: true })}
            placeholder="Área Total"
          />
          {errors.areaTotal && (
            <p className="text-sm text-red-500">{errors.areaTotal.message}</p>
          )}
        </Field>

        <Field>
          <FieldLabel>
            Andar (opcional) <span className="text-destructive">*</span>
          </FieldLabel>
          <Input
            type="number"
            {...register("floor", { valueAsNumber: true })}
            placeholder="Andar"
          />
          {errors.floor && (
            <p className="text-sm text-red-500">{errors.floor.message}</p>
          )}
        </Field>
      </div>
    </FieldGroup>
  );
}
