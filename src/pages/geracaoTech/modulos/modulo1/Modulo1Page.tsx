import Header from "@/components/layout/Header";
import SlideCard from "@/components/slideCard/SlideCard";
import { modulo1SlideData } from "@/data/geracaoTech/slides.data";
import { Container } from "@chakra-ui/react";

const Modulo1Page = () => {
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
        {modulo1SlideData.map(({ id, ...slide }) => (
          <SlideCard key={id} {...slide} />
        ))}
      </Container>
    </>
  );
};

export default Modulo1Page;
