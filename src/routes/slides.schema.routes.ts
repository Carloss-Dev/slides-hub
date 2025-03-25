import JQueryApresentationSlide from "@/slides/apresentacoes/jquery";
import { DevWebIntroductionRoom1 } from "@/slides/geracaoTech";
import type React from "react";

interface ISlideRoutesSchema {
  path: string;
  label?: string;
  element: React.ElementType;
}

export const slideRoutesSchema: ISlideRoutesSchema[] = [
  {
    path: "/geracao-tech/modulo-1/aula-introdutoria",
    element: DevWebIntroductionRoom1,
  },
  {
    path: "/apresentacoes/jquery",
    element: JQueryApresentationSlide,
  },
];
