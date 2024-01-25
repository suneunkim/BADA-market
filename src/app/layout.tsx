"use client";
import type { Metadata } from "next";
import "./globals.css";
import MobileNav from "@/components/Layout/MobileNav";
import DeskTopNav from "@/components/Layout/DeskTopNav";
import { SessionProvider } from "next-auth/react";

// export const metadata: Metadata = {
//   title: "바다 마켓",
//   description: "BADA market",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="py-14">
        <SessionProvider>
          <div className="sm:hidden">
            <MobileNav />
          </div>
          <div className="hidden sm:block">
            <DeskTopNav />
          </div>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
