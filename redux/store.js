import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "./reducers/slice";

export const store = configureStore({
  reducer: {
    posts: postsSlice,
  },
});
