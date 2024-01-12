import { createSlice } from "@reduxjs/toolkit";

interface MenuModalState {
  value: boolean;
}

const initialState = { value: false } as MenuModalState;

const menuModalSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    toggleMenuOpen(state) {
      state.value = true;
    },
    toggleMenuClose(state) {
      state.value = false;
    },
  },
});

export const { toggleMenuOpen, toggleMenuClose } = menuModalSlice.actions;
export default menuModalSlice.reducer;
