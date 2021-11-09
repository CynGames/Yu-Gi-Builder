import { Box, Flex, Center } from "@chakra-ui/layout";
import { CardGrid } from "./CardGrid";
import { Spacer } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { YugiohCard } from "./state";
import { useTypedSelector } from "./hooks/useTypedSelector";
import { useActions } from "./hooks/useActions";

// interface UserDeckGridProps {
//   userDeck: UserDeck;
// }

// const initialState = {
//   main: [],
//   extra: [],
//   side: []
// }

export const UserDeckGrid = (): JSX.Element => {
  const [mainDeck, setInMainDeck] = useState<YugiohCard[]>([]);
  const [extraDeck, setInExtraDeck] = useState<YugiohCard[]>([]);
  const [sideDeck, setInSideDeck] = useState<YugiohCard[]>([]);

  const { updateDeckState } = useActions();
  const { card } = useTypedSelector((state) => state.card);
  // const { deck } = useTypedSelector((state) => state.deck);

  // Sacar side o main disparando una action que altere el state.menu.

  // Cambiar el if del effect a un trigger.
  // Actualizar el clickEvent para que puedas pasarle la opcion de hacer un trigger (de undefined a true.)

  useEffect(() => {
    if (card) {
      const deck = getChosenDeck(card);

      const isDeckFull = isChosenDeckFull(deck);

      const cardMaxAmount = getMaxAmount(card);

      const cardAmountPresentInDeck = cardAmountPresentInChosenDeck(card, deck);

      if (cardAmountPresentInDeck < cardMaxAmount && !isDeckFull)
        setCardInChosenDeck(card);
    }

    updateDeckState({ main: mainDeck, extra: extraDeck, side: sideDeck });
  }, [card]);

  const setCardInChosenDeck = (card: YugiohCard) => {
    if (isSideDeckSelected()) setInSideDeck([...sideDeck, card]);

    if (isExtraDeckType(card)) setInExtraDeck([...extraDeck, card]);
    else setInMainDeck([...mainDeck, card]);
  };

  const getChosenDeck = (card: YugiohCard): YugiohCard[] => {
    if (isSideDeckSelected()) return sideDeck;
    if (isExtraDeckType(card)) return extraDeck;
    return mainDeck;
  };

  const isSideDeckSelected = (): boolean => {
    return false;
  };

  const isChosenDeckFull = (deck: YugiohCard[]): boolean => {
    return deck != mainDeck ? deck.length == 15 : deck.length == 60;
  };

  const isExtraDeckType = (card: YugiohCard): boolean => {
    // Probar englobarlo en parentesis
    switch (card.type) {
      case "Fusion Monster":
        return true;
      case "Synchro Monster":
        return true;
      case "XYZ Monster":
        return true;
      case "Link Monster":
        return true;

      default:
        return false;
    }
  };

  const cardAmountPresentInChosenDeck = (
    card: YugiohCard,
    deck: YugiohCard[]
  ) => {
    let currentAmountInDeck: number = 0;

    deck.forEach((cardFromDeck) => {
      if (cardFromDeck.name === card.name) currentAmountInDeck++;
    });

    return currentAmountInDeck;
  };

  const getMaxAmount = (card: YugiohCard): number => {
    if (card.banlist_info === undefined) return 3;

    let limitedCardMaxAmount: string = card.banlist_info.ban_tcg;

    switch (limitedCardMaxAmount) {
      case "Semi-Limited":
        return 2;

      case "Limited":
        return 1;

      default:
        return 0;
    }
  };

  return (
    <Flex width="100%" flexDir="column">
      <Center marginY="5px" textColor="white" fontWeight="bold">
        Main Deck
      </Center>
      <Box
        bg="black"
        fontWeight="bold"
        textColor="white"
        alignSelf="center"
        flex="1"
        p="2.5px"
      >
        <CardGrid cardsCollection={mainDeck} isFromUserDeck={true} />
      </Box>
      <Spacer m="5px" />
      <Box
        bg="black"
        fontWeight="bold"
        textColor="white"
        alignSelf="center"
        flex="1"
        p="2.5px"
      >
        <CardGrid cardsCollection={extraDeck} isFromUserDeck={true} />
      </Box>

      <Center marginY="5px" textColor="white" fontWeight="bold">
        Side Deck
      </Center>
      <Box
        bg="black"
        fontWeight="bold"
        textColor="white"
        alignSelf="center"
        flex="1"
        p="2.5px"
      >
        <CardGrid cardsCollection={sideDeck} isFromUserDeck={true} />
      </Box>
    </Flex>
  );
};
