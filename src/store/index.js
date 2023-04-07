import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./opros";
import { end } from "./end";

export const store = configureStore({
  reducer: { opros: counterSlice, end: end },
});
