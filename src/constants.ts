export const API_URL = "https://api.openweathermap.org/data/2.5/weather";
export const WEATHER_SEARCH_OPTIONS_URL =
  "https://api.openweathermap.org/geo/1.0/direct";

export const WEATHER_DATA_WEEK_DAYS =
  "https://api.openweathermap.org/data/2.5/forecast";

export const WEATHER_DATA_WEEK_DAY_COUNT = 2;
export const WEATHER_SEARCH_OPTIONS_LIMIT = 5;
export const DEFAULT_CITY = "Bakı";
export const DEFAULT_TIMEOUT_ALERT = 2000;

export const WEATHER_QUERY_KEY = "query";

export const WEATHER_TEMPERATURE_QUERY_KEY = "units";
export const WEATHER_TEMPERATURE_CELSIES = "metric";
export const WEATHER_TEMPERATURE_FAHRENHEIT = "imperial";

export const WEATHER_DATE_TABS_QUERY_KEY = "dt";
export const WEATHER_DATE_TABS_TODAY = 0;
export const WEATHER_DATE_TABS_TOMORROW = 1;

export const dateTabs = [
  {
    id: 1,
    title: "Today",
    value: 0,
  },
  {
    id: 2,
    title: "Tomorrow",
    value: WEATHER_DATE_TABS_TOMORROW,
  },
];

export const RECENT_WEATHER_STORAGE_KEY = "RECENT_WEATHER_DATA";
export const DEFAULT_RECENT_WEATHER_MAX_SIZE = 5;
