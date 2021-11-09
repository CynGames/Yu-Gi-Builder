import { DeckActionType } from "../action-types";
import { UserDeck, YugiohCard } from "..";

interface DeckCreationInit {
  type: DeckActionType.CREATE_DECK_INIT;
}

interface DeckCreationSuccess {
  type: DeckActionType.CREATE_DECK_SUCCESS;
}

interface DeckCreationError {
  type: DeckActionType.CREATE_DECK_ERROR;
}

interface DeckDeletionInit {
  type: DeckActionType.DELETE_DECK_INIT;
}

interface DeckDeletionSuccess {
  type: DeckActionType.DELETE_DECK_SUCCESS;
}

interface DeckDeletionError {
  type: DeckActionType.DELETE_DECK_ERROR;
}

interface CardAdditionInit {
  type: DeckActionType.ADD_CARD_INIT;
  deck: UserDeck;
}

interface CardAdditionSuccess {
  type: DeckActionType.ADD_CARD_SUCCESS;
  payload: UserDeck;
}

interface CardAdditionError {
  type: DeckActionType.ADD_CARD_ERROR;
  payload: unknown;
  deck: UserDeck;
}

interface CardRemovalInit {
  type: DeckActionType.REMOVE_CARD_INIT;
  deck: UserDeck;
}

interface CardRemovalSuccess {
  type: DeckActionType.REMOVE_CARD_SUCCESS;
  payload: UserDeck;
}

interface CardRemovalError {
  type: DeckActionType.REMOVE_CARD_ERROR;
  payload: unknown;
  deck: UserDeck;
}

export type DeckEventAction =
  | DeckCreationInit
  | DeckCreationSuccess
  | DeckCreationError
  | DeckDeletionInit
  | DeckDeletionSuccess
  | DeckDeletionError
  | CardAdditionInit
  | CardAdditionSuccess
  | CardAdditionError
  | CardRemovalInit
  | CardRemovalSuccess
  | CardRemovalError;
