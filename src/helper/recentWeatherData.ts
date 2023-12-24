import {
  RECENT_WEATHER_MAX_SIZE,
  RECENT_WEATHER_STORAGE_KEY,
} from "../constants";

import { IWeatherData } from "../types";

import { getStorageItem } from "./getLocalStorage";
import { setStorageItem } from "./setLocalStorage";

export const recentWeatherData = (
  weatherData: IWeatherData,
  maxSize: number = RECENT_WEATHER_MAX_SIZE
): void => {
  const recentWeatherData: IWeatherData[] = getStorageItem({
    key: RECENT_WEATHER_STORAGE_KEY,
    value: [],
  });

  console.log("recent", weatherData);

  const updatedData: IWeatherData[] = Array.isArray(recentWeatherData)
    ? [...recentWeatherData.slice(1, maxSize), weatherData]
    : [weatherData];

  setStorageItem({
    key: RECENT_WEATHER_STORAGE_KEY,
    value: updatedData,
  });
};
