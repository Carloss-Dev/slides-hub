import { ISlideCardProps } from "@/components/slideCard/SlideCard";
import Home from "@/pages/Home";
import Teste from "@/pages/Teste";
import React from "react";

interface ISlideCardBase {
  isSlide: boolean;
}

interface ISlideCardWithSlide extends ISlideCardBase, ISlideCardProps {
  isSlide: true;
}

interface ISlideCardWithoutSlide extends ISlideCardBase {
  isSlide: false;
}

type ISlideCardSchema = ISlideCardWithSlide | ISlideCardWithoutSlide;

interface IRoutesSchema {
  path: string;
  label?: string;
  element: React.ElementType;
  slide: ISlideCardSchema;
}

export const routesSchema: IRoutesSchema[] = [
  {
    label: "Home",
    path: "/",
    element: Home,
    slide: {
      isSlide: false,
    },
  },
  {
    path: "/teste",
    element: Teste,
    slide: {
      isSlide: true,
      date: "27/03/2025",
      description: "Slide teste",
      link: {
        label: "Teste",
        path: "/teste",
      },
      prevSlide: Teste,
      title: "Titulo teste",
    },
  },
];
