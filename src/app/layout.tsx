import React from "react";
import { Bebas_Neue } from "next/font/google";
import StyledComponentsRegistry from "@/components/lib/AntdRegistry";
import "./globals.css";

const bebasNeue = Bebas_Neue({ subsets: ["latin-ext"], weight: '400' });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={bebasNeue.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
