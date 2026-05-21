"use client";

import { useState } from "react";
import Image from "next/image";
import { useFormContext } from "react-hook-form";

import { Card, CardContent } from "@/app/_components/ui/card";
import { Input } from "@/app/_components/ui/input";
import { Button } from "@/app/_components/ui/button";
import { Label } from "@/app/_components/ui/label";

import { PropertyFormData } from "../schemas/property-schema";
import { FieldDescription, FieldGroup, FieldLegend, FieldSet } from "@/app/_components/ui/field";

const MediaTab = () => {
  const { watch, setValue, register } = useFormContext<PropertyFormData>();

  const [loading, setLoading] = useState(false);

  const images = watch("images") || [];
  const floorPlans = watch("floorPlans") || [];

  async function handleUpload(
    event: React.ChangeEvent<HTMLInputElement>,
    field: "images" | "floorPlans",
  ) {
    const files = Array.from(event.target.files || []);
    if (!files.length) return;

    setLoading(true);

    try {
      const formData = new FormData();
      files.forEach((file) => formData.append("file", file));
      console.log("Chamando upload...");

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      console.log("Response:", response);
      const data = await response.json();
      console.log("UPLOAD RESPONSE:", data);

      if (!response.ok) {
        throw new Error(data.error || "Erro no upload");
      }

      const currentFiles = watch(field) || [];

      setValue(field, [...currentFiles, ...data.urls], {
        shouldValidate: true,
      });
    } catch (error) {
      console.error("Erro no upload:", error);
    } finally {
      setLoading(false);
    }
  }

  function removeFile(field: "images" | "floorPlans", index: number) {
    const updated = (watch(field) || []).filter(
      (_: string, i: number) => i !== index,
    );

    setValue(field, updated, {
      shouldValidate: true,
    });
  }

  return (
    <FieldGroup>
      <FieldSet>
        <FieldLegend>Mídias</FieldLegend>
        <FieldDescription>
          Fotos, vídeos e plantas baixas do imóvel.
        </FieldDescription>
      </FieldSet>
      <div className="space-y-6">
        {/* imagens */}
        <Card>
          <CardContent className="space-y-4 pt-6">
            <Label>Imagens do imóvel</Label>

            <Input
              type="file"
              accept="image/*"
              multiple
              onChange={(e) => handleUpload(e, "images")}
            />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {images.map((url: string, index: number) => (
                <div key={index} className="space-y-2 relative">
                  <Image
                    src={url}
                    alt={`Imagem ${index + 1}`}
                    width={200}
                    height={120}
                    className="w-full h-28 rounded-md object-cover"
                  />

                  <Button
                    type="button"
                    variant="destructive"
                    size="sm"
                    className="w-full"
                    onClick={() => removeFile("images", index)}
                  >
                    Remover
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* plantas */}
        <Card>
          <CardContent className="space-y-4 pt-6">
            <Label>Plantas do imóvel</Label>

            <Input
              type="file"
              accept="image/*,.pdf"
              multiple
              onChange={(e) => handleUpload(e, "floorPlans")}
            />

            <div className="space-y-2">
              {floorPlans.map((url: string, index: number) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-md border p-3"
                >
                  <span className="truncate text-sm">Planta {index + 1}</span>

                  <Button
                    type="button"
                    size="sm"
                    variant="destructive"
                    onClick={() => removeFile("floorPlans", index)}
                  >
                    Remover
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* mídia */}
        <Card>
          <CardContent className="space-y-4 pt-6">
            <Label>Vídeo / Tour virtual</Label>

            <Input
              placeholder="https://youtube.com/watch?v=..."
              {...register("media.0")}
            />
          </CardContent>
        </Card>

        {loading && (
          <p className="text-sm text-muted-foreground">Enviando arquivo...</p>
        )}
      </div>
    </FieldGroup>
  );
};

export default MediaTab;
