import { Flex } from "@chakra-ui/layout";
import { UserCard } from "./UserCard";
import { YugiohCard } from "../state";

interface UserCardGridProps {
  cardsCollection?: YugiohCard[];
  isSideDeck: boolean;
}

export const UserCardGrid = ({
  cardsCollection,
  isSideDeck,
}: UserCardGridProps) => {
  const MapCards = (cards: YugiohCard[] | undefined) => {
    return cards?.map((card, i) => (
      <UserCard key={i} indexID={i} card={card} isSideDeck={isSideDeck} />
    ));
  };

  return <Flex wrap="wrap">{MapCards(cardsCollection)}</Flex>;
};
