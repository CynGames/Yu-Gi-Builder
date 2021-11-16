import { SearchAction } from "..";
import { SearchActionType } from "../action-types";

interface SearchState {
  filterByKeywords: string[];
}

export const Keyword = {
  Monster: "Normal Monster",
  Spell: "Spell Card",
  Trap: "Trap Card",
  Normal: "Normal Monster",
  Effect: "Effect Monster",
  Union: "Union Monster",
  Spirit: "Spirit Monster",
  Flip: "Flip Monster",
  Gemini: "Gemini Monster",
  Toon: "Toon Monster",
  Ritual: "Ritual Monster",
  Fusion: "Fusion Monster",
  Synchro: "Synchro Monster",
  Xyz: "Xyz Monster",
  Pendulum: "Pendulum Monster",
  Link: "Link Monster",
  Tuner: "Tuner Monster",
};

const initialState = {
  filterByKeywords: [],
};

export const searchReducer = (
  state: SearchState = initialState,
  action: SearchAction
) => {
  switch (action.type) {
    case SearchActionType.ADD_FILTER_KEYWORD:
      return { filterByKeywords: [...state.filterByKeywords, action.keyword] };
    case SearchActionType.REMOVE_FILTER_KEYWORD:
      return {
        filterByKeywords: state.filterByKeywords.filter(
          (keyword) => keyword != action.keyword
        ),
      };

    default:
      return state;
  }
};
