import { Container } from "@chakra-ui/react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <Container
      as="header"
      border="1pt solid #27272a"
      padding="4"
      display="flex"
      justifyContent="flex-end"
      position="sticky"
      top="0"
      zIndex="docked"
      bg="gray.900"
    >
      <Navbar />
    </Container>
  );
};

export default Header;
