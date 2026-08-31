import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://undergrounddraft.com"),
  title: {
    default: "Underground Draft",
    template: "%s · Underground Draft",
  },
  description:
    "Underground Draft is a modern African music media brand — editorial, signature series, live & DJ sessions, and The Camp, an artist-development residency.",
  openGraph: {
    title: "Underground Draft",
    description:
      "Discover, understand, and experience African music and culture — before it's obvious.",
    siteName: "Underground Draft",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} dark h-full`}
    >
      <body className="min-h-full flex flex-col bg-bg text-fg font-sans antialiased selection:bg-accent selection:text-bg">
        {children}
      </body>
    </html>
  );
}
