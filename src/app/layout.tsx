import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Brasileirão 2025 | Times e Jogos",
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
