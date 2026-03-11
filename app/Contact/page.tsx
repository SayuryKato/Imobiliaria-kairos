import img03 from "../../public/images/img03.jpg";
import Image from "next/image";
import CardContactInfor from "../_components/ui/card-contact-infor";
import { Phone, Mail, MapPinned, Clock } from "lucide-react";
import ContentContactLeft from "../_components/ui/content-contact-left";
import ContentContactRight from "../_components/ui/content-contact-right";
const Contact = () => {
  return (
    <div>
      <section className="relative w-full h-150">
        <div className="absolute inset-0 -z-10">
          <Image
            src={img03}
            alt={"Image 03"}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-60" />
        </div>

        <div className="flex flex-col justify-center min-h-150 max-w-6xl mx-auto px-6 ">
          <h1 className="font-title font-light text-7xl leading-[1.1] tracking-wide">
            Estamos <span className="text-primary italic">aqui</span>
            <br />
            para te ajudar
          </h1>

          <p className="mt-6 max-w-lg text-sm text-gray-200 font-body">
            Nossa equipe de consultores especializados está pronta para
            responder todas as suas dúvidas e encontrar o imóvel perfeito para
            você.
          </p>
        </div>
      </section>

      <section className="flex justify-around gap-5 bg-secondary p-5">
        <CardContactInfor
          icon={<Phone size={16}/>}
          type="TELEFONE"
          value="(11) 1234-5678"
          description="Ligue para nós e obtenha assistência personalizada."
        />
        <CardContactInfor
          icon={<Mail size={16}/>}
          type="E-MAIL"
          value="contato@gmail.com"
          description="Resposta em até 24h"
        />
        <CardContactInfor
          icon={<MapPinned size={16}/>}
          type="ENDEREÇO"
          value="Maria Carlota, 714"
          description="Vila Matilde, São Paulo-SP"
        />
        <CardContactInfor
          icon={<Clock size={16}/>}
          type="HORÁRIO DE ATENDIMENTO"
          value="Seg-Sex, 9h às 18h"
          description="Sáb, 9h às 13h"
        />
      </section>

      <section className="flex gap-4 justify-between">
        <ContentContactLeft />
        <ContentContactRight />
      </section>
    </div>
  );
};

export default Contact;
