import { YugiohCards } from "../../../quickType/YugiCard";
import { CardFetchAction } from "../actions";
import { FetchActionType } from "../action-types";

interface FetchState {
  loading: boolean;
  error: unknown;
  data: YugiohCards | undefined;
}

const initialState = {
  loading: false,
  error: null,
  data: undefined,
};

export const fetchReducer = (
  state: FetchState = initialState,
  action: CardFetchAction
): FetchState => {
  switch (action.type) {
    case FetchActionType.CARD_FETCH_INIT:
      return { loading: true, error: null, data: undefined };

    case FetchActionType.CARD_FETCH_SUCCESS:
      return { loading: false, error: null, data: action.payload };

    case FetchActionType.CARD_FETCH_ERROR:
      return { loading: false, error: action.payload, data: undefined };

    default:
      return state;
  }
};
