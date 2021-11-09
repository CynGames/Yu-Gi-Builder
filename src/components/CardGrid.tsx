import React, { useEffect, useState, useCallback } from "react";
import { YugiohCard } from "../quickType/YugiCard";
import { Card } from "./Card";
import { Flex } from "@chakra-ui/react";

interface CardGridProps {
  isFromUserDeck: boolean;
  cardsCollection?: YugiohCard[];
}

export const CardGrid = ({
  isFromUserDeck,
  cardsCollection,
}: CardGridProps): JSX.Element => {
  const [cardData, setCardData] = useState<YugiohCard[]>();

  const filterImages = useCallback(() => {
    // const filteredImages = filteredArray.map((card: YugiohCard) => {
    //   return {
    //     id: card.id,
    //     name: card.name,
    //     url: card.card_images[0].image_url,
    //   };
    // });

    const fetchedCard = cardsCollection?.map((card: YugiohCard) => card);

    setCardData(fetchedCard);
  }, [cardsCollection]);

  useEffect(() => {
    filterImages();
  }, [filterImages]);

  const MapCards = (images: YugiohCard[] | undefined) => {
    // return images?.map((img) => <Card key={img.id} {...img} />);
    return images?.map((card) => (
      <Card key={card.id} card={card} isFromUserDeck={isFromUserDeck} />
    ));
  };

  return <Flex wrap="wrap">{MapCards(cardData)}</Flex>;
};
