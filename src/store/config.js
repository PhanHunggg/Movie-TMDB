import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { movixReducer } from "./reducer/movixReducer";
import thunk from "redux-thunk";

export const store = configureStore({
  reducer: {
    movix: movixReducer,
  },
  devTools: true,
  middleware: [thunk],
});
