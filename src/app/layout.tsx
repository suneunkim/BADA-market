import type { Metadata } from "next";
import "./globals.css";
import MobileNav from "@/components/Layout/MobileNav";
import DeskTopNav from "@/components/Layout/DeskTopNav";
import getCurrentUser from "./actions/getCurrentUser";

export const metadata: Metadata = {
  title: "바다 마켓",
  description: "BADA market",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className="py-14">
        <div className="sm:hidden">
          <MobileNav />
        </div>
        <div className="hidden sm:block">
          <DeskTopNav currentUser={currentUser} />
        </div>
        {children}
      </body>
    </html>
  );
}
