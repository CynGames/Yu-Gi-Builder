import { SearchAction } from "..";
import { Dispatch } from "react";
import { SearchActionType } from "../action-types";

export const addFilterKeyword = (keyword: string) => {
  return async (dispatch: Dispatch<SearchAction>) => {
    await dispatch({
      type: SearchActionType.ADD_FILTER_KEYWORD,
      keyword: keyword,
    });
  };
};

export const removeFilterKeyword = (keyword: string) => {
  return async (dispatch: Dispatch<SearchAction>) => {
    await dispatch({
      type: SearchActionType.REMOVE_FILTER_KEYWORD,
      keyword: keyword,
    });
  };
};
