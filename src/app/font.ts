import { Roboto, Bebas_Neue } from "@next/font/google";

export const roboto_init = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
  variable: "--font-roboto",
});

export const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--bebas",
});
