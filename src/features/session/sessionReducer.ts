import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import User from "./user";

export const sessionSlice = createSlice({
  name: "session",
  initialState: {
    value: null as User | null,
  },
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      action.payload;
    },
    logout: (state) => {
      null;
    },
  },
});

export const { login, logout } = sessionSlice.actions;

export default sessionSlice.reducer;
