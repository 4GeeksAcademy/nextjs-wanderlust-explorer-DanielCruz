import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { FavoritesProvider } from "@/context/FavoritesContext";
import FavoritesLayoutInner from "@/components/FavoritesLayoutInner";
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
  title: "Wanderlust Labs | Experience Explorer",
  description:
    "Discover curated travel experiences, adventures, and activities worldwide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-stone-50 text-stone-950">
        <FavoritesProvider>
          <FavoritesLayoutInner>{children}</FavoritesLayoutInner>
        </FavoritesProvider>
      </body>
    </html>
  );
}
