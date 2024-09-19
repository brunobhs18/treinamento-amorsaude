import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PassoProvider } from "@/context/PassoContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Treinamento cVortex",
  description: "Treinameto de Atendimento e Gestão cVortex AmorSaúde",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <PassoProvider>{children}</PassoProvider>
      </body>
    </html>
  );
}
