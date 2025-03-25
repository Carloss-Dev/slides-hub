import { HouseJSPage } from "@/pages";
import ApresentationsPage from "@/pages/ApresentationsPage";
import GeracaoTechPage from "@/pages/geracaoTech/GeracaoTechPage";
import { Modulo1Page } from "@/pages/geracaoTech/modulos";

import type React from "react";

export interface IBaseRoutesSchema {
  path: string;
  label?: string;
  element: React.ElementType;
  subroutes?: IBaseRoutesSchema[];
}

export const baseRoutesSchema: IBaseRoutesSchema[] = [
  {
    label: "HouseJS",
    path: "/",
    element: HouseJSPage,
  },
  {
    label: "Geração Tech",
    path: "/geracao-tech",
    element: GeracaoTechPage,
    subroutes: [
      {
        label: "Módulo 1",
        path: "/geracao-tech/modulo-1",
        element: Modulo1Page,
      },
    ],
  },
  {
    label: "Apresentações",
    path: "/apresentacoes",
    element: ApresentationsPage,
  },
];
