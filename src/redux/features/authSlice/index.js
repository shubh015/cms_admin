import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    token: "",
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setToken: (store, action) => {
            store.token = action.payload
        },
        remove: (store) => {
            store.token = "";
        },
    },
});

export const { setToken, removeToken} = authSlice.actions;
export default authSlice.reducer