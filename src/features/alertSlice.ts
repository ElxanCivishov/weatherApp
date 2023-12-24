import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAlertState } from "../types";

const initialState: IAlertState = {
  message: "",
};

export const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    setAlert: (state, { payload }: PayloadAction<string>) => {
      state.message = payload;
    },
    resetAlert: (state) => {
      state.message = "";
    },
  },
});

export const { setAlert, resetAlert } = alertSlice.actions;

export default alertSlice.reducer;
