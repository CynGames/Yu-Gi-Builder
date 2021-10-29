import React, { useEffect, useState, useCallback } from "react";
import { Datum, YugiCard } from "../quickType/YugiCard";
import { Card } from "./Card";
import { Flex } from "@chakra-ui/react";

interface Images {
  id: string;
  url: string;
}

export const CardGrid = ({ filteredArray }: YugiCard[] | any) => {
  const [images, setImages] = useState<Images[]>();

  const filterImages = useCallback(() => {
    const filteredImages = filteredArray.map((card: Datum) => {
      return {
        id: card.id,
        url: card.card_images[0].image_url,
      };
    });

    setImages(filteredImages);
  }, [filteredArray]);

  useEffect(() => {
    filterImages();
  }, [filterImages]);

  const MapCards = (images: Images[] | undefined): React.ReactNode => {
    return images?.map((img) => <Card key={img.id} {...img} />);
  };

  return <Flex wrap="wrap">{MapCards(images)}</Flex>;
};
