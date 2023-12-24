import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../app/config";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IWeatherState } from "../types";

const appid = import.meta.env.VITE_OPEN_WEATHER_API_KEY;

export const getWeatherData = createAsyncThunk(
  "weather/getWeatherData",
  async (query: string, thunkAPI) => {
    try {
      const response = await axiosInstance.get(`?q=${query}&appid=${appid}`);

      return response.data;
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const initialState: IWeatherState = {
  data: undefined,
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    RESET: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getWeatherData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getWeatherData.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = false;
        state.data = payload;
      })
      .addCase(
        getWeatherData.rejected,
        (state, { payload }: PayloadAction<any>) => {
          state.isLoading = false;
          state.isError = true;
          state.message = payload;
        }
      );
  },
});

export const { RESET } = weatherSlice.actions;

export default weatherSlice.reducer;
