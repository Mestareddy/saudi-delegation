export * from "./localStorage";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

//@ts-ignore
export const mergeClassnames = (...className: clsx.ClassValue[]) => {
  return twMerge(clsx(...className));
};
