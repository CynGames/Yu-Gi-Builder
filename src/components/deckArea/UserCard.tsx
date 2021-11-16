import React from "react";
import { Image } from "@chakra-ui/image";
import { useActions } from "../hooks/useActions";
import { YugiohCard } from "../../quickType/YugiCard";
import { useTypedSelector } from "../hooks/useTypedSelector";

interface UserCardProps {
  card: YugiohCard;
  indexID: number;
  isSideDeck: boolean;
}

export const UserCard = ({
  card,
  indexID,
  isSideDeck,
}: UserCardProps): JSX.Element => {
  const { deck } = useTypedSelector((state) => state.deck);
  const { removeCardFromDeck } = useActions();
  const { card_images } = card;

  const onClickHandler = async (e: React.SyntheticEvent) => {
    await removeCardFromDeck(deck, card, indexID, isSideDeck);
  };

  return (
    <Image
      width="25%"
      padding="1.5px"
      src={card_images[0].image_url}
      onClick={onClickHandler}
    />
  );
};
