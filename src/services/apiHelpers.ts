"use client"
import axios, { AxiosResponse } from "axios";
import { apiInstance } from "./config";

export type apiRequestorArgs<T = object> = {
  data: T;
  type?: "post" | "put" | "patch"|"delete";
};

export type TAxiosResponseData<T> = AxiosResponse<T>;

export const apiErrorHandler = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    if (error.response) {
      return error.response.data.message;
    } else {
      return error.message;
    }
  }
  if (error instanceof Error) {
    return error.message;
  }
};

export const apiFetcher = async (url: string) => {
  return await apiInstance.get(url);
};

export const apiRequester = async (
  url: string,
  { arg }: { arg: apiRequestorArgs }
) => {
  return await apiInstance[arg?.type || "post"](url, arg.data);
};
