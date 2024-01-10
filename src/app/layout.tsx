import React from "react";
import StyledComponentsRegistry from "@/components/lib/AntdRegistry";
import "./globals.css";
import { bebas, roboto_init } from "./font";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto_init.variable} ${bebas.variable}`}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
