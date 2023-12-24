import axios from "axios";
import { API_URL, WEATHER_DATA_WEEK_DAYS } from "../constants";

export const axiosInstance = axios.create({
  baseURL: API_URL,
  // withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export const axiosInstanceForWeekDays = axios.create({
  baseURL: WEATHER_DATA_WEEK_DAYS,
  // withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});
