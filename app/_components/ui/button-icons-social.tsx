import Link from "next/link";
import { Button } from "./button";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const socialLinks = [
  {
    icon: FaFacebook,
    href: "https://www.facebook.com/Kairos.Real.Estete?mibextid=wwXIfr&rdid=bmOeBB0HwFDkvDoz&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Dv5N1EWis%2F%3Fmibextid%3DwwXIfr#",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/kairos_re/",
  },
  {
    icon: FaWhatsapp,
    href: "https://wa.me/5511952306798",
  }
];

const ButtonIconSocial = () => {
  return (
    <div className="flex gap-4">
      {socialLinks.map((item, index) => {
        const Icon = item.icon;

        return (
          <Button key={index} variant="outline" size="sm" asChild>
            <Link href={item.href} target="_blank" rel="noopener noreferrer">
              <Icon />
            </Link>
          </Button>
        );
      })}
    </div>
  );
};

export default ButtonIconSocial;
