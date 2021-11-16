import { combineReducers } from "redux";
import { cardReducer } from "./cardReducer";
import { deckReducer } from "./deckReducer";
import { fetchReducer } from "./fetchReducer";
import { settingReducer } from "./settingReducer";
import { searchReducer } from "./searchReducer";

// Cada reducer es un slice...posiblemente.
const reducers = combineReducers({
  card: cardReducer,
  fetch: fetchReducer,
  deck: deckReducer,
  setting: settingReducer,
  search: searchReducer,
});

export default reducers;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof reducers>;
