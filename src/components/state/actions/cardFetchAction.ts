import { FetchActionType } from "../action-types";
import { FetchedCards } from "../index";

interface CardFetchInit {
  type: FetchActionType.CARD_FETCH_INIT;
  term: string;
}

interface CardFetchSuccess {
  type: FetchActionType.CARD_FETCH_SUCCESS;
  payload: FetchedCards;
}

interface CardFetchError {
  type: FetchActionType.CARD_FETCH_ERROR;
  payload: unknown;
}

export type CardFetchAction = CardFetchInit | CardFetchSuccess | CardFetchError;
