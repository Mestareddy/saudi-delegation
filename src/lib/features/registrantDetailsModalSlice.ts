import { EventAttendee, RegistrantAction } from "@/types/attendee";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface RegistrantDetailsModalState {
  data?: EventAttendee;
  registrantDetailsModal: boolean;
  registrantApproveModal: boolean;
  registrantDeclineModal: boolean;
  rejectSuccessModal: boolean;
  registrantAction: RegistrantAction;
  // reTriggerCallback: any;
}

const initialState: RegistrantDetailsModalState = {
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
  // reTriggerCallback: null,
};

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
    // updateTriggerCallBack: (state, action: PayloadAction<any>) => {
    //   state.reTriggerCallback = action.payload;
    // },
  },
});

export const {
  toggleRegistrantDetailsModal,
  declineSuccessModal,
  setRegistrantAction,
  setRegistrantData,
  toggleRegistrantApproveModal,
  toggleRegistrantDeclineModal,
  // updateTriggerCallBack,
} = registrantDetailsModalSlice.actions;
export default registrantDetailsModalSlice.reducer;
