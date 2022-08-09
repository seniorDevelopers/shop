import { configureStore } from "@reduxjs/toolkit";
import  changeSlice  from "./endpoints/changeLanguage";

export const store = configureStore({
  reducer: {
    change: changeSlice,
  },
});
