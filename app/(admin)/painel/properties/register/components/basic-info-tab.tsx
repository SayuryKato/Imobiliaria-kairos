"use client";

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/app/_components/ui/field";
import { Input } from "@/app/_components/ui/input";
import { Textarea } from "@/app/_components/ui/textarea";
import { Controller, useFormContext } from "react-hook-form";
import { PropertyFormData } from "../schemas/property-schema";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/_components/ui/select";
import { useEffect, useState } from "react";
import { CurrencyInput } from "@/app/_components/ui/currency-input";

type Realtor = {
  id: number;
  name: string;
  email: string;
};
export function BasicInfoTab() {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<PropertyFormData>();

  const [realtors, setRealtors] = useState<Realtor[]>([]);

  useEffect(() => {
    async function fetchRealtors() {
      try {
        const response = await fetch("/api/realtors");
        const data = await response.json();
        setRealtors(data);
      } catch (error) {
        console.error("Erro ao buscar corretores:", error);
      }
    }

    fetchRealtors();
  }, []);

  return (
    <FieldGroup>
      <FieldSet>
        <FieldLegend>Informações básicas</FieldLegend>
        <FieldDescription>
          Dados principais da propriedade para exibição no anúncio.
        </FieldDescription>
      </FieldSet>

      <FieldGroup>
        <Field>
          <FieldLabel>
            Título do anúncio <span className="text-destructive">*</span>
          </FieldLabel>
          <Input placeholder="Título do anúncio" {...register("title")} />
          {errors.title && (
            <p className="text-sm text-red-500">{errors.title.message}</p>
          )}
        </Field>

        <Field>
          <FieldLabel>
            Descrição <span className="text-destructive">*</span>
          </FieldLabel>
          <Textarea
            placeholder="Descrição breve do anúncio"
            className="resize-none"
            {...register("description")}
          />
          {errors.description && (
            <p className="text-sm text-red-500">{errors.description.message}</p>
          )}
        </Field>
      </FieldGroup>

      <div className="grid grid-cols-2 gap-4">
        <Field>
          <FieldLabel>
            Preço total do imóvel <span className="text-destructive">*</span>
          </FieldLabel>

          <Controller
            control={control}
            name="price"
            render={({ field }) => (
              <CurrencyInput field={field} placeholder="R$ 0,00" />
            )}
          />

          {errors.price && (
            <p className="text-sm text-red-500">{errors.price.message}</p>
          )}
        </Field>

        <Field>
          <FieldLabel>
            Preço por m² <span className="text-destructive">*</span>
          </FieldLabel>

          <Controller
            control={control}
            name="pricePerM"
            render={({ field }) => (
              <CurrencyInput field={field} placeholder="R$ 0,00" />
            )}
          />

          {errors.pricePerM && (
            <p className="text-sm text-red-500">{errors.pricePerM.message}</p>
          )}
        </Field>

        <Field>
          <FieldLabel>Condomínio (R$) opcional</FieldLabel>
          <Controller
            control={control}
            name="condominiumFee"
            render={({ field }) => (
              <CurrencyInput field={field} placeholder="R$ 0,00" />
            )}
          />

          {errors.condominiumFee && (
            <p className="text-sm text-red-500">
              {errors.condominiumFee.message}
            </p>
          )}
        </Field>

        <Field>
          <FieldLabel>IPTU anual (R$) opcional</FieldLabel>
          <Controller
            control={control}
            name="iptu"
            render={({ field }) => (
              <CurrencyInput field={field} placeholder="R$ 0,00" />
            )}
          />

          {errors.iptu && (
            <p className="text-sm text-red-500">{errors.iptu.message}</p>
          )}
        </Field>
      </div>

      <Field>
        <FieldLabel>
          Corretor responsável <span className="text-destructive">*</span>
        </FieldLabel>

        <Controller
          control={control}
          name="realtorId"
          render={({ field }) => (
            <Select
              value={field.value?.toString()}
              onValueChange={(value) => field.onChange(Number(value))}
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecione um corretor" />
              </SelectTrigger>

              <SelectContent>
                <SelectGroup>
                  {realtors.map((realtor) => (
                    <SelectItem key={realtor.id} value={realtor.id.toString()}>
                      {realtor.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          )}
        />

        {errors.realtorId && (
          <p className="text-sm text-red-500">{errors.realtorId.message}</p>
        )}
      </Field>
    </FieldGroup>
  );
}
