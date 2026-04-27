"use client";
import Image from "next/image";
import { Button } from "./button";
import { Card, CardContent } from "./card";
import { CheckCheck } from "lucide-react";
import imgPerson from "@/public/images/person01.jpg";
import { RatingStars } from "./rating-stars";
import { openWhatsApp } from "../_utils/whatsapp";

interface CardPropertyInforProps {
  icon?: React.ReactNode;
  title: string;
  value: string | number;
}

interface CardPropertyProps {
  dimensions?: {
    name: string;
    size: string | number;
  }[];

  features?: {
    feature: {
      name: string;
    };
  }[];

  nearby?: {
    title: string;
    description: string;
    distance: string | number;
  }[];

  realtor?: {
    name: string;
    creci?: string | number;
    description?: string;
    photoUrl?: string;
    rating?: number;
    phones?: string;
  };

  price?: number;
  pricePerM2?: number;
  condominiumFee?: string | number;
  iptu?: string | number;
  
}

const CardPropertyInfor = ({ icon, title, value }: CardPropertyInforProps) => {
  return (
    <Card className="bg-white border border-gray-200 shadow-md p-4 w-full">
      <CardContent className="flex flex-col items-center text-center">
        {icon && <div className="text-2xl mb-2 text-primary">{icon}</div>}
        <p className="text-3xl text-black">{value}</p>
        <h3 className="font-semibold text-gray-400">{title}</h3>
      </CardContent>
    </Card>
  );
};

const CardPropertyInforTime = ({ nearby }: CardPropertyProps) => {
  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
      {nearby?.map((item, index) => (
        <Card
          className="bg-white border border-gray-200 shadow-md p-4 w-full"
          key={index}
        >
          <CardContent>
            <p className="text-xl text-black ">
              {item.distance} {item.title}
            </p>
            <h3 className="font-semibold text-gray-400">{item.description}</h3>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

const CardPropertyInforDimensions = ({ dimensions }: CardPropertyProps) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
      {dimensions?.map((dimension, index) => (
        <Card
          className="bg-white border border-gray-200 shadow-md w-full"
          key={index}
        >
          <CardContent className="flex justify-between items-center flex-col lg:flex-row">
            <h3 className="font-semibold text-gray-400">{dimension.name}</h3>
            <p className="text-xl text-black ">{dimension.size}m²</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

const CardPropertyInforCaracteristics = ({ features }: CardPropertyProps) => {
  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
      {features?.map((feature, index) => (
        <Card
          className="bg-white border border-gray-200 shadow-md w-full"
          key={index}
        >
          <CardContent className="flex justify-between items-center">
            <h3 className="font-semibold text-gray-400">
              {feature.feature.name}
            </h3>
            <p className="text-xl text-primary ">
              <CheckCheck />
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

const CardPropertyInforPayment = ({
  price,
  pricePerM2,
  condominiumFee,
  iptu,
  realtor,
}: CardPropertyProps) => {
  return (
    <Card className="bg-white border border-gray-200 shadow-md w-full">
      <CardContent className="text-black flex flex-col gap-4">
        <div>
          <p>Venda Direta</p>
          <p className="text-3xl">R$ {price?.toLocaleString("pt-BR")}</p>
          <p>R$ {pricePerM2?.toLocaleString("pt-BR")} / m²</p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="border-dashed border-b border-gray-300 flex justify-between py-2">
            <p className="text-gray-400">Condomínio</p>
            <p>R$ {condominiumFee?.toLocaleString("pt-BR")} / mês</p>
          </div>
          <div className="border-dashed border-b border-gray-300 flex justify-between py-2">
            <p className="text-gray-400">IPTU</p>
            <p>R$ {iptu?.toLocaleString("pt-BR")} / mês</p>
          </div>
          <div className="border-dashed border-b border-gray-300 flex justify-between py-2">
            <p className="text-gray-400">Valor por m²</p>
            <p>R$ {pricePerM2?.toLocaleString("pt-BR")} / m²</p>
          </div>
        </div>

        {realtor && (
          <div className="flex flex-col gap-3">
            <Button
              variant={"secondary"}
              onClick={() =>
                openWhatsApp(
                  realtor.phones || "",
                  `Olá ${realtor.name}, vi um imóvel e gostaria de mais informações!`,
                )
              }
            >
              Entrar em contato
            </Button>
            <Button
              variant={"outline"}
              onClick={() =>
                openWhatsApp(
                  realtor.phones || "",
                  `Olá ${realtor.name}, vi um imóvel e gostaria de agendar uma visita!`,
                )
              }
            >
              Agendar uma visita
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const CardPropertyInforPerson = ({ realtor }: CardPropertyProps) => {
  return (
    <Card className="bg-white border border-gray-200 shadow-md p-4 w-full">
      {realtor && (
        <CardContent className="flex items-center text-center text-black gap-6">
          <div className="w-20 h-20 rounded-full overflow-hidden relative shrink-0">
            <Image
              src={realtor.photoUrl || imgPerson}
              alt="Imagem do corretor"
              fill
              className="object-cover rounded-full"
            />
          </div>
          <div className="flex flex-col items-start justify-start gap-1 mt-1">
            <p>{realtor.name}</p>
            <p>{realtor.description || "-"}</p>
            <p>CRECI {realtor.creci || "-"}</p>
            <div className="flex gap-1">
              <RatingStars rating={realtor.rating ?? 0} />
            </div>
          </div>
        </CardContent>
      )}
    </Card>
  );
};

export {
  CardPropertyInfor,
  CardPropertyInforTime,
  CardPropertyInforDimensions,
  CardPropertyInforCaracteristics,
  CardPropertyInforPayment,
  CardPropertyInforPerson,
};
