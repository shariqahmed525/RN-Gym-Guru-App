import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: null,
    iosSyncUniqueId: "",
  },
  reducers: {
    clearUser: (state) => {
      state.userData = null;
    },
    setUser: (state, action) => {
      state.userData = action.payload;
    },
    setIosSyncUniqueId: (state, action) => {
      state.iosSyncUniqueId = action.payload;
    },
  },
});

export const { setUser, clearUser, setIosSyncUniqueId } = userSlice.actions;

export default userSlice.reducer;
