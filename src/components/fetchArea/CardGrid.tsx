import { useEffect, useState } from "react";
import { Card } from "./Card";
import { Flex } from "@chakra-ui/react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { YugiohCard } from "../state";

export const CardGrid = (): JSX.Element => {
  const { cards } = useTypedSelector((state) => state.fetch);

  const [cardData, setCardData] = useState<YugiohCard[]>();

  const filterImages = () => {
    const fetchedCard = cards.data.map((card: YugiohCard) => card);
    setCardData(fetchedCard);
  };

  useEffect(() => {
    if (cards) filterImages();
  }, [cards]);

  const MapCards = (images: YugiohCard[] | undefined) => {
    return images?.map((card, i) => <Card key={i} card={card} />);
  };

  return <Flex wrap="wrap">{MapCards(cardData)}</Flex>;
};
