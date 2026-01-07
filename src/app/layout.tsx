import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "BOSS BIRTHDAY 2026 | Hollywood Erotic",
  description: "L'événement le plus glamour de l'année. BOSS BIRTHDAY 2026: HOLLYWOOD EROTIC - 28 Mars 2026. Une soirée exclusive où le glamour hollywoodien rencontre l'érotisme raffiné.",
  keywords: "Boss Birthday, Hollywood, Erotic, Nightclub, Event, Party, 2026, Glamour",
  authors: [{ name: "BOSS Events" }],
  openGraph: {
    title: "BOSS BIRTHDAY 2026 | Hollywood Erotic",
    description: "L'événement le plus glamour de l'année. 28 Mars 2026.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${playfair.variable} ${inter.variable} film-grain antialiased`}>
        {children}
      </body>
    </html>
  );
}
