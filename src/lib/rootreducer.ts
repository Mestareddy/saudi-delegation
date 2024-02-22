import { combineReducers } from "@reduxjs/toolkit";
import menuModalSlice from "@/lib/features/menuModalSlice";
import registerModalSlice from "@/lib/features/registerModalSlice";
import registrantDetailsModalSlice from "@/lib/features/registrantDetailsModalSlice";
import userSlice from "./features/userSlice";
import speakerModalSlice from "./features/speakerModalSlice";

const rootReducer = combineReducers({
  menuModalSlice,
  registerModalSlice,
  registrantDetailsModalSlice,
  userSlice,
  speakerModalSlice,
});

export default rootReducer;
