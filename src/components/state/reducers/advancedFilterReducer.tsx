import { AdvancedFilterAction } from "..";
import { AdvancedFilterActionType } from "../action-types";

interface AdvancedFilterState {
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

export const advancedFilterReducer = (
  state: AdvancedFilterState = initialState,
  action: AdvancedFilterAction
) => {
  switch (action.type) {
    case AdvancedFilterActionType.ADD_FILTER_KEYWORD:
      return { filterByKeywords: [...state.filterByKeywords, action.keyword] };
    case AdvancedFilterActionType.REMOVE_FILTER_KEYWORD:
      return {
        filterByKeywords: state.filterByKeywords.filter(
          (item) => item != action.keyword
        ),
      };

    default:
      return state;
  }
};
