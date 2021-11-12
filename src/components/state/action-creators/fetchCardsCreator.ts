import axios from "axios";
import { Dispatch } from "redux";
import { FetchedCards } from "..";
import { FetchActionType } from "../action-types";
import { CardFetchAction } from "../actions/index";

export const setFetchTerm = (term: string) => {
  return async (dispatch: Dispatch<CardFetchAction>) => {
    await dispatch({
      type: FetchActionType.CARD_FETCH_INIT,
      term: term,
    });
  };
};

export const fetchCards = (fname: string, keywords: string[]) => {
  return async (dispatch: Dispatch<CardFetchAction>) => {
    await dispatch({
      type: FetchActionType.CARD_FETCH_INIT,
      term: fname,
    });

    try {
      const url = `https://db.ygoprodeck.com/api/v7/cardinfo.php`;
      const CSKeywords: string = keywords.join(",");
      const TypeFetch = {
        params: {
          fname: fname,
          type: CSKeywords,
          num: 20,
          offset: 0,
        },
      };

      const NamedFetch = {
        params: {
          fname: fname,
          num: 20,
          offset: 0,
        },
      };

      const { data } = await axios.get<FetchedCards>(
        url,
        keywords.length > 0 ? TypeFetch : NamedFetch
      );

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
