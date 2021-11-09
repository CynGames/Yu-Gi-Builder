import { FetchedCards } from "..";
import { CardFetchAction } from "../actions";
import { FetchActionType } from "../action-types";

interface FetchState {
  loading: boolean;
  error: unknown;
  data: FetchedCards;
}

const initialState = {
  loading: false,
  error: null,
  data: {
    data: [],
  },
};

export const fetchReducer = (
  state: FetchState = initialState,
  action: CardFetchAction
): FetchState => {
  switch (action.type) {
    case FetchActionType.CARD_FETCH_INIT:
      return { loading: true, error: null, data: initialState.data };

    case FetchActionType.CARD_FETCH_SUCCESS:
      return { loading: false, error: null, data: action.payload };

    case FetchActionType.CARD_FETCH_ERROR:
      return { loading: false, error: action.payload, data: initialState.data };

    default:
      return state;
  }
};
