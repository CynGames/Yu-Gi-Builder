import { YugiohCard } from "..";
import { CardActionType } from "../action-types/index";
import { CardEventAction } from "../actions";

interface CardState {
  isPicking: boolean;
  isInspecting: boolean;
  card: YugiohCard | undefined;
}

const initialState = {
  isPicking: false,
  isInspecting: false,
  card: undefined,
};

export const cardReducer = (
  state: CardState = initialState,
  action: CardEventAction
): CardState => {
  switch (action.type) {
    case CardActionType.CARD_EVENT_CLICK:
      return { isPicking: true, isInspecting: false, card: action.payload };

    case CardActionType.CARD_EVENT_INSPECT:
      return { isPicking: false, isInspecting: true, card: action.payload };

    case CardActionType.CARD_EVENT_RESET:
      return initialState;

    default:
      return state;
  }
};
