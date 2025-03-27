import Header from "@/components/layout/Header";
import SlideCard from "@/components/slideCard/SlideCard";
import { routesSchema } from "@/routes/routes.schema";
import { Container } from "@chakra-ui/react";

const Home = () => {
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
        {routesSchema.map(
          ({ slide }) =>
            slide.isSlide && (
              <SlideCard
                date={slide.date}
                description={slide.description}
                link={slide.link}
                prevSlide={slide.prevSlide}
                title={slide.title}
                key={slide.link.path}
              />
            )
        )}
      </Container>
    </>
  );
};

export default Home;
