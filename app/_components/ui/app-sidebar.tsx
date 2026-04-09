
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Building2,
  Users,
  User,
  Settings,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./sidebar";

const items = [
  {
    title: "Dashboard",
    url: "/painel",
    icon: LayoutDashboard,
  },
  {
    title: "Propriedades",
    url: "/painel/properties",
    icon: Building2,
  },
  {
    title: "Consultores",
    url: "/painel/consultants",
    icon: Users,
  },
  {
    title: "Perfil",
    url: "/painel/profile",
    icon: User,
  },
  {
    title: "Configurações",
    url: "/painel/settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarHeader className="border-b px-6 py-5">
        <div className="flex flex-col">
          <span className="font-title text-2xl tracking-wide">
            KAIROS
          </span>
          <span className="text-sm text-muted-foreground">
            Painel Administrativo
          </span>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                const isActive =
                  pathname === item.url ||
                  pathname.startsWith(`${item.url}/`);

                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={isActive}>
                      <Link href={item.url}>
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t p-4 text-xs text-muted-foreground">
        Kairos Real State © 2026
      </SidebarFooter>
    </Sidebar>
  );
}