export * from "./localStorage";
import clsx from "clsx";
import * as XLSX from "xlsx";
import FileSaver from "file-saver";
import { twMerge } from "tailwind-merge";

//@ts-ignore
export const mergeClassnames = (...className: clsx.ClassValue[]) => {
  return twMerge(clsx(...className));
};

export const fileSizeValidator = (size: number, maxSize?: number) => {
  const fileMaxSize = maxSize || 2
  const isGt2M = size / 1024 / 1024 > fileMaxSize;
  if (isGt2M) {
    return `File must not be more than ${fileMaxSize}MB!`;
  }
  return null;
};


export const exportToExcel = (exportData: any, title?: string) => {
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";
  const ws = XLSX?.utils?.json_to_sheet(exportData);
  const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
  const excelBuffer = XLSX?.write(wb, { bookType: "xlsx", type: "array" });
  const data = new Blob([excelBuffer], { type: fileType });
  FileSaver?.saveAs(data, (title ? title : "exported_data") + fileExtension);
};
