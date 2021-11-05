import { combineReducers } from "redux";
import { cardReducer } from "./cardReducer";
import { fetchReducer } from "./fetchReducer";

// Cada reducer es un slice...posiblemente.
const reducers = combineReducers({
  card: cardReducer,
  fetch: fetchReducer,
});

export default reducers;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof reducers>;