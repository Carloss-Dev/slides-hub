import Header from "@/components/layout/Header";
import SlideCard from "@/components/slideCard/SlideCard";
import { slideData } from "@/data/houseJS/slides.data";
import { Container } from "@chakra-ui/react";

const HouseJSPage = () => {
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
        {slideData.map(({ id, ...slide }) => (
          <SlideCard key={id} {...slide} />
        ))}
      </Container>
    </>
  );
};

export default HouseJSPage;
