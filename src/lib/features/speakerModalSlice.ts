import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface SpeakerState {
  //   loggedIn: boolean;
  speakerData: any;
  modalState: boolean;
}

const initialState = { modalState: false, speakerData: null } as SpeakerState;

const speakerSlice = createSlice({
  name: "speaker",
  initialState,
  reducers: {
    toggleSpeakerModalOpen(state) {
      state.modalState = true;
    },
    toggleSpeakerModalClose(state) {
      state.modalState = false;
    },
    setSpeakerData(state, action: PayloadAction<string>) {
      state.speakerData = action.payload;
    },
  },
});

export const {
  toggleSpeakerModalOpen,
  toggleSpeakerModalClose,
  setSpeakerData,
} = speakerSlice.actions;
export default speakerSlice.reducer;
