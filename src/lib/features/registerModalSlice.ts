import { createSlice } from "@reduxjs/toolkit";

interface RegisterModalState {
  value: boolean;
}

const initialState = { value: false } as RegisterModalState;

const registerModalSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    toggleRegisterModalOpen(state) {
      state.value = true;
    },
    toggleRegisterModalClose(state) {
      state.value = false;
    },
  },
});

export const { toggleRegisterModalOpen, toggleRegisterModalClose } =
  registerModalSlice.actions;
export default registerModalSlice.reducer;
