import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface RegistrantDetailsModalState {
  registrantDetailsModal: boolean;
  data: any;
  registrantApproveModal: boolean;
  registrantDeclineModal: boolean;
  approveId: string;
  rejectId: string;
}

const initialState = {
  registrantDetailsModal: false,
  data: null,
  registrantApproveModal: false,
  registrantDeclineModal: false,
  approveId: "",
  rejectId: "",
} as RegistrantDetailsModalState;

const registrantDetailsModalSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    toggleRegistrantDetailsModalOpen(state) {
      state.registrantDetailsModal = true;
    },
    toggleRegistrantDetailsModalClose(state) {
      state.registrantDetailsModal = false;
    },
    toggleRegistrantApproveModalOpen(state) {
      state.registrantApproveModal = true;
    },
    toggleRegistrantApproveModalClose(state) {
      state.registrantApproveModal = false;
    },
    toggleRegistrantDeclineModalOpen(state) {
      state.registrantDeclineModal = true;
    },
    toggleRegistrantDeclineModalClose(state) {
      state.registrantDeclineModal = false;
    },
    setRegistrantData(state, action: PayloadAction<object>) {
      state.data = action.payload;
    },
    setApproveData(state, action: PayloadAction<string>) {
      state.approveId = action.payload;
    },
    setDeclineData(state, action: PayloadAction<string>) {
      state.rejectId = action.payload;
    },
  },
});

export const {
  toggleRegistrantDetailsModalOpen,
  toggleRegistrantDetailsModalClose,
  setRegistrantData,
  toggleRegistrantApproveModalOpen,
  toggleRegistrantApproveModalClose,
  toggleRegistrantDeclineModalOpen,
  toggleRegistrantDeclineModalClose,
  setApproveData,
  setDeclineData,
} = registrantDetailsModalSlice.actions;
export default registrantDetailsModalSlice.reducer;
