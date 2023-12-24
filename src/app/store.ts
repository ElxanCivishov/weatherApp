import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "../features/weatherSlice";
import alertReducer from "../features/alertSlice";

export const store = configureStore({
  reducer: {
    weatherData: weatherReducer,
    alert: alertReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
