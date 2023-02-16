import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  application: {},
};

const applicationFormSlice = createSlice({
  name: "application",
  initialState,
  reducers: {
    setForm: (state, action) => {
      state.application = action.payload;
    },
  },
});

export const { setForm } = applicationFormSlice.actions;
export default applicationFormSlice.reducer;
