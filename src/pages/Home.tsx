import Header from "@/components/layout/Header";
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
      ></Container>
    </>
  );
};

export default Home;
