import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";
import { useDispatch } from "react-redux";

const store = configureStore({
  reducer,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();

export default store;
