"use client";

import { MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "./button";
import { openWhatsApp } from "../_utils/whatsapp";

const CardWhatsapp = () => {
  return (
    <div className="flex flex-col gap-6 border border-primary text-gray-400 p-5">
      <div className="flex items-center gap-2">
        <MessageCircle className="fill-primary border text-white" />
        <div>
          <p className="text-white">Prefere pelo WhatsApp?</p>
          <p>Atendimentos ráido e direto</p>
        </div>
      </div>
      <p>
        Nossa equipe responde em poucos minutos durante o horário comercial.
        Clique abaixo para iniciar uma conversa.
      </p>

      <Button
        className="w-full"
        onClick={() =>
          openWhatsApp(
            "+5511952306798",
            `Olá Kairós, vi um imóvel e gostaria de mais informações!`,
          )
        }
      >
        <p>Conversar no WhatsApp</p>
        <ArrowRight />
      </Button>
    </div>
  );
};

export default CardWhatsapp;
