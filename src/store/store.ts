import { configureStore } from "@reduxjs/toolkit";
import { todosSlice } from "./todoSlice/todosSlice";
import { modalSlice } from "./modalSlice/modalSlice";

export const store = configureStore({
  reducer: {
    [todosSlice.name]: todosSlice.reducer,
    [modalSlice.name]: modalSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
