import CardContactRealtor from "./card-contact-realtor";
import imgPerson from "@/public/images/person01.jpg";
import CardWhatsapp from "./card-whatsapp";
import { Clock, MapPinned, MoveUpRight } from "lucide-react";
import Link from "next/link";
import { prisma } from "@/app/_lib/prisma";
import ButtonIconSocial from "./button-icons-social";

const ContentContactRight = async () => {
  const realtors = await prisma.realtor.findMany({});
  return (
    <div className="bg-black w-full flex flex-col gap-8 p-6">
      <section>
        <p className="text-primary">FALE DIRETAMENTER COM UM CONSULTOR</p>
        {realtors.map((realtor) => (
          <CardContactRealtor
            key={realtor.id}
            name={realtor.name}
            description={realtor.description || "Especialista em imóveis"}
            imageUrl={realtor.photoUrl || imgPerson.src}
            phone={realtor.phones[0]}
          />
        ))}
      </section>

      <CardWhatsapp />

      <section className="flex flex-col gap-4 border-t border-primary/50 pt-5">
        <p className="text-primary">NOSSA SEDE</p>
        <div className="w-full h-100 rounded-xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.2052370182396!2d-46.65899442502099!3d-23.561071261580814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce582d52f1b20d%3A0x24536a8f515205fd!2sAv.%20Paulista%2C%201636%20-%20Cerqueira%20C%C3%A9sar%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001310-200!5e0!3m2!1spt-BR!2sbr!4v1777314153486!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="flex gap-2 items-center text-gray-500">
          <Clock size={14} className="text-primary" />
          <p>Seg a Sex das 9h às 18h · Sábado das 9h às 13h</p>
        </div>

        <div className="flex gap-2 items-center text-gray-500 ">
          <MapPinned size={14} className="text-primary" />

          <p>Av. Paulista, 1636, Bela Vista - 01310200 - São Paulo, SP</p>
        </div>

        <div className="flex gap-2 items-center text-primary">
          <Link
            href={`https://maps.app.goo.gl/Anr4DrL9J2cASv7i8`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:underline"
          >
            <MoveUpRight size={12} />
            <p>Ver no Google Maps</p>
          </Link>
        </div>
      </section>

      <section className="flex flex-col gap-4 border-t border-primary/50 pt-5">
        <p className="text-primary">SIGA-NOS</p>
        <ButtonIconSocial />
      </section>
    </div>
  );
};

export default ContentContactRight;
