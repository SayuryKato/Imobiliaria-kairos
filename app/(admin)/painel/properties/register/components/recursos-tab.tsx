"use client";

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/app/_components/ui/field";
import { useFormContext } from "react-hook-form";
import { PropertyFormData } from "../schemas/property-schema";
import { useEffect, useState } from "react";
import { Checkbox } from "@/app/_components/ui/checkbox";
import { Label } from "@/app/_components/ui/label";
import { Input } from "@/app/_components/ui/input";
import { Button } from "@/app/_components/ui/button";
import { Plus, Trash2 } from "lucide-react";
import { PropertyNearby } from "@/generated/prisma/client";
import { Feature } from "@/generated/prisma/client";
import { Card, CardContent } from "@/app/_components/ui/card";
import { Badge } from "@/app/_components/ui/badge";

// type Feature = {
//   id: number;
//   name: string;
// };
export function RecursosTab() {
  const { watch, setValue } = useFormContext<PropertyFormData>();

  const selectedFeatures = watch("features") || [];

  const [features, setFeatures] = useState<Feature[]>([]);
  const [items, setItems] = useState<PropertyNearby[]>([]);

  useEffect(() => {
    async function fetchFeatures() {
      try {
        const response = await fetch("/api/features");
        console.log("Response features:", response);
        const data = await response.json();
        setFeatures(data);
      } catch (error) {
        console.error("Erro ao buscar recursos:", error);
      }
    }

    fetchFeatures();
  }, []);

  const [form, setForm] = useState({
    title: "",
    description: "",
    distance: "",
  });

  function handleAdd() {
    if (!form.title.trim()) return;

    const newItem = {
      id: Date.now(),
      title: form.title.trim(),
      description: form.description.trim(),
      distance: parseFloat(form.distance) || 0,
      propertyId: 0,
    };

    const updatedItems = [...items, newItem];

    setItems(updatedItems);

    setValue(
      "nearby",
      updatedItems.map(({ title, description, distance }) => ({
        title,
        description,
        distance,
      })),
    );

    setForm({
      title: "",
      description: "",
      distance: "",
    });
  }

  function handleRemove(id: number) {
    const updatedItems = items.filter((item) => item.id !== id);

    setItems(updatedItems);

    setValue(
      "nearby",
      updatedItems.map(({ title, description, distance }) => ({
        title,
        description,
        distance,
      })),
    );
  }

  return (
    <FieldGroup>
      <FieldSet>
        <FieldLegend variant="label">Recursos e arredores</FieldLegend>
        <FieldDescription>
          Diferenciais e pontos de interesse próximos ao imóvel.
        </FieldDescription>

        <FieldGroup className="gap-4">
          <FieldDescription>Recursos do imóvel</FieldDescription>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {features.map((feature) => (
              <Field orientation="horizontal" key={feature.id}>
                <Checkbox
                  id={`feature-${feature.id}`}
                  checked={selectedFeatures.includes(feature.id)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setValue("features", [...selectedFeatures, feature.id]);
                    } else {
                      setValue(
                        "features",
                        selectedFeatures.filter((id) => id !== feature.id),
                      );
                    }
                  }}
                />
                <FieldLabel
                  htmlFor={`feature-${feature.id}`}
                  className="font-normal"
                >
                  {feature.name}
                </FieldLabel>
              </Field>
            ))}
          </div>
        </FieldGroup>

        <FieldGroup className="gap-4">
          <FieldDescription>
            Arredores{" "}
            <span className="text-muted-foreground text-xs">
              (opcional — distância em metros)
            </span>
          </FieldDescription>

          {/* Formulário de adição */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="nearby-title">Título</Label>
              <Input
                id="nearby-title"
                placeholder="Ex: Estação Faria Lima"
                value={form.title}
                onChange={(e) =>
                  setForm((f) => ({ ...f, title: e.target.value }))
                }
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="nearby-description">Descrição</Label>
              <Input
                id="nearby-description"
                placeholder="Ex: Metrô — Linha 4 Amarela"
                value={form.description}
                onChange={(e) =>
                  setForm((f) => ({ ...f, description: e.target.value }))
                }
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="nearby-distance">Distância (m)</Label>
              <div className="flex gap-2">
                <Input
                  id="nearby-distance"
                  type="number"
                  placeholder="Ex: 600"
                  min={0}
                  value={form.distance}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, distance: e.target.value }))
                  }
                  onKeyDown={(e) => e.key === "Enter" && handleAdd()}
                />
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={handleAdd}
                  disabled={!form.title.trim()}
                  aria-label="Adicionar ponto próximo"
                >
                  <Plus className="size-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Lista de itens adicionados */}
          {items.length > 0 && (
            <div className="flex flex-col gap-2">
              {items.map((item) => (
                <Card key={item.id} className="shadow-none">
                  <CardContent className="flex items-center justify-between py-3 px-4">
                    <div className="flex flex-col gap-0.5">
                      <span className="text-sm font-medium leading-tight">
                        {item.title}
                      </span>
                      {item.description && (
                        <span className="text-muted-foreground text-xs">
                          {item.description}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-3 shrink-0 ml-4">
                      {item.distance > 0 && (
                        <Badge
                          variant="secondary"
                          className="text-xs font-normal"
                        >
                          {item.distance >= 1000
                            ? `${(item.distance / 1000).toFixed(1)} km`
                            : `${item.distance} m`}
                        </Badge>
                      )}
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="size-7 text-muted-foreground hover:text-destructive"
                        onClick={() => handleRemove(item.id)}
                        aria-label={`Remover ${item.title}`}
                      >
                        <Trash2 className="size-3.5" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </FieldGroup>
      </FieldSet>
    </FieldGroup>
  );
}
