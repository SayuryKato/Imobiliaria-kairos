import Image from "next/image";
import { Button } from "./button";
import { Card, CardContent } from "./card";
import { CheckCheck, Star } from "lucide-react";
import imgPerson from "@/public/images/person01.png";

interface CardPropertyInforProps {
  icon?: React.ReactNode;
  title: string;
  value: string | number;
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

const CardPropertyInforTime = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <Card className="bg-white border border-gray-200 shadow-md p-4 w-full">
        <CardContent>
          <p className="text-xl text-black ">8 min do Metrô</p>
          <h3 className="font-semibold text-gray-400">
            Estação Faria Lima — Linha 4 Amarela
          </h3>
        </CardContent>
      </Card>
      <Card className="bg-white border border-gray-200 shadow-md p-4 w-full">
        <CardContent>
          <p className="text-xl text-black ">8 min do Metrô</p>
          <h3 className="font-semibold text-gray-400">
            Estação Faria Lima — Linha 4 Amarela
          </h3>
        </CardContent>
      </Card>
      <Card className="bg-white border border-gray-200 shadow-md p-4 w-full">
        <CardContent>
          <p className="text-xl text-black ">8 min do Metrô</p>
          <h3 className="font-semibold text-gray-400">
            Estação Faria Lima — Linha 4 Amarela
          </h3>
        </CardContent>
      </Card>
      <Card className="bg-white border border-gray-200 shadow-md p-4 w-full">
        <CardContent>
          <p className="text-xl text-black ">8 min do Metrô</p>
          <h3 className="font-semibold text-gray-400">
            Estação Faria Lima — Linha 4 Amarela
          </h3>
        </CardContent>
      </Card>
      <Card className="bg-white border border-gray-200 shadow-md p-4 w-full">
        <CardContent>
          <p className="text-xl text-black ">8 min do Metrô</p>
          <h3 className="font-semibold text-gray-400">
            Estação Faria Lima — Linha 4 Amarela
          </h3>
        </CardContent>
      </Card>
    </div>
  );
};

const CardPropertyInforDimensions = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <Card className="bg-white border border-gray-200 shadow-md w-full">
        <CardContent className="flex justify-between items-center">
          <h3 className="font-semibold text-gray-400">Área privativa</h3>
          <p className="text-xl text-black ">148 m²</p>
        </CardContent>
      </Card>
      <Card className="bg-white border border-gray-200 shadow-md w-full">
        <CardContent className="flex justify-between items-center">
          <h3 className="font-semibold text-gray-400">Área privativa</h3>
          <p className="text-xl text-black ">148 m²</p>
        </CardContent>
      </Card>
      <Card className="bg-white border border-gray-200 shadow-md w-full">
        <CardContent className="flex justify-between items-center">
          <h3 className="font-semibold text-gray-400">Área privativa</h3>
          <p className="text-xl text-black ">148 m²</p>
        </CardContent>
      </Card>
      <Card className="bg-white border border-gray-200 shadow-md w-full">
        <CardContent className="flex justify-between items-center">
          <h3 className="font-semibold text-gray-400">Área privativa</h3>
          <p className="text-xl text-black ">148 m²</p>
        </CardContent>
      </Card>
      <Card className="bg-white border border-gray-200 shadow-md w-full">
        <CardContent className="flex justify-between items-center">
          <h3 className="font-semibold text-gray-400">Área privativa</h3>
          <p className="text-xl text-black ">148 m²</p>
        </CardContent>
      </Card>
      <Card className="bg-white border border-gray-200 shadow-md w-full">
        <CardContent className="flex justify-between items-center">
          <h3 className="font-semibold text-gray-400">Área privativa</h3>
          <p className="text-xl text-black ">148 m²</p>
        </CardContent>
      </Card>
    </div>
  );
};

const CardPropertyInforCaracteristics = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <Card className="bg-white border border-gray-200 shadow-md w-full">
        <CardContent className="flex justify-between items-center">
          <h3 className="font-semibold text-gray-400">Área privativa</h3>
          <p className="text-xl text-primary ">
            <CheckCheck />
          </p>
        </CardContent>
      </Card>
      <Card className="bg-white border border-gray-200 shadow-md w-full">
        <CardContent className="flex justify-between items-center">
          <h3 className="font-semibold text-gray-400">Área privativa</h3>
          <p className="text-xl text-primary ">
            <CheckCheck />
          </p>
        </CardContent>
      </Card>
      <Card className="bg-white border border-gray-200 shadow-md w-full">
        <CardContent className="flex justify-between items-center">
          <h3 className="font-semibold text-gray-400">Área privativa</h3>
          <p className="text-xl text-primary ">
            <CheckCheck />
          </p>
        </CardContent>
      </Card>
      <Card className="bg-white border border-gray-200 shadow-md w-full">
        <CardContent className="flex justify-between items-center">
          <h3 className="font-semibold text-gray-400">Área privativa</h3>
          <p className="text-xl text-primary ">
            <CheckCheck />
          </p>
        </CardContent>
      </Card>
      <Card className="bg-white border border-gray-200 shadow-md w-full">
        <CardContent className="flex justify-between items-center">
          <h3 className="font-semibold text-gray-400">Área privativa</h3>
          <p className="text-xl text-primary ">
            <CheckCheck />
          </p>
        </CardContent>
      </Card>
      <Card className="bg-white border border-gray-200 shadow-md w-full">
        <CardContent className="flex justify-between items-center">
          <h3 className="font-semibold text-gray-400">Área privativa</h3>
          <p className="text-xl text-primary ">
            <CheckCheck />
          </p>
        </CardContent>
      </Card>
      <Card className="bg-white border border-gray-200 shadow-md w-full">
        <CardContent className="flex justify-between items-center">
          <h3 className="font-semibold text-gray-400">Área privativa</h3>
          <p className="text-xl text-primary ">
            <CheckCheck />
          </p>
        </CardContent>
      </Card>
      <Card className="bg-white border border-gray-200 shadow-md w-full">
        <CardContent className="flex justify-between items-center">
          <h3 className="font-semibold text-gray-400">Área privativa</h3>
          <p className="text-xl text-primary ">
            <CheckCheck />
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

const CardPropertyInforPayment = () => {
  return (
    <Card className="bg-white border border-gray-200 shadow-md w-full">
      <CardContent className="text-black flex flex-col gap-4">
        <div>
          <p>Venda Direta</p>
          <p className="text-3xl">R$ 2.890.000</p>
          <p>R$ 19.527 / m²</p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="border-dashed border-b border-gray-300 flex justify-between py-2">
            <p className="text-gray-400">Condomínio</p>
            <p>R$ 1.480 / mês</p>
          </div>
          <div className="border-dashed border-b border-gray-300 flex justify-between py-2">
            <p className="text-gray-400">IPTU</p>
            <p>R$ 1.480 / mês</p>
          </div>
          <div className="border-dashed border-b border-gray-300 flex justify-between py-2">
            <p className="text-gray-400">Valor por m²</p>
            <p>R$ 1.480 / mês</p>
          </div>
          <div className="border-dashed border-b border-gray-300 flex justify-between py-2">
            <p className="text-gray-400">Custo mensal total</p>
            <p>R$ 1.480 / mês</p>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <Button variant={"secondary"}>Entrar em contato</Button>
          <Button variant={"outline"}>Agendar uma visita</Button>
        </div>
      </CardContent>
    </Card>
  );
};

const CardPropertyInforPerson = () => {
  return (
    <Card className="bg-white border border-gray-200 shadow-md p-4 w-full">
      <CardContent className="flex items-center text-center text-black gap-6">
        <div className="rounded-full w-20 h-20 overflow-hidden relative">
          <Image
            src={imgPerson}
            alt="Logo da Empresa"
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="flex flex-col items-start justify-start gap-2 mt-1">
          <p>Isabela Monteiro</p>
          <p>Corretora certificada · CRECI 123456</p>
          <div className="flex gap-1">
            <div className="flex">
              <Star className="text-primary fill-current stroke-0" />
              <Star className="text-primary fill-current stroke-0" />
              <Star className="text-primary fill-current stroke-0" />
              <Star className="text-primary fill-current stroke-0" />
              <Star className="text-primary fill-current stroke-0" />
            </div>
            <p>(97 avaliações)</p>
          </div>
        </div>
      </CardContent>
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
