
"use client";

import React, { useRef } from "react";
import { Provider } from "react-redux";
import winkel from "@/redux/winkel";

export default function Providers({ children }) {
  const storeRef = useRef();
  if (!storeRef.current) {
    storeRef.current = winkel;
  }
  return <Provider store={storeRef.current}>{children}</Provider>;
}
