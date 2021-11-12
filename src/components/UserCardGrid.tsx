import React from "react";
import { Flex } from "@chakra-ui/layout";
import { YugiohCard } from "./state";
import { UserCard } from "./UserCard";

interface UserCardGridProps {
  cardsCollection?: YugiohCard[];
  isSideDeck: boolean;
}

export const UserCardGrid = ({
  cardsCollection,
  isSideDeck,
}: UserCardGridProps) => {
  const MapCards = (images: YugiohCard[] | undefined) => {
    return images?.map((card, i) => (
      <UserCard key={i} indexID={i} card={card} isSideDeck={isSideDeck} />
    ));
  };

  return <Flex wrap="wrap">{MapCards(cardsCollection)}</Flex>;
};
