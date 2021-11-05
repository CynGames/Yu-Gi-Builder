import { YugiohCards } from "../../../quickType/YugiCard";
import { FetchActionType } from "../action-types";

interface CardSearchInit {
  type: FetchActionType.CARD_FETCH_INIT;
}

interface CardFetchSuccess {
  type: FetchActionType.CARD_FETCH_SUCCESS;
  payload: YugiohCards;
}

interface CardFetchError {
  type: FetchActionType.CARD_FETCH_ERROR;
  payload: unknown;
}

export type CardFetchAction =
  | CardSearchInit
  | CardFetchSuccess
  | CardFetchError;

interface CardEventClick {
  type: FetchActionType.CARD_FETCH_INIT;
}

interface CardEventInspect {
  type: FetchActionType.CARD_FETCH_SUCCESS;
  payload: YugiohCards;
}

interface CardEventReset {
  type: FetchActionType.CARD_FETCH_ERROR;
  payload: unknown;
}

export type CardEventAction =
  | CardSearchInit
  | CardFetchSuccess
  | CardFetchError;
