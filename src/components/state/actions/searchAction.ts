import { SearchActionType } from "../action-types";

interface SearchActionKeywordAddition {
  type: SearchActionType.ADD_FILTER_KEYWORD;
  keyword: string;
}

interface SearchActionKeywordRemoval {
  type: SearchActionType.REMOVE_FILTER_KEYWORD;
  keyword: string;
}

export type SearchAction =
  | SearchActionKeywordAddition
  | SearchActionKeywordRemoval;
