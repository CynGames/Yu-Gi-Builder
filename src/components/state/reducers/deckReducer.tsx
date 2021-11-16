import { DeckEventAction, UserDeck, YugiohCard } from "..";
import { DeckActionType } from "../action-types/index";

interface DeckState {
  error: unknown;
  deck: UserDeck;
}

const initialState = {
  error: null,
  deck: {
    main: [],
    extra: [],
    side: [],
  },
};

export const deckReducer = (
  state: DeckState = initialState,
  action: DeckEventAction
): DeckState => {
  switch (action.type) {
    case DeckActionType.ADD_CARD_SUCCESS:
      return {
        error: null,
        deck: action.deck,
      };

    case DeckActionType.ADD_CARD_ERROR:
      return {
        error: action.error,
        deck: state.deck,
      };

    case DeckActionType.REMOVE_CARD_SUCCESS:
      return {
        error: null,
        deck: action.deck,
      };

    case DeckActionType.REMOVE_CARD_ERROR:
      return {
        error: action.error,
        deck: state.deck,
      };

    default:
      return state;
  }
};
