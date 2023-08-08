import { configureStore } from "@reduxjs/toolkit";
import questionSlice from "./reducers/slice";

export const store = configureStore({
  reducer: {
    questions: questionSlice,
  },
});
