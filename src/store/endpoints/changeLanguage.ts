import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  changeLanguage: true,
};

export const changeSlice = createSlice({
  name: "change",
  initialState,
  reducers: {
    setChangeLanguage: (state, action) => {
      state.changeLanguage = action.payload;
    },
  },
});

export const { setChangeLanguage } = changeSlice.actions;

export default changeSlice.reducer;
