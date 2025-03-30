import { DevWebIntroductionRoom1 } from "@/slides/geracaoTech";
import { IntroducaoHTML } from "@/slides/houseJS";
import type React from "react";

interface ISlideRoutesSchema {
  path: string;
  label?: string;
  element: React.ElementType;
}

export const slideRoutesSchema: ISlideRoutesSchema[] = [
  {
    path: "/house/youtube/introducao-html",
    element: IntroducaoHTML,
  },
  {
    path: "/geracao-tech/modulo-1/aula-introdutoria",
    element: DevWebIntroductionRoom1,
  },
];
