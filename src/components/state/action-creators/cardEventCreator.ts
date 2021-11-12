import { Dispatch } from "redux";
import { YugiohCard } from "..";
import { CardActionType } from "../action-types";
import { CardEventAction } from "../actions/index";

export const cardClickEvent = (card: YugiohCard) => {
  return (dispatch: Dispatch<CardEventAction>) => {
    dispatch({
      type: CardActionType.CARD_EVENT_CLICK,
      card: card,
    });
  };
};

export const cardResetEvent = () => {
  return (dispatch: Dispatch<CardEventAction>) => {
    dispatch({
      type: CardActionType.CARD_EVENT_RESET,
    });
  };
};
