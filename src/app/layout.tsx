import React from "react";
import StyledComponentsRegistry from "@/components/lib/AntdRegistry";
import "./globals.css";
import { bebas, inter, roboto_init } from "./font";
import StoreProvider from "./StoreProvider";
import "swiper/css";
import "swiper/css/pagination";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${bebas.variable} ${inter.variable} circular`}>
        <StoreProvider>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </StoreProvider>
      </body>
    </html>
  );
}
