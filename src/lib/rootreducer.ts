import { combineReducers } from "@reduxjs/toolkit";
import menuModalSlice from "@/lib/features/menuModalSlice";
import registerModalSlice from "./features/registerModalSlice";

const rootReducer = combineReducers({
  menuModalSlice,
  registerModalSlice,
});

export default rootReducer;
