import { Dispatch } from "redux";
import { UserDeck } from "..";
import { DeckEventAction } from "../actions/deckEventAction";
import { DeckActionType } from "../action-types/index";

export const updateDeckState = (deck: UserDeck) => {
  return async (dispatch: Dispatch<DeckEventAction>) => {
    dispatch({
      type: DeckActionType.ADD_CARD_INIT,
      deck: deck,
    });

    try {
      dispatch({
        type: DeckActionType.ADD_CARD_SUCCESS,
        payload: deck,
      });
    } catch (error) {
      dispatch({
        type: DeckActionType.ADD_CARD_ERROR,
        payload: "Invalid Card",
        deck: deck,
      });
    }
  };
};

export const removeCardFromDeck = () => {};
