import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "../features/AuthSlice";
import loaderSlice from "../features/LoaderSlice";
import applicationFormSlice from "../features/ApplicationFormSlice";

const rootReducer = combineReducers({
  auth: authSlice,
  loader: loaderSlice,
  application: applicationFormSlice,
});

export default rootReducer;
