import React, { useEffect, useState, useCallback } from "react";
import { YugiohCard, YugiohCards } from "../quickType/YugiCard";
import { Card } from "./Card";
import { Flex } from "@chakra-ui/react";

interface CardData {
  id: string;
  name: string;
  url: string;
}

export const CardGrid = ({ filteredArray }: YugiohCards[] | any) => {
  const [cardData, setCardData] = useState<CardData[]>();

  const filterImages = useCallback(() => {
    const filteredImages = filteredArray.map((card: YugiohCard) => {
      return {
        id: card.id,
        name: card.name,
        url: card.card_images[0].image_url,
      };
    });

    setCardData(filteredImages);
  }, [filteredArray]);

  useEffect(() => {
    filterImages();
  }, [filterImages]);

  const MapCards = (images: CardData[] | undefined): React.ReactNode => {
    return images?.map((img) => <Card key={img.id} {...img} />);
  };

  return <Flex wrap="wrap">{MapCards(cardData)}</Flex>;
};
