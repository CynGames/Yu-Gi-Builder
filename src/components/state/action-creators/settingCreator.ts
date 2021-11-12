import { Dispatch } from "redux";
import { SettingActionType } from "../action-types";
import { SettingAction } from "../actions/settingAction";

export const setSideDeckMode = (mode: boolean) => {
  return (dispatch: Dispatch<SettingAction>) => {
    dispatch({
      type: SettingActionType.SET_SIDE_DECK_MODE,
      mode: mode,
    });
  };
};

export const setAdvancedFilteringMode = (mode: boolean) => {
  return (dispatch: Dispatch<SettingAction>) => {
    dispatch({
      type: SettingActionType.SET_ADVANCED_FILTER_MODE,
      mode: mode,
    });
  };
};

export const setPricingMode = (mode: boolean) => {
  return (dispatch: Dispatch<SettingAction>) => {
    dispatch({
      type: SettingActionType.SET_PRICING_MODE,
      mode: mode,
    });
  };
};
