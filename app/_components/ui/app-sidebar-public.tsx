"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { navItems } from "@/app/_constants/navegation";

import { Sheet, SheetContent, SheetTrigger } from "./sheet";
import { useState } from "react";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button className="lg:hidden">
          <Menu className="w-6 h-6" />
        </button>
      </SheetTrigger>

      <SheetContent side="left" className="w-72">
        <div className="flex flex-col gap-6 mt-6">
          {navItems.map((item, index) => {
            const isLast = index === navItems.length - 1;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`text-lg font-medium ${
                  isLast ? "bg-primary text-white px-4 py-2 rounded-md" : ""
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </SheetContent>
    </Sheet>
  );
}
