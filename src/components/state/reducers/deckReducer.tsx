import { DeckEventAction, UserDeck, YugiohCard } from "..";
import { DeckActionType } from "../action-types/index";

interface DeckState {
  loading: boolean;
  error: unknown;
  deck: UserDeck;
}

const initialState = {
  loading: false,
  error: null,
  deck: {
    main: [],
    extra: [],
    side: [],
  },
};

export const DeckReducer = (
  state: DeckState = initialState,
  action: DeckEventAction
): DeckState => {
  switch (action.type) {
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
      return { loading: true, error: null, deck: action.deck };

    case DeckActionType.ADD_CARD_SUCCESS:
      return { loading: false, error: null, deck: action.payload };

    case DeckActionType.ADD_CARD_ERROR:
      return { loading: false, error: action.payload, deck: action.deck };

    case DeckActionType.REMOVE_CARD_INIT:
      return { loading: true, error: null, deck: action.deck };

    case DeckActionType.REMOVE_CARD_SUCCESS:
      return { loading: false, error: null, deck: action.payload };

    case DeckActionType.REMOVE_CARD_ERROR:
      return { loading: false, error: action.payload, deck: action.deck };

    default:
      return state;
  }
};
