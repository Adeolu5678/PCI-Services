import type { Metadata } from "next";
import { Inter, Rajdhani } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-rajdhani",
});

export const metadata: Metadata = {
  title: "PCI Services - Engineered for Efficiency",
  description:
    "Leading technical insulation and firestopping solutions for the Denver Metro area. Commercial insulation, thermal control, acoustic barriers, and fire safety engineering.",
  keywords: [
    "commercial insulation",
    "firestopping",
    "thermal control",
    "Denver",
    "energy efficiency",
    "OSHA compliant",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.variable} ${rajdhani.variable} font-sans bg-surface dark:bg-background-dark text-dark-matter dark:text-slate-100 antialiased overflow-x-hidden transition-colors duration-300`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
