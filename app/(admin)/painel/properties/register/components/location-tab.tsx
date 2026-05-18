"use client";

import { useEffect } from "react";
import { useFormContext } from "react-hook-form";

import { Field, FieldDescription, FieldGroup, FieldLabel, FieldLegend, FieldSet } from "@/app/_components/ui/field";
import { Input } from "@/app/_components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/_components/ui/select";

import { PropertyFormData } from "../schemas/property-schema";

const brazilStates = [
  "AC",
  "AL",
  "AP",
  "AM",
  "BA",
  "CE",
  "DF",
  "ES",
  "GO",
  "MA",
  "MT",
  "MS",
  "MG",
  "PA",
  "PB",
  "PR",
  "PE",
  "PI",
  "RJ",
  "RN",
  "RS",
  "RO",
  "RR",
  "SC",
  "SP",
  "SE",
  "TO",
];

export function LocationTab() {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext<PropertyFormData>();

  const zipCode = watch("zipCode");

  useEffect(() => {
    async function fetchAddress() {
      const cleanZip = zipCode?.replace(/\D/g, "");

      if (cleanZip?.length !== 8) return;

      try {
        const response = await fetch(
          `https://viacep.com.br/ws/${cleanZip}/json/`,
        );

        const data = await response.json();

        if (data.erro) return;

        setValue("address", `${data.logradouro}`);
        setValue("neighborhood", data.bairro);
        setValue("city", data.localidade);
        setValue("state", data.uf);
      } catch (error) {
        console.error("Erro ao buscar CEP:", error);
      }
    }

    fetchAddress();
  }, [zipCode, setValue]);

  function formatZipCode(value: string) {
    return value
      .replace(/\D/g, "")
      .replace(/^(\d{5})(\d)/, "$1-$2")
      .slice(0, 9);
  }

  return (
    <FieldGroup>
      <FieldSet>
        <FieldLegend>Localização</FieldLegend>
        <FieldDescription>Endereço completo do imóvel.</FieldDescription>
      </FieldSet>

      <Field>
        <FieldLabel>
          CEP <span className="text-destructive">*</span>
        </FieldLabel>
        <Input
          placeholder="01310-100"
          {...register("zipCode", {
            onChange: (e) => {
              e.target.value = formatZipCode(e.target.value);
            },
          })}
        />
        {errors.zipCode && (
          <p className="text-sm text-red-500">{errors.zipCode.message}</p>
        )}
      </Field>

      <Field>
        <FieldLabel>
          Endereço <span className="text-destructive">*</span>
        </FieldLabel>
        <Input placeholder="Rua dos Pinheiros" {...register("address")} />
        {errors.address && (
          <p className="text-sm text-red-500">{errors.address.message}</p>
        )}
      </Field>

      <Field>
        <FieldLabel>
          Bairro <span className="text-destructive">*</span>
        </FieldLabel>
        <Input placeholder="Pinheiros" {...register("neighborhood")} />
        {errors.neighborhood && (
          <p className="text-sm text-red-500">{errors.neighborhood.message}</p>
        )}
      </Field>

      <div className="grid grid-cols-2 gap-4">
        <Field>
          <FieldLabel>
            Cidade <span className="text-destructive">*</span>
          </FieldLabel>
          <Input placeholder="São Paulo" {...register("city")} />
          {errors.city && (
            <p className="text-sm text-red-500">{errors.city.message}</p>
          )}
        </Field>

        <Field>
          <FieldLabel>
            Estado <span className="text-destructive">*</span>
          </FieldLabel>

          <Select
            onValueChange={(value) => setValue("state", value)}
            defaultValue={watch("state")}
          >
            <SelectTrigger>
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>

            <SelectContent>
              {brazilStates.map((state) => (
                <SelectItem key={state} value={state}>
                  {state}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {errors.state && (
            <p className="text-sm text-red-500">{errors.state.message}</p>
          )}
        </Field>
      </div>
    </FieldGroup>
  );
}
