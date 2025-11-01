import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  userData: null,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // we need to check the data if the before the set status true because , other wise if wil always set true
    login: (state, action) => {
      const user = action.payload;
      state.status = !!user;         // converts truthy/falsy to boolean
      state.userData = user || null; // if no user, store null
    },
    logout: (state) => {
      state.status = false;
      state.userData = null;
    },
  },
});

export const { login, logout } = AuthSlice.actions;
export default AuthSlice.reducer;
