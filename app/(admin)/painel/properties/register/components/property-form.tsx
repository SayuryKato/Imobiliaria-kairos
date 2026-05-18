"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { propertySchema, PropertyFormData } from "../schemas/property-schema";
import { Button } from "@/app/_components/ui/button";
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

export function PropertyForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PropertyFormData>({
    resolver: zodResolver(propertySchema) as any,
  });

  async function onSubmit(data: PropertyFormData) {
    console.log(data);
    console.log("teste");

    // await fetch("/api/properties", {
    //   method: "POST",
    //   body: JSON.stringify(data),
    // });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <FieldGroup>
        <FieldSet>
          <FieldLegend>Informações básicas</FieldLegend>
          <FieldDescription>
            Dados principais da propriedade para exibição no anúncio.
          </FieldDescription>
        </FieldSet>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="checkout-7j9-card-name-43j">
              Título do anúncio
            </FieldLabel>
            <Input
              id="checkout-7j9-card-name-43j"
              placeholder="Título do anúncio"
              {...register("title")}
              required
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="checkout-7j9-optional-comments">
              Descrição breve do anúncio
            </FieldLabel>
            <Textarea
              id="checkout-7j9-optional-comments"
              placeholder="Add any additional comments"
              className="resize-none"
              {...register("description")}
            />
          </Field>
        </FieldGroup>

        <div className="grid grid-cols-2 gap-4">
          <Field>
            <FieldLabel htmlFor="checkout-7j9-card-number-uw1">
              Preço total do imóvel
            </FieldLabel>
            <Input
              id="checkout-7j9-card-number-uw1"
              placeholder="R$ 0,00"
              required
            />
          </Field>

          <Field>
            <FieldLabel htmlFor="checkout-7j9-card-number-uw1">
              Preço por m²
            </FieldLabel>
            <Input
              id="checkout-7j9-card-number-uw1"
              placeholder="R$ 0,00"
              required
            />
          </Field>
        </div>

        <Field>
          <FieldLabel htmlFor="checkout-7j9-card-name-43j">
            Endereço completo do imóvel
          </FieldLabel>
          <Input
            id="checkout-7j9-card-name-43j"
            placeholder="Evil Rabbit"
            required
          />
        </Field>
      </FieldGroup>
      <Button type="submit">Salvar</Button>
      <Button variant="outline" onClick={() => console.log("Cancelar")}>
        Cancelar
      </Button>
    </form>
  );
}
