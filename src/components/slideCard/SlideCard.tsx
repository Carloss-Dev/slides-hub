import { Box, Button, Card, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

interface ILinkCard {
  path: string;
  label: string;
}

export interface ISlideCardProps {
  prevSlide: React.ElementType;
  title: string;
  description: string;
  date: string;
  link: ILinkCard;
}

const SlideCard = ({
  prevSlide,
  title,
  description,
  date,
  link,
}: ISlideCardProps) => {
  return (
    <Card.Root maxW="sm" overflow="hidden">
      <Box h="15rem">{React.createElement(prevSlide)}</Box>
      <Card.Body gap="2">
        <Card.Title>{title}</Card.Title>
        <Card.Description>{description}</Card.Description>
        <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
          Data de criação: {date}
        </Text>
      </Card.Body>
      <Card.Footer gap="2">
        <Button
          asChild
          fontWeight="bold"
          bg="cyan.400"
          transitionDuration="moderate"
          _hover={{
            boxShadow: "0 4px 8px rgba(0, 255, 255, 0.3)",
            scale: "1.1",
          }}
        >
          <Link to={link.path}>{link.label}</Link>
        </Button>
      </Card.Footer>
    </Card.Root>
  );
};

export default SlideCard;
