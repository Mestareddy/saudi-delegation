import { EventAttendee, RegistrantAction } from "@/types/attendee";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";


interface RegistrantDetailsModalState {
  data?: EventAttendee;
  registrantDetailsModal: boolean;
  registrantApproveModal: boolean;
  registrantDeclineModal: boolean;
  rejectSuccessModal: boolean;
  registrantAction: RegistrantAction;
}

const initialState = {
  data: undefined,
  registrantDetailsModal: false,
  registrantApproveModal: false,
  registrantDeclineModal: false,
  registrantAction: {
    action: undefined,
    registrantId: undefined,
    event: undefined,
  },
  rejectSuccessModal: false,
} as RegistrantDetailsModalState;

const registrantDetailsModalSlice = createSlice({
  name: "registrant",
  initialState,
  reducers: {
    toggleRegistrantDetailsModal(state, action: PayloadAction<boolean>) {
      state.registrantDetailsModal = action.payload;
    },
    toggleRegistrantApproveModal(state, action: PayloadAction<boolean>) {
      state.registrantApproveModal = action.payload;
    },
    toggleRegistrantDeclineModal(state, action: PayloadAction<boolean>) {
      state.registrantDeclineModal = action.payload;
    },
    setRegistrantData(state, action: PayloadAction<EventAttendee>) {
      state.data = action.payload;
    },
    setRegistrantAction(state, action: PayloadAction<RegistrantAction>) {
      state.registrantAction = action.payload;
    },
    declineSuccessModal(state, action: PayloadAction<boolean>) {
      state.rejectSuccessModal = action.payload;
    },
  },
});

export const {
  toggleRegistrantDetailsModal,
  declineSuccessModal,
  setRegistrantAction,
  setRegistrantData,
  toggleRegistrantApproveModal,
  toggleRegistrantDeclineModal,
} = registrantDetailsModalSlice.actions;
export default registrantDetailsModalSlice.reducer;
