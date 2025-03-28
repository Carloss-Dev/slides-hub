import { Box, Button, Card, Tag, Text } from "@chakra-ui/react";

import React from "react";
import { Link } from "react-router-dom";

type TBadges = "Youtube";

type TBadgesColors = "gra";
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
  badge: TBadges;
}

const SlideCard = ({
  prevSlide,
  title,
  description,
  date,
  link,
  badge,
}: ISlideCardProps) => {
  function renderBadgeColor(badgeValue: TBadges): string {
    let badgeColor:
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

    switch (badgeValue) {
      case "Youtube":
        badgeColor = "red";
        return badgeColor;
      default:
        return badgeColor;
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
        <Tag.Root
          colorScheme="teal"
          size="sm"
          mt="2"
          w="fit-content"
          colorPalette={renderBadgeColor(badge)}
        >
          <Tag.Label p="1"> {badge}</Tag.Label>
        </Tag.Root>
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
