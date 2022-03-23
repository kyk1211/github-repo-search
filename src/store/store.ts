import { configureStore } from "@reduxjs/toolkit";
import toastSlice from "./toastSlice";

const store = configureStore({
  reducer: {
    toast: toastSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
