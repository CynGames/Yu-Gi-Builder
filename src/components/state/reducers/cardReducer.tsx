import React from "react";
import { YugiohCard } from "../../../quickType/YugiCard";

interface CardState {
  loading: boolean;
  error: unknown;
  isInspecting: boolean;
  data: YugiohCard | undefined;
}

const initialState = {
  loading: false,
  error: null,
  isInspecting: false,
  data: undefined,
};

export const cardReducer = (
  state: CardState = initialState,
  action: any
): CardState => {
  return state;
};
