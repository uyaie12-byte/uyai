import type { Metadata } from "next";
import { Anton, Archivo, IBM_Plex_Mono } from "next/font/google";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://theundergrounddraft.com"),
  title: {
    default: "The Underground Draft",
    template: "%s · The Underground Draft",
  },
  description:
    "The Underground Draft is an independent music and culture platform — discovering, documenting and spotlighting the artists, sounds and movements shaping African music before the rest of the world catches on.",
  openGraph: {
    title: "The Underground Draft",
    description: "The first draft of what's next.",
    siteName: "The Underground Draft",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${archivo.variable} ${plexMono.variable} h-full`}
    >
      <body className="grain min-h-full flex flex-col bg-paper text-ink font-sans antialiased selection:bg-red selection:text-paper">
        <SiteNav />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
