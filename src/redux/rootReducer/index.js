import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "../features/AuthSlice";
import loaderSlice from "../features/LoaderSlice";
import applicationFormSlice from "../features/ApplicationFormSlice";
import SearchSlice from "../features/SearchSlice";

const rootReducer = combineReducers({
  auth: authSlice,
  loader: loaderSlice,
  application: applicationFormSlice,
  search: SearchSlice
});

export default rootReducer;
