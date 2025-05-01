"use client";
// import { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { useState } from "react";
import CheckoutPanel from "@/components/CheckoutPanel";

import NavBar from "@/components/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "Krusty Krab",
//   description:
//     "Visit the Krusty Krab to get the juiciest burgers in all of Bikini Bottom!",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar setIsCheckoutOpen={setIsCheckoutOpen} />
        {children}
        <CheckoutPanel isOpen={isCheckoutOpen} setOpen={setIsCheckoutOpen} />
      </body>
    </html>
  );
}
