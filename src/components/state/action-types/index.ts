export enum FetchActionType {
  CARD_FETCH_INIT = "[FETCH] Card Fetch Initiated",
  CARD_FETCH_SUCCESS = "[FETCH] Card Fetch Successful",
  CARD_FETCH_ERROR = "[FETCH] Card Fetch Failed",
}

export enum CardActionType {
  CARD_CLICK = "[CARD] Card Clicked",
  CARD_INSPECT = "[CARD] Card Inspected",
  CARD_RESET = "[CARD] Card State Reset",
}

export enum DeckEvents {
  StartNewDeck = "[EVENT] Start New Deck",
  AddCard = "[EVENT] Add Card To Deck",
  RemoveCard = "[EVENT] Remove Card From Deck",
}

export enum Auth {
  Login = "[AUTH] Login",
  Logout = "[AUTH] Logout",
}
