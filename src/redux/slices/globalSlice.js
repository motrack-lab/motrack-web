import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDarkMode: false,
  isLoading: false,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { toggleDarkMode, setLoading } = globalSlice.actions;

export default globalSlice.reducer;
