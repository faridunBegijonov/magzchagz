import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  message: string[];
}

const initialState: CounterState = {
  message: [],
};

export const end = createSlice({
  name: "message",
  initialState,
  reducers: {
    add: (state, action) => {
      state.message.push(action.payload);
    },
  },
});

export const { add } = end.actions;

export default end.reducer;
