import type { ISlideCardProps } from "@/components/slideCard/SlideCard";
import { IntroducaoHTML } from "@/slides/houseJS";

interface ISlideData extends ISlideCardProps {
  id: string;
}

export const slideData: ISlideData[] = [
  {
    id: "#001",
    prevSlide: IntroducaoHTML,
    title: "Introdução ao HTML",
    description:
      "Leve introdução ao HTML, explicando um pouco sobre sua importância para o desenvolvimento web e os seus conceitos iniciais.",
    date: "27/03/2025",
    link: {
      label: "Ir para o slide",
      path: "/house/youtube/introducao-html",
    },
    badge: "Youtube",
  },
];
