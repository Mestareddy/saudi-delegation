export * from "./localStorage";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

//@ts-ignore
export const mergeClassnames = (...className: clsx.ClassValue[]) => {
  return twMerge(clsx(...className));
};

export const fileSizeValidator = (size: number, maxSize?: number) => {
  const fileMaxSize = maxSize || 10
  const isGt2M = size / 1024 / 1024 > fileMaxSize;
  if (isGt2M) {
    return `File must not be more than ${fileMaxSize}MB!`;
  }
  return null;
};