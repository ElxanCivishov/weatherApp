export const DEFAULT_CITY = "Bakı";
export const DEFAULT_TIMEOUT_ALERT = 2000;

// recent Weather
export const RECENT_WEATHER_STORAGE_KEY = "RECENT_WEATHER_DATA";
export const RECENT_WEATHER_MAX_SIZE = 5;

//weather temperature
export const WEATHER_TEMPERATURE_QUERY_KEY = "units";
export const WEATHER_TEMPERATURE_CELSIES = "metric";
export const WEATHER_TEMPERATURE_FAHRENHEIT = "imperial";

// date tabs
export const WEATHER_DATE_TABS_QUERY_KEY = "dt";
export const WEATHER_DATE_TABS_TOMORROW_VALUE_PLUS_TODAY = 1;

export const dateTabs = [
  {
    id: 1,
    title: "Today",
    value: "",
  },
  {
    id: 2,
    title: "Tomorrow",
    value: WEATHER_DATE_TABS_TOMORROW_VALUE_PLUS_TODAY,
  },
];
