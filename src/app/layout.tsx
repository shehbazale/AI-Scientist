import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HeaderTop from "@/components/HeaderTop";
import HeaderMain from "@/components/HeaderMain";
import HeroSection from "@/components/HeroSection";
import Curriculum from "@/components/Curriculum";
import Courses from "@/components/Courses";
import Offer from "@/components/Offer";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Scientist",
  description: "AI Scientist by Robx AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderTop />
        <HeaderMain />
        <HeroSection />
        <Curriculum />
        <Courses />
        <Offer />
        <Footer />
        {children}
      </body>
    </html>
  );
}
