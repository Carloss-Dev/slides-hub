import Header from "@/components/layout/Header";
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
      ></Container>
    </>
  );
};

export default HouseJSPage;
