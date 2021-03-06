import { Box, Flex, Center } from "@chakra-ui/layout";
import { Spacer } from "@chakra-ui/react";
import { useEffect } from "react";
import { YugiohCard } from "./../state";
import { useTypedSelector } from "./../hooks/useTypedSelector";
import { useActions } from "./../hooks/useActions";
import { UserDeck } from "../../quickType/YugiCard";
import { UserCardGrid } from "./UserCardGrid";

export const UserDeckGrid = (): JSX.Element => {
  const { card } = useTypedSelector((state) => state.card);
  const { deck } = useTypedSelector((state) => state.deck);
  const { isSideDeckingState } = useTypedSelector((state) => state.setting);
  const { updateDeckState } = useActions();

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
    const ExtraDeckTypes = [
      "Fusion Monster",
      "Synchro Monster",
      "Synchro Tuner Monster",
      "XYZ Monster",
      "Link Monster",
    ];

    return ExtraDeckTypes.includes(card.type);
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
        Main Deck ({deck.main.length})
      </Center>
      <Box
        bg="#241B36"
        fontWeight="bold"
        textColor="white"
        alignSelf="center"
        flex="1"
        p="2.5px"
        width="100%"
        minHeight="488.88px"
      >
        <UserCardGrid cardsCollection={deck.main} isSideDeck={false} />
      </Box>
      <Spacer m="5px" />
      <Box
        bg="#241B36"
        fontWeight="bold"
        textColor="white"
        alignSelf="center"
        flex="1"
        p="2.5px"
        width="100%"
        minHeight="122.22px"
      >
        <UserCardGrid cardsCollection={deck.extra} isSideDeck={false} />
      </Box>

      {deck.side.length > 0 && (
        <>
          <Center marginY="5px" textColor="white" fontWeight="bold">
            Side Deck
          </Center>
          <Box
            bg="#241B36"
            fontWeight="bold"
            textColor="white"
            alignSelf="center"
            flex="1"
            p="2.5px"
            width="100%"
            minHeight="122.22px"
          >
            <UserCardGrid cardsCollection={deck.side} isSideDeck={true} />
          </Box>
        </>
      )}
    </Flex>
  );
};
