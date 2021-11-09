import React from "react";
import { Image } from "@chakra-ui/image";
import { useActions } from "./hooks/useActions";
import { YugiohCard } from "../quickType/YugiCard";
import { useTypedSelector } from "./hooks/useTypedSelector";
import { useEffect } from "react";

interface CardProps {
  card: YugiohCard;
  isFromUserDeck: boolean;
}

export const Card = ({ card, isFromUserDeck }: CardProps): JSX.Element => {
  const { cardClickEvent, cardResetEvent } = useActions();
  const { card_images } = card;

  const onClickHandler = async (e: React.SyntheticEvent) => {
    console.log("Card Added");
    await cardClickEvent(card);

    await cardResetEvent();
  };

  const onClickRemover = async (e: React.SyntheticEvent) => {
    console.log("Card Removed");
  };

  return (
    <Image
      width="25%"
      padding="1.5px"
      src={card_images[0].image_url}
      onClick={isFromUserDeck ? onClickRemover : onClickHandler}
    />
  );
};
