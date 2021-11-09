import { YugiohCard } from "..";
import { CardActionType } from "../action-types";

interface CardEventClick {
  type: CardActionType.CARD_EVENT_CLICK;
  payload: YugiohCard;
}

interface CardEventInspect {
  type: CardActionType.CARD_EVENT_INSPECT;
  payload: YugiohCard;
}

interface CardEventReset {
  type: CardActionType.CARD_EVENT_RESET;
}

export type CardEventAction =
  | CardEventClick
  | CardEventInspect
  | CardEventReset;
