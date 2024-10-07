import { createSlice } from "@reduxjs/toolkit";

import { signIn, signUp } from "./auth.actions";

import { type UserInfo } from "~/types/user-info.type";

type AuthState = {
  errorMessage: string | null;
  user: UserInfo;
  token: string | null;
  isUserLoading: boolean;
};

const initialState: AuthState = {
  errorMessage: null,
  isUserLoading: false,
  token: null,
  user: {
    avatar: "",
    nickname: "",
  },
};

const authSlice = createSlice({
  initialState,
  name: "auth",
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
    setErrorMessage(state, action) {
      state.errorMessage = action.payload;
    },
  },
  // eslint-disable-next-line sort-keys
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        state.isUserLoading = true;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.token = action.payload.access;
        state.isUserLoading = false;
      })
      .addCase(signIn.rejected, (state) => {
        state.isUserLoading = false;
      })
      .addCase(signUp.pending, (state) => {
        state.isUserLoading = true;
      })
      .addCase(signUp.fulfilled, (state) => {
        state.isUserLoading = false;
      })
      .addCase(signUp.rejected, (state) => {
        state.isUserLoading = false;
      });
  },
});

export const { setErrorMessage } = authSlice.actions;
export default authSlice.reducer;
