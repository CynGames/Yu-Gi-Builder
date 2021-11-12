import { FetchedCards } from "..";
import { CardFetchAction } from "../actions";
import { FetchActionType } from "../action-types";

interface FetchState {
  term: string;
  loading: boolean;
  error: unknown;
  cards: FetchedCards;
}

const initialState = {
  term: "",
  loading: false,
  error: null,
  cards: {
    data: [],
  },
};

export const fetchReducer = (
  state: FetchState = initialState,
  action: CardFetchAction
): FetchState => {
  switch (action.type) {
    case FetchActionType.CARD_FETCH_INIT:
      return {
        term: action.term,
        loading: true,
        error: null,
        cards: state.cards,
      };

    case FetchActionType.CARD_FETCH_SUCCESS:
      return {
        term: state.term,
        loading: false,
        error: null,
        cards: action.payload,
      };

    case FetchActionType.CARD_FETCH_ERROR:
      return {
        term: state.term,
        loading: false,
        error: action.payload,
        cards: state.cards,
      };

    default:
      return state;
  }
};
