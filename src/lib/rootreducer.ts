import { combineReducers } from "@reduxjs/toolkit";
import menuModalSlice from "@/lib/features/menuModalSlice";
import registerModalSlice from "@/lib/features/registerModalSlice";
import registrantDetailsModalSlice from "@/lib/features/registrantDetailsModalSlice";

const rootReducer = combineReducers({
  menuModalSlice,
  registerModalSlice,
  registrantDetailsModalSlice,
});

export default rootReducer;
