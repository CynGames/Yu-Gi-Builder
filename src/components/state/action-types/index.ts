export enum FetchActionType {
  CARD_FETCH_INIT = "[FETCH] Card Fetch Initiated",
  CARD_FETCH_SUCCESS = "[FETCH] Card Fetch Successful",
  CARD_FETCH_ERROR = "[FETCH] Card Fetch Failed",
}

export enum CardActionType {
  CARD_EVENT_CLICK = "[CARD EVENT] Card Clicked",
  CARD_EVENT_INSPECT = "[CARD EVENT] Card Inspected",
  CARD_EVENT_RESET = "[CARD EVENT] Card State Reset",
}

export enum DeckActionType {
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

export enum AuthActionType {
  Login = "[AUTH] Login",
  Logout = "[AUTH] Logout",
}
