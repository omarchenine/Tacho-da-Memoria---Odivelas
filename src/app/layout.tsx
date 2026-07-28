import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { LanguageProvider } from "@/i18n/LanguageContext";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tacho da Memória | Cozinha Tradicional Portuguesa em Odivelas",
  description: "Saboreie a verdadeira essência da gastronomia portuguesa no Tacho da Memória em Odivelas. Pratos tradicionais cozinhados com paixão e ingredientes frescos num ambiente acolhedor.",
  keywords: "Restaurante Português, Odivelas, Tacho da Memória, Cozinha Tradicional, Comida Portuguesa, Bacalhau, Pastel de Nata, Almoço, Jantar, Reservas",
  authors: [{ name: "Tacho da Memória" }],
  openGraph: {
    title: "Tacho da Memória | Cozinha Tradicional Portuguesa",
    description: "Saboreie a verdadeira essência da gastronomia portuguesa no Tacho da Memória em Odivelas.",
    url: "https://tachodamemoria.pt",
    siteName: "Tacho da Memória",
    locale: "pt_PT",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-cream text-charcoal font-sans" suppressHydrationWarning>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
