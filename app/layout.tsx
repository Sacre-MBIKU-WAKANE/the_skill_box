import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "The Skills Box - Votre 'un jour' commence maintenant",
  description:
    "Plateforme dédiée aux opportunités pour la jeunesse congolaise. Formations, accélérateurs, mentorat et événements pour propulser votre carrière.",
  keywords: [
    "jeunesse",
    "opportunités",
    "RDC",
    "Congo",
    "formation",
    "startup",
    "accélérateur",
    "mentorat",
    "theskillsbox",
    "theskillbox",
    "entrepreneur",
    "entrepreneuriat",
    "ia",

  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${jakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
