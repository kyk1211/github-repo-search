import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Toast[] = [];

const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    addToast: (state, action: PayloadAction<Toast>) => {
      state.push(action.payload);
    },
    deleteToast: (state) => {
      state.shift();
    },
  },
});

export const { addToast, deleteToast } = toastSlice.actions;

export default toastSlice;
