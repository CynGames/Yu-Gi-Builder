import { combineReducers } from "redux";
import { cardReducer } from "./cardReducer";
import { deckReducer } from "./deckReducer";
import { fetchReducer } from "./fetchReducer";
import { settingReducer } from "./settingReducer";
import { advancedFilterReducer } from "./advancedFilterReducer";

// Cada reducer es un slice...posiblemente.
const reducers = combineReducers({
  setting: settingReducer,
  card: cardReducer,
  fetch: fetchReducer,
  deck: deckReducer,
  filter: advancedFilterReducer,
});

export default reducers;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof reducers>;
