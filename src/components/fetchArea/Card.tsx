import React from "react";
import { Image } from "@chakra-ui/image";
import { useActions } from "../hooks/useActions";
import { YugiohCard } from "../../quickType/YugiCard";

interface CardProps {
  card: YugiohCard;
}

export const Card = ({ card }: CardProps): JSX.Element => {
  const { cardClickEvent, cardResetEvent } = useActions();

  const { card_images } = card;

  const onClickHandler = async (e: React.SyntheticEvent) => {
    await cardClickEvent(card);

    await cardResetEvent();
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
