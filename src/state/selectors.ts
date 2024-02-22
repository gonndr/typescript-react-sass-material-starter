import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./reducer";

const selectState = (state: RootState) => state;

export const selectAllData = createSelector(
  selectState,
  ({ allData }) => allData
);
export const selectSelectedOption = createSelector(
  selectState,
  ({ selectedOption }) => selectedOption
);
export const selectNotification = createSelector(
  selectState,
  ({ notification }) => notification
);
export const selectApiState = createSelector(
  selectState,
  ({ isLoading, isError }) => ({
    isLoading,
    isError,
  })
);
