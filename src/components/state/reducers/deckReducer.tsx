import { DeckEventAction, UserDeck, YugiohCard } from "..";
import { DeckActionType } from "../action-types/index";

interface DeckState {
  loading: boolean;
  error: unknown;
  deck: UserDeck;
  shouldUpdate?: boolean;
}

const initialState = {
  loading: false,
  error: null,
  shouldUpdate: false,
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
    // case DeckActionType.UPDATE_DECK_INIT:
    //   return { loading: true, error: null, shouldUpdate: false };

    // case DeckActionType.UPDATE_DECK_SUCCESS:
    //   return { loading: false, error: null, shouldUpdate: true };

    // case DeckActionType.UPDATE_DECK_ERROR:
    //   return { loading: false, error: action.error, shouldUpdate: false };

    // case DeckActionType.CREATE_DECK_INIT:
    //   return state;

    // case DeckActionType.CREATE_DECK_SUCCESS:
    //   return state;

    // case DeckActionType.CREATE_DECK_ERROR:
    //   return state;

    // case DeckActionType.DELETE_DECK_INIT:
    //   return state;

    // case DeckActionType.DELETE_DECK_SUCCESS:
    //   return state;

    // case DeckActionType.DELETE_DECK_ERROR:
    //   return state;

    case DeckActionType.ADD_CARD_INIT:
      return {
        loading: true,
        error: null,
        deck: action.deck,
      };

    case DeckActionType.ADD_CARD_SUCCESS:
      return {
        loading: false,
        error: null,
        deck: action.deck,
      };

    case DeckActionType.ADD_CARD_ERROR:
      return {
        loading: false,
        error: action.error,
        deck: action.deck,
      };

    case DeckActionType.REMOVE_CARD_INIT:
      return {
        loading: true,
        error: null,
        deck: action.deck,
      };

    case DeckActionType.REMOVE_CARD_SUCCESS:
      return {
        loading: false,
        error: null,
        deck: action.deck,
      };

    case DeckActionType.REMOVE_CARD_ERROR:
      return {
        loading: false,
        error: action.error,
        deck: action.deck,
      };

    default:
      return state;
  }
};
