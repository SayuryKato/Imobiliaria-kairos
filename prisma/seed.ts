// prisma/seed.ts
// IMPORTANTE: Como você tem output personalizado, importe do caminho correto
// const { PrismaClient } = require("../app/generated/prisma");
// const prisma = new PrismaClient();
import { prisma } from "../app/_lib/prisma";

async function seedDatabase() {
  try {
    const images = [
      "https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png",
      "https://utfs.io/f/45331760-899c-4b4b-910e-e00babb6ed81-16q.png",
      "https://utfs.io/f/5832df58-cfd7-4b3f-b102-42b7e150ced2-16r.png",
      "https://utfs.io/f/7e309eaa-d722-465b-b8b6-76217404a3d3-16s.png",
      "https://utfs.io/f/178da6b6-6f9a-424a-be9d-a2feb476eb36-16t.png",
      "https://utfs.io/f/2f9278ba-3975-4026-af46-64af78864494-16u.png",
      "https://utfs.io/f/988646ea-dcb6-4f47-8a03-8d4586b7bc21-16v.png",
      "https://utfs.io/f/60f24f5c-9ed3-40ba-8c92-0cd1dcd043f9-16w.png",
      "https://utfs.io/f/f64f1bd4-59ce-4ee3-972d-2399937eeafc-16x.png",
      "https://utfs.io/f/e995db6d-df96-4658-99f5-11132fd931e1-17j.png",
      "https://utfs.io/f/3bcf33fc-988a-462b-8b98-b811ee2bbd71-17k.png",
      "https://utfs.io/f/5788be0e-2307-4bb4-b603-d9dd237950a2-17l.png",
      "https://utfs.io/f/6b0888f8-b69f-4be7-a13b-52d1c0c9cab2-17m.png",
      "https://utfs.io/f/ef45effa-415e-416d-8c4a-3221923cd10f-17n.png",
      "https://utfs.io/f/a55f0f39-31a0-4819-8796-538d68cc2a0f-17o.png",
      "https://utfs.io/f/5c89f046-80cd-4443-89df-211de62b7c2a-17p.png",
      "https://utfs.io/f/23d9c4f7-8bdb-40e1-99a5-f42271b7404a-17q.png",
      "https://utfs.io/f/9f0847c2-d0b8-4738-a673-34ac2b9506ec-17r.png",
      "https://utfs.io/f/07842cfb-7b30-4fdc-accc-719618dfa1f2-17s.png",
      "https://utfs.io/f/0522fdaf-0357-4213-8f52-1d83c3dcb6cd-18e.png",
    ];

    const creativeNames = [
      "Lançamento em Moema",
      "Residencial Jardim das Flores",
      "Condomínio Vista Maravilhosa",
      "Apartamento Central Park",
      "Casa dos Sonhos",
      "Residencial Bela Vista",
      "Condomínio Verdejante",
      "Apartamento Luxo Urbano",
      "Casa do Lago Sereno",
      "Residencial Horizonte Azul",
    ];

    const addresses = [
      "Rua das Flores, 123 - Moema, São Paulo - SP",
      "Avenida Paulista, 1000 - Bela Vista, São Paulo - SP",
      "Rua Oscar Freire, 500 - Jardins, São Paulo - SP",
      "Alameda Santos, 2000 - Cerqueira César, São Paulo - SP",
      "Rua Haddock Lobo, 800 - Jardins, São Paulo - SP",
      "Avenida Brigadeiro Faria Lima, 3000 - Itaim Bibi, São Paulo - SP",
      "Rua Augusta, 1500 - Consolação, São Paulo - SP",
      "Avenida Rebouças, 2500 - Pinheiros, São Paulo - SP",
      "Rua do Rocio, 400 - Vila Olímpia, São Paulo - SP",
      "Alameda Jaú, 900 - Jardim Paulista, São Paulo - SP",
    ];

    const descriptions = [
      "Apartamento de 3 quartos com vista panorâmica, 2 vagas de garagem, acabamento em mármore e piscina na cobertura.",
      "Casa térrea com 4 suítes, jardim privativo, churrasqueira e área de lazer completa com sauna.",
      "Condomínio fechado com segurança 24h, quadra poliesportiva, playground e salão de festas.",
      "Cobertura duplex com 400m², terraço gourmet, jacuzzi e vista para o mar.",
      "Sobrado moderno com design arquitetônico premiado, home theater e piscina aquecida.",
      "Kitnet mobiliada em condomínio com academia, lavanderia coletiva e espaço coworking.",
      "Terreno de 500m² em condomínio de alto padrão, pronto para construir seu sonho.",
      "Studio decorado com móveis planejados, ideal para investidores ou primeira moradia.",
      "Casa de campo com 5 quartos, horta orgânica, lago artificial e estábulo.",
      "Loft industrial com pé-direito duplo, tijolo aparente e iluminação em LED.",
    ];

    // Criar propriedades
    const properties = [];

    for (let i = 0; i < 10; i++) {
      // Selecionar 3-5 imagens aleatórias para cada propriedade
      const propertyImages: string[] = [];
      const numImages = Math.floor(Math.random() * 3) + 3; // 3-5 imagens

      for (let j = 0; j < numImages; j++) {
        const randomImage = images[Math.floor(Math.random() * images.length)];
        if (!propertyImages.includes(randomImage)) {
          propertyImages.push(randomImage);
        }
      }

      // Garantir pelo menos uma imagem principal
      if (propertyImages.length === 0) {
        propertyImages.push(images[i % images.length]);
      }

      const property = await prisma.property.create({
        data: {
          title: creativeNames[i],
          address: addresses[i],
          imagesUrl: propertyImages,
          price: parseFloat((Math.random() * 3000000 + 500000).toFixed(2)), // R$ 500k - 3.5M
          description: descriptions[i],
        },
      });

      properties.push(property);
      console.log(`Propriedade criada: ${property.title}`);
    }

    // Criar alguns usuários e corretores
    // Usando createMany para os usuários
    const usersResult = await prisma.user.createMany({
      data: [
        {
          name: "João Silva",
          email: "joao@imobiliaria.com",
          password: "$2b$10$K1K1K1K1K1K1K1K1K1K1K1", // senha hashada (exemplo)
          is_active: true,
        },
        {
          name: "Maria Santos",
          email: "maria@imobiliaria.com",
          password: "$2b$10$K1K1K1K1K1K1K1K1K1K1K1",
          is_active: true,
        },
      ],
      skipDuplicates: true,
    });

    // Verificar se usuários foram criados (count > 0)
    if (usersResult.count > 0) {
      // Buscar os usuários recém-criados
      const createdUsers = await prisma.user.findMany({
        where: {
          email: {
            in: ["joao@imobiliaria.com", "maria@imobiliaria.com"],
          },
        },
      });

      for (const user of createdUsers) {
        await prisma.realtor.create({
          data: {
            userId: user.id,
            photoUrl: user.name.includes("João")
              ? "https://randomuser.me/api/portraits/men/32.jpg"
              : "https://randomuser.me/api/portraits/women/44.jpg",
            phones: ["+5511999999999", "+5511888888888"],
            description: `Corretor especializado em ${user.name.includes("João") ? "imóveis comerciais" : "imóveis residenciais de luxo"} com 10 anos de experiência.`,
          },
        });
        console.log(`Corretor criado para: ${user.name}`);
      }
    } else {
      console.log("Usuários já existiam, pulando criação de corretores");
    }

    console.log("✅ Seed concluído com sucesso!");
    console.log(`📊 Total: ${properties.length} propriedades criadas`);
  } catch (error) {
    console.error("❌ Erro ao executar o seed:", error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

seedDatabase();
