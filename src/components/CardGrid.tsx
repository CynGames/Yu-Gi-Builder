import React, { useEffect, useState, useCallback } from "react";
import { YugiohCard } from "../quickType/YugiCard";
import { Card } from "./Card";
import { Flex } from "@chakra-ui/react";
import { useTypedSelector } from "./hooks/useTypedSelector";

export const CardGrid = (): JSX.Element => {
  const [cardData, setCardData] = useState<YugiohCard[]>();
  const { cards } = useTypedSelector((state) => state.fetch);

  const filterImages = () => {
    const fetchedCard = cards.data.map((card: YugiohCard) => card);
    setCardData(fetchedCard);
  };

  useEffect(() => {
    if (cards) filterImages();
  }, [cards]);

  const MapCards = (images: YugiohCard[] | undefined) => {
    // return images?.map((img) => <Card key={img.id} {...img} />);
    return images?.map((card, i) => <Card key={i} card={card} />);
  };

  return <Flex wrap="wrap">{MapCards(cardData)}</Flex>;
};
