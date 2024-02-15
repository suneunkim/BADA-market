import type { Metadata } from "next";
import "./globals.css";
import MobileNav from "@/components/Layout/MobileNav";
import DeskTopNav from "@/components/Layout/DeskTopNav";
import Script from "next/script";

export const metadata: Metadata = {
  title: "바다 마켓",
  description: "BADA market",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="py-14">
        <div className="sm:hidden">
          <MobileNav />
        </div>
        <div className="hidden sm:block">
          <DeskTopNav />
        </div>
        {children}
        <Script src="//dapi.kakao.com/v2/maps/sdk.js?appkey=32f4814aa6026e7f34c0153feba1e081&libraries=services,clusterer&autoload=false"></Script>
      </body>
    </html>
  );
}
