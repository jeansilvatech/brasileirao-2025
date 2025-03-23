import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Brasileirão 2025",
  description: "Equipes participantes e tabela completa do campeonato",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${montserrat.className}`}
      >
        {children}
      </body>
    </html>
  );
}
