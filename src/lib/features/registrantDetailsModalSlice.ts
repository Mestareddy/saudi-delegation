import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface RegistrantDetailsModalState {
  value: boolean;
  data: any;
}

const initialState = {
  value: false,
  data: null,
} as RegistrantDetailsModalState;

const registrantDetailsModalSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    toggleRegistrantDetailsModalOpen(state) {
      state.value = true;
    },
    toggleRegistrantDetailsModalClose(state) {
      state.value = false;
    },
    setRegistrantData(state, action: PayloadAction<object>) {
      state.data = action.payload;
    },
  },
});

export const {
  toggleRegistrantDetailsModalOpen,
  toggleRegistrantDetailsModalClose,
  setRegistrantData,
} = registrantDetailsModalSlice.actions;
export default registrantDetailsModalSlice.reducer;
