import CardContactRealtor from "./card-contact-realtor";
import imgPerson from "@/public/images/person01.png";
import imgSedeKairos from "../../../public/images/sedeKairos.jpeg";
import CardWhatsapp from "./card-whatsapp";
import { StaticMap } from "./static-map";
import { Clock, MapPinned, MoveUpRight } from "lucide-react";
import { FaInstagram, FaFacebook, FaWhatsapp, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import { prisma } from "@/app/_lib/prisma";
import ButtonIconSocial from "./button-icons-social";
import Image from "next/image";

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
        <StaticMap />
        <div className="flex gap-2 items-center text-gray-500">
          <Clock size={14} className="text-primary" />
          <p>Seg a Sex das 9h às 18h · Sábado das 9h às 13h</p>
        </div>

        <div className="flex gap-2 items-center text-gray-500 ">
          <MapPinned size={14} className="text-primary" />

          <p>
            Rua Mario Correia, 14 — Vila Matilde, São Paulo - SP, 03647-000
          </p>
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
