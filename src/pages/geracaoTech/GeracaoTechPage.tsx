import Header from "@/components/layout/Header";
import SlideCard, {
  type ISlideCardProps,
} from "@/components/slideCard/SlideCard";
import { Container } from "@chakra-ui/react";
import { Modulo1Apresentation } from "./modulos";

interface IModulos extends ISlideCardProps {
  id: string;
}

const GeracaoTechPage = () => {
  const modulos: IModulos[] = [
    {
      id: "modulo#001",
      prevSlide: Modulo1Apresentation,
      title: "Módulo 1",
      description: "Módulo 1 do curso geração tech",
      date: "30/03/2025",
      link: {
        path: "/geracao-tech/modulo-1",
        label: "Ir para o módulo",
      },
      tags: ["Html"],
    },
  ];

  return (
    <>
      <Header />
      <Container
        as="main"
        paddingTop="5"
        display="flex"
        justifyContent="space-around"
        flexWrap="wrap"
        gap="3"
        margin="0"
        maxW="100vw"
      >
        {modulos.map(({ id, ...slide }) => (
          <SlideCard key={id} {...slide} />
        ))}
      </Container>
    </>
  );
};

export default GeracaoTechPage;
