import { Keyword } from "./../reducers/advancedFilterReducer";
import { AdvancedFilterAction } from "..";
import { Dispatch } from "react";
import { AdvancedFilterActionType } from "../action-types";

export const addFilterKeyword = (keyword: string) => {
  return async (dispatch: Dispatch<AdvancedFilterAction>) => {
    await dispatch({
      type: AdvancedFilterActionType.ADD_FILTER_KEYWORD,
      keyword: keyword,
    });
  };
};

export const removeFilterKeyword = (keyword: string) => {
  return async (dispatch: Dispatch<AdvancedFilterAction>) => {
    await dispatch({
      type: AdvancedFilterActionType.REMOVE_FILTER_KEYWORD,
      keyword: keyword,
    });
  };
};
