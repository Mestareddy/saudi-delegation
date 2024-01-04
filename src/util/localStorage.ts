"use client";

export const USER_SESSION = "user_session";

export const USER_DETAILS = "user_details";

export const setLocalStorageItem = <T>(key: string, data: T): void => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, JSON.stringify(data));
  }
};

export const getLocalStorageItem = <T>(key: string): T | null => {
  if (typeof window !== 'undefined') {
  const storedItem = localStorage.getItem(key);
  return storedItem ? JSON?.parse(storedItem) : null;
  }
  return null
};

export const removeLocalStorageItem = (key: string): void => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(key);
  }
};

export const clearLocalStorage = (): void => {
  if (typeof window !== "undefined") {
    localStorage.clear();
  }
};
