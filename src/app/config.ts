import axios from "axios";

const API_URL = `https://api.openweathermap.org/data/2.5/weather`;

export const axiosInstance = axios.create({
  baseURL: API_URL,
  // withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});
