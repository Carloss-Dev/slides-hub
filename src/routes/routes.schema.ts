import Home from "@/pages/Home";
import Teste from "@/pages/Teste";
import React from "react";

interface IRoutesSchema {
  path: string;
  label: string;
  element: React.ElementType;
  slide: boolean;
}

export const routesSchema: IRoutesSchema[] = [
  {
    label: "Home",
    path: "/",
    element: Home,
    slide: false,
  },
];
