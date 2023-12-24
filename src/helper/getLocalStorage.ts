import { IStorageOptions } from "../types";

export const getStorageItem = <T>({ key, value }: IStorageOptions<T>): T => {
  try {
    const storedData = localStorage.getItem(key);
    return storedData ? JSON.parse(storedData) : value;
  } catch (error) {
    console.error(
      `Error while getting data from localStorage (${key}):`,
      error
    );
    return value;
  }
};
