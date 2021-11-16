export enum DeckActionType {
  UPDATE_DECK_INIT = "[DECK EVENT] Deck Update Initiated",
  UPDATE_DECK_SUCCESS = "[DECK EVENT] Deck Update Successful",
  UPDATE_DECK_ERROR = "[DECK EVENT] Deck Update Failed",

  CREATE_DECK_INIT = "[DECK EVENT] Deck Creation Initiated",
  CREATE_DECK_SUCCESS = "[DECK EVENT] Deck Creation Successful",
  CREATE_DECK_ERROR = "[DECK EVENT] Deck Creation Failed",

  DELETE_DECK_INIT = "[DECK EVENT] Deck Deletion Initiated",
  DELETE_DECK_SUCCESS = "[DECK EVENT] Deck Deletion Successful",
  DELETE_DECK_ERROR = "[DECK EVENT] Deck Deletion Failed",

  ADD_CARD_INIT = "[DECK EVENT] Card Addition Initiated",
  ADD_CARD_SUCCESS = "[DECK EVENT] Card Addition Successful",
  ADD_CARD_ERROR = "[DECK EVENT] Card Addition Failed",

  REMOVE_CARD_INIT = "[DECK EVENT] Card Removal Initiated",
  REMOVE_CARD_SUCCESS = "[DECK EVENT] Card Removal Successful",
  REMOVE_CARD_ERROR = "[DECK EVENT] Card Removal Failed",
}
