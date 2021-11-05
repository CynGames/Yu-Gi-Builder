import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../state";

// Use throughout your app instead of plain `useSelector`
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
