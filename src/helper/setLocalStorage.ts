import { IStorageOptions } from "../types";

export const setStorageItem = <T>({ key, value }: IStorageOptions<T>): void => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Error while setting data to localStorage (${key}):`, error);
  }
};
