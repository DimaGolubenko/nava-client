import { createSlice } from "@reduxjs/toolkit";

interface UiState {
  isMiniCartOpened: boolean;
}

const initialState: UiState = {
  isMiniCartOpened: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleMiniCartVisibility: (state) => {
      state.isMiniCartOpened = !state.isMiniCartOpened;
    },
  },
});

export const { toggleMiniCartVisibility } = uiSlice.actions;
export default uiSlice.reducer;
