"use client";

import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { propertySchema, PropertyFormData } from "../schemas/property-schema";

import { BasicInfoTab } from "./basic-info-tab";
import { LocationTab } from "./location-tab";
import { DetailsTab } from "./details-tab";
import { Tabs, TabsList, TabsTrigger } from "@/app/_components/ui/tabs";
import { Button } from "@/app/_components/ui/button";
import MediaTab from "./media-tab";
import { RecursosTab } from "./recursos-tab";

const tabs = ["basic", "location", "details", "media", "recursos"] as const;

export function LayoutForms() {
  const [activeTab, setActiveTab] = useState("basic");

  const methods = useForm<PropertyFormData>({
    resolver: zodResolver(propertySchema) as any,
  });

  function onError(errors: typeof methods.formState.errors) {
    console.log("Erros de validação:", errors);
    toast.error("Corrija os campos obrigatórios antes de salvar.");
  }

  async function onSubmit(data: PropertyFormData) {
    try {
      const payload = {
        ...data,

        features: {
          create:
            data.features?.map((featureId) => ({
              feature: {
                connect: { id: featureId },
              },
            })) || [],
        },

        nearby: {
          create:
            data.nearby?.map((item) => ({
              title: item.title,
              description: item.description || "",
              distance: item.distance || 0,
            })) || [],
        },

        images: {
          create: data.images.map((url) => ({
            imageUrl: url,
          })),
        },

        floorPlans: {
          create: (data.floorPlans || []).map((url) => ({
            imageUrl: url,
          })),
        },

        media: {
          create: (data.media || []).map((url) => ({
            url,
          })),
        },
      };

      const response = await fetch("/api/properties", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        console.error("Resposta da API:", await response.text());
        throw new Error("Erro ao salvar imóvel");
      }

      toast.success("Imóvel salvo com sucesso 🎉");
      methods.reset();
    } catch (error) {
      console.error(error);
      toast.error("Erro ao salvar imóvel 😢");
    }
  }

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit, onError)}
        className="space-y-6"
      >
        <Tabs>
          <TabsList variant="line">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab}
                value={tab}
                onClick={() => setActiveTab(tab)}
              >
                {tab === "basic" && "Dados Básicos"}
                {tab === "location" && "Localização"}
                {tab === "details" && "Detalhes"}
                {tab === "media" && "Mídia"}
                {tab === "recursos" && "Recursos"}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {activeTab === "basic" && <BasicInfoTab />}
        {activeTab === "location" && <LocationTab />}
        {activeTab === "details" && <DetailsTab />}
        {activeTab === "media" && <MediaTab />}
        {activeTab === "recursos" && <RecursosTab />}

        <div className="flex gap-2">
          <Button type="submit">Salvar imóvel</Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => methods.reset()}
          >
            Limpar formulário
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}
