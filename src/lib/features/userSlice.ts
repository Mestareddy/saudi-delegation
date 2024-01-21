import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UserState {
  loggedIn: boolean;
  userData: any;
}

const initialState = { loggedIn: false, userData: null } as UserState;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser(state) {
      state.loggedIn = true;
    },
    logoutUser(state) {
      state.loggedIn = false;
    },
    setDeclineData(state, action: PayloadAction<string>) {
      state.userData = action.payload;
    },
  },
});

export const { loginUser, logoutUser, setDeclineData } = userSlice.actions;
export default userSlice.reducer;
