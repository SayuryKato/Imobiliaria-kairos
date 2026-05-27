import type { Metadata } from "next";
import "./globals.css";
import { cormorant, outfit } from "./font";
import { Toaster } from "./_components/ui/sonner";
import { Providers } from "./providers";
export const metadata: Metadata = {
  title: "KAIROS REAL STATE",
  description:
    "Encontre o imóvel perfeito para o seu estilo de vida. Há 15 anos conectando pessoas aos seus lares com excelência e sofisticação.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={`${cormorant.variable} ${outfit.variable} font-body`}>
        <Providers>{children}</Providers>
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
