"use client";
import React from "react";
import StoreProvider from "@/state/redux";

const Providers = ({ children }: { children: React.ReactElement }) => {
  return <StoreProvider>{children}</StoreProvider>;
};

export default Providers;
