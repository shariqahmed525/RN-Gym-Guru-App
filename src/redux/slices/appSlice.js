import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    doesShowSlider: true,
  },
  reducers: {
    setDoesShowSlider: (state, action) => {
      state.doesShowSlider = action?.payload;
    },
  },
});

export const { setDoesShowSlider } = appSlice.actions;

export default appSlice.reducer;
