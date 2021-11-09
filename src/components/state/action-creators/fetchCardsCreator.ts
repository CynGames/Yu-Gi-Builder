import axios from "axios";
import { Dispatch } from "redux";
import { FetchedCards } from "..";
import { FetchActionType } from "../action-types";
import { CardFetchAction } from "../actions/index";

export const fetchCards = (term: string) => {
  return async (dispatch: Dispatch<CardFetchAction>) => {
    dispatch({
      type: FetchActionType.CARD_FETCH_INIT,
    });

    try {
      const url = `https://db.ygoprodeck.com/api/v7/cardinfo.php`;
      const { data } = await axios.get<FetchedCards>(url, {
        params: {
          fname: term,
        },
      });

      dispatch({
        type: FetchActionType.CARD_FETCH_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: FetchActionType.CARD_FETCH_ERROR,
        payload: error,
      });
    }
  };
};
