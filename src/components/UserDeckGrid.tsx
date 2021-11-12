import { Box, Flex, Center } from "@chakra-ui/layout";
import { CardGrid } from "./CardGrid";
import { Spacer } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { YugiohCard } from "./state";
import { useTypedSelector } from "./hooks/useTypedSelector";
import { useActions } from "./hooks/useActions";
import { UserDeck } from "../quickType/YugiCard";
import { UserCardGrid } from "./UserCardGrid";

// interface UserDeckGridProps {
//   userDeck: UserDeck;
// }

// const initialState = {
//   main: [],
//   extra: [],
//   side: []
// }

export const UserDeckGrid = (): JSX.Element => {
  const { updateDeckState } = useActions();
  const { card } = useTypedSelector((state) => state.card);
  const { deck, shouldUpdate } = useTypedSelector((state) => state.deck);
  const { isSideDeckingState } = useTypedSelector((state) => state.setting);

  // Sacar side o main disparando una action que altere el state.menu.

  // Cambiar el if del effect a un trigger.
  // Actualizar el clickEvent para que puedas pasarle la opcion de hacer un trigger (de undefined a true.)

  useEffect(() => {
    // Setup inicial para cargar la data del localstorage al store.
    // Luego, shouldUpdate deberia de cargar el store al local
  }, []);

  useEffect(() => {
    if (card) {
      const chosenDeck = getChosenDeck(card);
      const isDeckFull = isChosenDeckFull(chosenDeck);
      const cardMaxAmount = getCardMaxAmount(card);
      const cardPresentAmount = getCardPresentAmount(card, chosenDeck);

      if (cardMaxAmount > cardPresentAmount && !isDeckFull) {
        updateDeckState(setCardInDeck(card));
      }
    }
  }, [card]);

  const getChosenDeck = (card: YugiohCard): YugiohCard[] => {
    if (isSideDeckingState) return deck.side;
    if (isExtraDeckType(card)) return deck.extra;
    return deck.main;
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

  const isChosenDeckFull = (deckArg: YugiohCard[]): boolean => {
    return deckArg == deck.main ? deckArg.length == 60 : deckArg.length == 15;
  };

  const getCardMaxAmount = (card: YugiohCard): number => {
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

  const getCardPresentAmount = (card: YugiohCard, deck: YugiohCard[]) => {
    let currentAmountInDeck: number = 0;

    deck.forEach((cardFromDeck) => {
      if (cardFromDeck.name === card.name) currentAmountInDeck++;
    });

    return currentAmountInDeck;
  };

  const setCardInDeck = (card: YugiohCard): UserDeck => {
    if (isSideDeckingState)
      return { main: deck.main, extra: deck.extra, side: [...deck.side, card] };
    else if (isExtraDeckType(card))
      return { main: deck.main, extra: [...deck.extra, card], side: deck.side };
    else
      return { main: [...deck.main, card], extra: deck.extra, side: deck.side };
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
        <UserCardGrid cardsCollection={deck.main} isSideDeck={false} />
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
        <UserCardGrid cardsCollection={deck.extra} isSideDeck={false} />
      </Box>

      {deck.side.length > 0 && (
        <>
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
            <UserCardGrid cardsCollection={deck.side} isSideDeck={true} />
          </Box>
        </>
      )}
    </Flex>
  );
};
