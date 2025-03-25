import { Box, Button, Card, Tag, Text } from "@chakra-ui/react";

import React from "react";
import { Link } from "react-router-dom";

type TTags = "Youtube" | "Html" | "Apresentação";

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
  tags: TTags[];
}

const SlideCard = ({
  prevSlide,
  title,
  description,
  date,
  link,
  tags,
}: ISlideCardProps) => {
  function renderBadgeColor(tagValue: TTags): string {
    let tagColor:
      | "gray"
      | "red"
      | "green"
      | "blue"
      | "teal"
      | "pink"
      | "purple"
      | "cyan"
      | "orange"
      | "yellow" = "gray";

    switch (tagValue) {
      case "Youtube":
        tagColor = "red";
        return tagColor;
      case "Html":
        tagColor = "orange";
        return tagColor;
      case "Apresentação":
        tagColor = "green";
        return tagColor;

      default:
        return tagColor;
    }
  }

  return (
    <Card.Root maxW="sm" overflow="hidden" boxShadow="md" borderRadius="lg">
      <Box h="15rem">{React.createElement(prevSlide)}</Box>
      <Card.Body gap="2">
        <Card.Title fontSize="lg" fontWeight="bold">
          {title}
        </Card.Title>
        <Card.Description fontSize="sm">{description}</Card.Description>

        <Text fontSize="sm" fontWeight="medium" mt="2" color="gray.500">
          Data: {date}
        </Text>

        {/* Exibindo a badge */}

        <Box display="flex" gap="2" flexWrap="wrap">
          {tags.map((tag) => (
            <Tag.Root
              key={tag}
              colorScheme="teal"
              size="sm"
              mt="2"
              w="fit-content"
              colorPalette={renderBadgeColor(tag)}
            >
              <Tag.Label p="1"> {tag}</Tag.Label>
            </Tag.Root>
          ))}
        </Box>
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
