import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  token: "",
  user: {},
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },

    setUser: (state, action) => {
      state.user = action.payload;
    },

    removeUser: (state) => {
      state.user = {};
    },

    removeToken: (state) => {
      state.token = "";
    },
  },
});

export const { setToken, removeToken, setUser, removeUser } = authSlice.actions;
export default authSlice.reducer;
