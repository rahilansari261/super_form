"use client";
import { Provider } from "react-redux";
import { store } from "./store";

function SuperProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}

export default SuperProvider;
