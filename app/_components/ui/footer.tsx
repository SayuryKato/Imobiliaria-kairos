import Image from "next/image";
import logo from "../../../public/logo.jpeg";
import ButtonIcon from "./button-icon";
import {
  Instagram,
  Facebook,
  Mail,
  MessageCircle,
  ArrowUp,
} from "lucide-react";
import { navItems } from "@/app/_constants/navegation";
import { Button } from "./button";

const Footer = () => {
  return (
    <div className="bg-black p-6">
      <section className="flex justify-around">
        <div className="w-1/4 flex flex-col items-center gap-4">
          <div className="rounded-full flex items-center justify-center">
            <Image
              src={logo}
              alt="Logo da Empresa"
              width={100}
              height={100}
              className="object-contain object-center"
            />
          </div>
          <p>
            Há 15 anos conectando pessoas e famílias aos imóveis ideais em São
            Paulo, com excelência, transparência e sofisticação.
          </p>

          <div className="flex gap-4 ">
            <ButtonIcon icon={<Instagram />} />
            <ButtonIcon icon={<Facebook />} />
            <ButtonIcon icon={<Mail />} />
            <ButtonIcon icon={<MessageCircle />} />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <p className="text-primary font-medium">BAIRROS</p>
          <Button variant={"link"}>
            MOEMA
          </Button>
          <Button variant={"link"}>
            Jardim Paulista
          </Button>
          <Button variant={"link"}>
            Vila Madalena
          </Button>
          <Button variant={"link"}>
            Ver mais...
          </Button>
        </div>

        <div className="flex flex-col items-center justify-center">
          <p className="text-primary font-medium">EMPRESA</p>
          {navItems.map((item) => (
            <Button key={item.href} variant={"link"}>
              {item.label}
            </Button>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center">
          <p className="text-primary font-medium">CONTATO</p>
          <Button variant={"link"}>
            (99) 9 9999-9999
          </Button>
          <Button variant={"link"}>
            contato@gmail.com
          </Button>
          <Button variant={"link"}>
            Rua Maria Carlota, 714, Vila Matilde - 03647000 - São Paulo, SP
          </Button>
        </div>
      </section>

      <section className="flex w-full items-center justify-between mt-6 border-t border-primary/50 pt-4">
        <p>
          © 2025 New Home. Todos os direitos reservados. |
          contato@espacoestilo.com.br | (11) 9999-9999
        </p>
        <Button variant={"outline"}>
          <ArrowUp /> Voltar ao topo
        </Button>
      </section>
    </div>
  );
};

export default Footer;
