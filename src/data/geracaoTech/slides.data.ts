import type { ISlideCardProps } from "@/components/slideCard/SlideCard";
import { DevWebIntroductionRoom1 } from "@/slides/geracaoTech";

interface ISlideData extends ISlideCardProps {
  id: string;
}

export const modulo1SlideData: ISlideData[] = [
  {
    id: "modulo1-#001",
    prevSlide: DevWebIntroductionRoom1,
    title: "Aula Introdutória",
    description:
      "Aula introdutória, essa aula é utilizada para apresentar a turma e para apresentar o curso e seu funcionamento",
    date: "27/03/2025",
    link: {
      label: "Ir para o slide",
      path: "/geracao-tech/modulo-1/aula-introdutoria",
    },
    tags: [],
  },
];
