import { SettingActionType } from "../action-types/index";

interface SettingSideDeckMode {
  type: SettingActionType.SET_SIDE_DECK_MODE;
  mode: boolean;
}

interface SettingAdvancedFilterMode {
  type: SettingActionType.SET_ADVANCED_FILTER_MODE;
  mode: boolean;
}

interface SettingPricingMode {
  type: SettingActionType.SET_PRICING_MODE;
  mode: boolean;
}

export type SettingAction =
  | SettingSideDeckMode
  | SettingAdvancedFilterMode
  | SettingPricingMode;
