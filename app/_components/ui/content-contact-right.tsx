import CardContactRealtor from "./card-contact-realtor";
import imgPerson from "@/public/images/person01.png";
import CardWhatsapp from "./card-whatsapp";
import { StaticMap } from "./static-map";
import {
  Clock,
  MapPinned,
  MoveUpRight,
  Instagram,
  Facebook,
  Mail,
  MessageCircle,
} from "lucide-react";
import ButtonIcon from "./button-icon";

const ContentContactRight = () => {
  return (
    <div className="bg-black w-full flex flex-col gap-8 p-6">
      <section>
        <p className="text-primary">FALE DIRETAMENTER COM UM CONSULTOR</p>
        <CardContactRealtor
          name="Ana Carolina Ferreira"
          description="Especialista em imóveis"
          imageUrl={imgPerson.src}
        />
        <CardContactRealtor
          name="Rafael Mendes"
          description="Especialista em imóveis"
          imageUrl={imgPerson.src}
        />
        <CardContactRealtor
          name="Patrícia Silva"
          description="Especialista em imóveis"
          imageUrl={imgPerson.src}
        />
      </section>

      <CardWhatsapp />

      <section className="flex flex-col gap-4 border-t border-primary/50 pt-5">
        <p className="text-primary">NOSSA SEDE</p>
        <StaticMap />
        <div className="flex gap-2 items-center text-gray-500">
          <Clock size={14} className="text-primary" />
          <p>Seg a Sex das 9h às 18h · Sábado das 9h às 13h</p>
        </div>

        <div className="flex gap-2 items-center text-gray-500 ">
          <MapPinned size={14} className="text-primary" />
          <p>Rua Mario Correia, 14 — Vila Matilde, São Paulo - SP, 03647-000</p>
        </div>

        <div className="flex gap-2 items-center text-primary">
          <MoveUpRight size={12} />
          <p>Ver no Google Maps</p>
        </div>
      </section>

      <section className="flex flex-col gap-4 border-t border-primary/50 pt-5">
        <p className="text-primary">SIGA-NOS</p>
        <div className="flex gap-4 ">
          <ButtonIcon icon={<Instagram />} />
          <ButtonIcon icon={<Facebook />} />
          <ButtonIcon icon={<Mail />} />
          <ButtonIcon icon={<MessageCircle />} />
        </div>
      </section>
    </div>
  );
};

export default ContentContactRight;
