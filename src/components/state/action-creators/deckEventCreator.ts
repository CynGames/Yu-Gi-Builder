import { Dispatch } from "redux";
import { UserDeck } from "..";
import { DeckEventAction } from "../actions/deckEventAction";
import { DeckActionType } from "../action-types/index";
import { YugiohCard } from "../../../quickType/YugiCard";

// export const updateDeckState = (deck: UserDeck) => {
//   return async (dispatch: Dispatch<DeckEventAction>) => {
//     dispatch({
//       type: DeckActionType.ADD_CARD_INIT,
//       deck: deck,
//     });

//     try {
//       dispatch({
//         type: DeckActionType.ADD_CARD_SUCCESS,
//         payload: deck,
//       });
//     } catch (error) {
//       dispatch({
//         type: DeckActionType.ADD_CARD_ERROR,
//         payload: "Invalid Card",
//         deck: deck,
//       });
//     }
//   };
// };

export const updateDeckState = (decks: UserDeck) => {
  return async (dispatch: Dispatch<DeckEventAction>) => {
    dispatch({
      type: DeckActionType.ADD_CARD_INIT,
      deck: decks,
    });

    try {
      dispatch({
        type: DeckActionType.ADD_CARD_SUCCESS,
        deck: decks,
      });
    } catch (error) {
      dispatch({
        type: DeckActionType.ADD_CARD_ERROR,
        error: `Error while updating deck`,
        deck: decks,
      });
    }
  };
};

// export const addCardToMainDeck(card: YugiohCard) {

// }

export const removeCardFromDeck = (
  deck: UserDeck,
  card: YugiohCard,
  indexID: number,
  isSideDecking: boolean
) => {
  return async (dispatch: Dispatch<DeckEventAction>) => {
    dispatch({
      type: DeckActionType.REMOVE_CARD_INIT,
      deck: deck,
    });

    try {
      if (isSideDecking) {
        deck.side.splice(indexID, 1);
      } else {
        if (deck.main.includes(card)) {
          deck.main.splice(indexID, 1);
        } else {
          deck.extra.splice(indexID, 1);
        }
      }

      const modifiedDeck: UserDeck = {
        main: [...deck.main],
        extra: [...deck.extra],
        side: [...deck.side],
      };

      dispatch({
        type: DeckActionType.REMOVE_CARD_SUCCESS,
        deck: modifiedDeck,
      });
    } catch (error) {
      dispatch({
        type: DeckActionType.ADD_CARD_ERROR,
        error: error,
        deck: deck,
      });
    }
  };
};
