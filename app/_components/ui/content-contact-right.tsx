import CardContactRealtor from "./card-contact-realtor";
import imgPerson from "@/public/images/person01.png";
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
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3310.4163704531616!2d-46.53063052502226!3d-23.527856160361456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDMxJzQwLjMiUyA0NsKwMzEnNDEuMCJX!5e1!3m2!1spt-BR!2sbr!4v1776531449923!5m2!1spt-BR!2sbr"
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

          <p>Rua Mario Correia, 14 — Vila Matilde, São Paulo - SP, 03647-000</p>
        </div>

        <div className="flex gap-2 items-center text-primary">
          <Link
            href={`https://www.google.com/maps?q=-23.5278642,-46.5280499`}
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
