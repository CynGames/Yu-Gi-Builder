import { DeckActionType } from "../action-types";
import { UserDeck, YugiohCard } from "..";

interface DeckUpdateInit {
  type: DeckActionType.UPDATE_DECK_INIT;
  shouldUpdate: boolean;
}

interface DeckUpdateSuccess {
  type: DeckActionType.UPDATE_DECK_SUCCESS;
  shouldUpdate: boolean;
}

interface DeckUpdateError {
  type: DeckActionType.UPDATE_DECK_ERROR;
  error: unknown;
  shouldUpdate: boolean;
}

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
  deck: UserDeck;
}

interface CardAdditionError {
  type: DeckActionType.ADD_CARD_ERROR;
  error: unknown;
  deck: UserDeck;
}

interface CardRemovalInit {
  type: DeckActionType.REMOVE_CARD_INIT;
  deck: UserDeck;
}

interface CardRemovalSuccess {
  type: DeckActionType.REMOVE_CARD_SUCCESS;
  deck: UserDeck;
}

interface CardRemovalError {
  type: DeckActionType.REMOVE_CARD_ERROR;
  error: unknown;
  deck: UserDeck;
}

export type DeckEventAction =
  | DeckUpdateInit
  | DeckUpdateSuccess
  | DeckUpdateError
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
