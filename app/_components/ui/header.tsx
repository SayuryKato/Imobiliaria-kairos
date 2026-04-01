"use client";

import { Card, CardContent } from "./card";
import { navItems } from "@/app/_constants/navegation";
import { Button } from "./button";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo.jpeg";
import { useEffect, useState } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <Card
      className={`fixed top-0 left-0 z-20 w-full rounded-none border-none transition-all duration-300 ${scrolled ? "bg-black/50 backdrop-blur-lg shadow-md" : "bg-white/5 backdrop-blur-lg"}`}
    >
      <CardContent className="flex items-center justify-between">
        <div className="flex gap-4 items-center">
          <div className="rounded-full w-18 h-18 flex items-center justify-center overflow-hidden">
            <Image
              src={logo}
              alt="Logo da Empresa"
              width={72}
              height={72}
              className="object-cover"
            />
          </div>
          <p className="text-primary font-title">CRECI 12345-J</p>
        </div>
        <div>
          {navItems.map((items, index) => {
            const isLast = index === navItems.length - 1;

            return (
              <Button
                key={items.href}
                variant={isLast ? "default" : "link"}
                className={`cursor-pointer ${isLast ? "bg-primary text-white" : ""}`}
                asChild
              >
                <Link href={items.href}>{items.label}</Link>
              </Button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default Header;
