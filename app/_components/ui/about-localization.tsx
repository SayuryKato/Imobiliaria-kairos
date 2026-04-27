import { MapPinned } from "lucide-react";
import { Button } from "./button";
import { StaticMap } from "./static-map";
import Link from "next/link";

const AboutLocalization = () => {
  return (
    <div className="bg-black border border-t-primary/50 p-6 flex justify-center gap-5 items-center h-140 lg:flex-row flex-col">
      <section className="w-full flex flex-col gap-4 items-start h-full justify-center lg:w-3/10">
        <div className="text-primary flex gap-4 item-center">
          <MapPinned />
          <h2 className="text-2xl font-title">Nossa Localização</h2>
        </div>
        <p className="text-gray-300">
          Estamos localizados em uma área privilegiada, com fácil acesso a
          infraestrutura e comodidades. Atuamos nos melhores bairros da capital
          paulista, com empreendimentos estrategicamente localizados perto de
          comércio, lazer, transporte e natureza. Nossa equipe está pronta para
          te guiar.
        </p>

        <Button variant={"outline"} asChild>
          <Link
            href={`https://maps.app.goo.gl/Anr4DrL9J2cASv7i8`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Quero conhecer o local
          </Link>
        </Button>
      </section>

      <div className="w-full lg:w-3/10 h-100 rounded-xl overflow-hidden">
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
    </div>
  );
};

export default AboutLocalization;
