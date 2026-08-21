import type { Metadata } from "next";
import { IBM_Plex_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";

const instrument = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

const plex = IBM_Plex_Sans({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-plex",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "TranslateNow — Certified translations for the filing.",
    template: "%s — TranslateNow",
  },
  description:
    "Human certified and standard translation for USCIS, courts, and schools. A signed accuracy statement. A page is 250 words.",
  metadataBase: new URL("http://localhost:3001"),
  icons: { icon: "/icon.svg" },
  openGraph: {
    title: "TranslateNow — Certified translations for the filing.",
    description:
      "Human translation for the packet. Certified or standard. Nothing is charged in this demo.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${instrument.variable} ${plex.variable}`}>
      <body className="min-h-screen bg-paper text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
