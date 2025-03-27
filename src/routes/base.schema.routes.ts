import { HouseJSPage } from "@/pages";

import type React from "react";

interface IBaseRoutesSchema {
  path: string;
  label?: string;
  element: React.ElementType;
}

export const baseRoutesSchema: IBaseRoutesSchema[] = [
  {
    label: "HouseJS",
    path: "/",
    element: HouseJSPage,
  },
];
