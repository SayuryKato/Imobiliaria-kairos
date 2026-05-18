import { z } from "zod";

export const propertySchema = z.object({
  title: z.string().min(3, "Título obrigatório"),
  description: z.string().min(10, "Descrição muito curta"),

  price: z.coerce.number().positive("O preço deve ser um número positivo"),
  pricePerM: z.coerce.number().positive(),

  address: z.string().min(3),
  city: z.string().min(2),
  state: z.string().min(2),
  neighborhood: z.string().min(2),
  zipCode: z.string().min(8),

  bedrooms: z.coerce.number().min(0),
  bathrooms: z.coerce.number().min(0),
  parkingSpaces: z.coerce.number().min(0),
  areaTotal: z.coerce.number().positive(),

  floor: z.coerce.number().optional(),
  condominiumFee: z.coerce.number().optional(),
  iptu: z.coerce.number().optional(),

  realtorId: z.coerce.number().min(1, "Selecione um corretor"),
  images: z.array(z.string()).min(1, "Adicione ao menos uma imagem"),

  floorPlans: z.array(z.string()).optional(),
  media: z.array(z.string().url()).optional(),

  features: z.array(z.number()).optional(),
  nearby: z
    .array(
      z.object({
        title: z.string(),
        description: z.string().optional(),
        distance: z.number().optional(),
      }),
    )
    .optional(),
});

export type PropertyFormData = z.infer<typeof propertySchema>;
