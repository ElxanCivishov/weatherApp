import {
  DEFAULT_RECENT_WEATHER_MAX_SIZE,
  RECENT_WEATHER_STORAGE_KEY,
} from "../constants";
import { IWeatherData } from "../types";
import { getStorageItem } from "./getLocalStorage";
import { setStorageItem } from "./setLocalStorage";

export const getAndSetRecentWeatherData = (
  weatherData: IWeatherData,
  maxSize: number = DEFAULT_RECENT_WEATHER_MAX_SIZE
): void => {
  const recentWeatherData: IWeatherData[] = getStorageItem<IWeatherData[]>({
    key: RECENT_WEATHER_STORAGE_KEY,
    value: [],
  });

  const updatedData: IWeatherData[] = [...recentWeatherData, weatherData].slice(
    -maxSize
  );

  setStorageItem({
    key: RECENT_WEATHER_STORAGE_KEY,
    value: updatedData,
  });
};
