import Image from "next/image";
import logo from "../../../public/logo.jpeg";
import { ArrowUp } from "lucide-react";
import { navItems } from "@/app/_constants/navegation";
import { Button } from "./button";
import Link from "next/link";
import ButtonIconSocial from "./button-icons-social";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-black p-6">
      <section className="flex justify-around lg:flex-row flex-col gap-6 items-center">
        <div className="lg:w-1/4 flex flex-col items-center gap-6">
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

          <ButtonIconSocial />
        </div>

        <div className="flex flex-col items-center justify-center gap-6">
          <p className="text-primary font-medium">EMPRESA</p>
          {navItems.map((item) => (
            <Button variant={"link"} asChild key={item.href}>
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            </Button>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center gap-6">
          <p className="text-primary font-medium">CONTATO</p>
          <Button variant={"link"}>(11) 9 5586-5499</Button>
          <Button variant={"link"}>kairosre@outlook.com.br</Button>
          <Button
            variant={"link"}
            asChild
            className="whitespace-normal text-left"
          >
            <Link
              href="https://www.google.com/maps/place/Av.+Paulista,+1636+-+Cerqueira+C%C3%A9sar,+S%C3%A3o+Paulo+-+SP,+01310-200/@-23.5611435,-46.656522,3a,75y,54.85h,97.19t/data=!3m7!1e1!3m5!1saf0JDMx_cQ-5tpTOvRh5JA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-7.187603182140904%26panoid%3Daf0JDMx_cQ-5tpTOvRh5JA%26yaw%3D54.849575982011764!7i16384!8i8192!4m6!3m5!1s0x94ce582d52f1b20d:0x24536a8f515205fd!8m2!3d-23.5610762!4d-46.6564195!16s%2Fg%2F11x193rk8r?entry=tts&g_ep=EgoyMDI2MDQyMi4wIPu8ASoASAFQAw%3D%3D&skid=dbda22b5-bfa7-496f-86b6-206addcf2811"
              target="_blank"
              rel="noopener noreferrer"
            >
              Av. Paulista, 1636, Bela Vista - 01310200 - São Paulo, SP
            </Link>
          </Button>
        </div>
      </section>

      <section className="flex w-full items-center justify-between mt-6 border-t border-primary/50 pt-6 lg:flex-row flex-col gap-6">
        <p>
          © {currentYear} Kairós. Todos os direitos reservados.
        </p>
        <Button variant={"outline"}>
          <Link href={"#top"} className="flex items-center gap-2">
            <ArrowUp /> Voltar ao topo
          </Link>
        </Button>
      </section>
    </div>
  );
};

export default Footer;
