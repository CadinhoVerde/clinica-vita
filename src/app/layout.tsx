import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Clínica Vita | Saúde e bem-estar ao seu alcance",
  description:
    "Landing page moderna desenvolvida pela LabSites para a Clínica Vita. Agende sua consulta online de forma fácil, rápida e segura.",
  keywords:
    "clínica, saúde, landing page, agendamento online, fisioterapia, nutrição, psicologia, estética, pediatria, dermatologia, LabSites",
  authors: [{ name: "LabSites", url: "https://www.linkedin.com/in/seulink/" }],
  creator: "LabSites",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Clínica Vita | Saúde e bem-estar ao seu alcance",
    description:
      "Landing page moderna desenvolvida pela LabSites para a Clínica Vita.",
    url: "https://clinica-vita.vercel.app", // troque pelo seu link depois de publicar
    siteName: "Clínica Vita",
    images: [
      {
        url: "/og-image.png", // coloque uma imagem de destaque na pasta public (1200x630)
        width: 1200,
        height: 630,
        alt: "Clínica Vita",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
