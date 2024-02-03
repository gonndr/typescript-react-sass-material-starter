import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";
import apiMiddleware from "./utils/apiMiddleware";

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    apiMiddleware,
  ],
});

export default store;
