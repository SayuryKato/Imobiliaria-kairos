import type { Metadata } from "next";
import "./globals.css";
import { cormorant, outfit } from "./font";
import Header from "./_components/ui/header";
import Footer from "./_components/ui/footer";
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
    <html lang="pt-br">
      <body
        className={`${cormorant.variable} ${outfit.variable} dark bg-white font-body`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
