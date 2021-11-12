import { SettingAction } from "..";
import { SettingActionType } from "../action-types";

interface SettingState {
  isSideDeckingState: boolean;
  advancedFilteringState: boolean;
  pricingState: boolean;
}

const initialState = {
  isSideDeckingState: false,
  advancedFilteringState: false,
  pricingState: false,
};

export const settingReducer = (
  state: SettingState = initialState,
  action: SettingAction
): SettingState => {
  switch (action.type) {
    case SettingActionType.SET_SIDE_DECK_MODE:
      return {
        isSideDeckingState: action.mode,
        advancedFilteringState: state.advancedFilteringState,
        pricingState: state.pricingState,
      };

    case SettingActionType.SET_ADVANCED_FILTER_MODE:
      return {
        isSideDeckingState: state.isSideDeckingState,
        advancedFilteringState: action.mode,
        pricingState: state.pricingState,
      };

    case SettingActionType.SET_PRICING_MODE:
      return {
        isSideDeckingState: state.isSideDeckingState,
        advancedFilteringState: state.advancedFilteringState,
        pricingState: action.mode,
      };

    default:
      return state;
  }
};
