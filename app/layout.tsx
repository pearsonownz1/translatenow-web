import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, Oswald } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  weight: ["500", "600"],
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

const plex = IBM_Plex_Sans({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-plex",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-plex-mono",
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
    <html
      lang="en"
      className={`${oswald.variable} ${plex.variable} ${plexMono.variable}`}
    >
      <body className="min-h-screen bg-paper text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
