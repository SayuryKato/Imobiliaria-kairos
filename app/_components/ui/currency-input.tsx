"use client";

import { Input } from "@/app/_components/ui/input";
import { ControllerRenderProps } from "react-hook-form";

type CurrencyInputProps = {
  field: ControllerRenderProps<any, any>;
  placeholder?: string;
};

export function CurrencyInput({ field, placeholder }: CurrencyInputProps) {
  function formatCurrency(value: number | string) {
    const numericValue = Number(value) || 0;

    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
    }).format(numericValue / 100);
  }

  function handleChange(value: string) {
    const onlyNumbers = value.replace(/\D/g, "");
    field.onChange(Number(onlyNumbers));
  }

  return (
    <Input
      value={formatCurrency(field.value || 0)}
      onChange={(e) => handleChange(e.target.value)}
      placeholder={placeholder}
    />
  );
}
