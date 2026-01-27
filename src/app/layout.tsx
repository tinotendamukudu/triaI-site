import type { Metadata } from "next";
import { Poppins, Geist_Mono } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NMB Bank | Excellence Personified",
  description: "Secure, reliable and convenient banking solutions for Personal, Business and Corporate clients. Experience excellence with NMB Bank.",
  icons: {
    icon: '/favicon.ico', // Assuming there might be one, or falls back closely
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${geistMono.variable} font-sans antialiased bg-gray-50`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
