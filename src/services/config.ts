"use client";
import {
  getLocalStorageItem,
  removeLocalStorageItem,
  USER_DETAILS,
  USER_SESSION,
} from "@/util";
import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";

const headers = {
  "Content-Type": "application/json",
};

export const apiInstance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_API,
  headers,
});

apiInstance.interceptors.request.use(
  (config) => {
    const token = getLocalStorageItem(USER_SESSION);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

apiInstance.interceptors.response.use(
  ({ data }: AxiosResponse): AxiosResponse<any> => data,
  async (error: AxiosError) => {
    if (error.status === 401 || error?.response?.status === 401) {
      removeLocalStorageItem(USER_DETAILS);
      removeLocalStorageItem(USER_SESSION);
      // Router.replace("/auth/login");
    }
    return Promise.reject(error);
  }
);