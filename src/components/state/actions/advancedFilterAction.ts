import { AdvancedFilterActionType } from "../action-types/index";
import { Keyword } from "../reducers/advancedFilterReducer";

interface AdvancedFilterKeywordAddition {
  type: AdvancedFilterActionType.ADD_FILTER_KEYWORD;
  keyword: string;
}

interface AdvancedFilterKeywordRemoval {
  type: AdvancedFilterActionType.REMOVE_FILTER_KEYWORD;
  keyword: string;
}

export type AdvancedFilterAction =
  | AdvancedFilterKeywordAddition
  | AdvancedFilterKeywordRemoval;
