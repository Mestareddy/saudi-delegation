import React from "react";
import StyledComponentsRegistry from "@/components/lib/AntdRegistry";
import "./globals.css";
import { bebas, roboto_init } from "./font";
import StoreProvider from "./StoreProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto_init.variable} ${bebas.variable}`}>
        <StoreProvider>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </StoreProvider>
      </body>
    </html>
  );
}
