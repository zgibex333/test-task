import {
  PreloadedState,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import { todosSlice } from "./todoSlice/todosSlice";
import { modalSlice } from "./modalSlice/modalSlice";

const rootReducer = combineReducers({
  [todosSlice.name]: todosSlice.reducer,
  [modalSlice.name]: modalSlice.reducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};


export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
