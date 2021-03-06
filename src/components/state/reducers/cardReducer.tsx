import { YugiohCard } from "..";
import { CardActionType } from "../action-types/index";
import { CardEventAction } from "../actions";

interface CardState {
  isPicking: boolean;
  isInspecting: boolean;
  card?: YugiohCard | null;
}

const initialState = {
  isPicking: false,
  isInspecting: false,
  card: null,
};

export const cardReducer = (
  state: CardState = initialState,
  action: CardEventAction
): CardState => {
  switch (action.type) {
    case CardActionType.CARD_EVENT_CLICK:
      return { isPicking: true, isInspecting: false, card: action.card };

    case CardActionType.CARD_EVENT_INSPECT:
      return { isPicking: false, isInspecting: true, card: action.card };

    case CardActionType.CARD_EVENT_RESET:
      return { isPicking: false, isInspecting: false, card: null };

    default:
      return state;
  }
};
