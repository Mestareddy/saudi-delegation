import React from "react";
import { Manrope } from "next/font/google";
import StyledComponentsRegistry from "@/components/lib/AntdRegistry";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
