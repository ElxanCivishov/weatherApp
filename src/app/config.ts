import axios from "axios";
import { API_URL } from "../constants";

export const axiosInstance = axios.create({
  baseURL: API_URL,
  // withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});
