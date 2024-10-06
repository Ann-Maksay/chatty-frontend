import { createAsyncThunk } from "@reduxjs/toolkit";

import { signInApi, signUpApi } from "./auth.api";

import {
  type UserSignInReqDto,
  type UserSignInResDto,
  type UserSignUpReqDto,
  type UserSignUpResDto,
} from "~/types/types";

export const signIn = createAsyncThunk(
  "auth/signIn",
  async (credentials: UserSignInReqDto): Promise<UserSignInResDto> => {
    const response = await signInApi(credentials);
    return response.data;
  }
);

export const signUp = createAsyncThunk(
  "auth/signUp",
  async (credentials: UserSignUpReqDto): Promise<UserSignUpResDto> => {
    const response = await signUpApi(credentials);
    return response.data;
  }
);

export const signUpAndSignIn = createAsyncThunk(
  "auth/signUpAndSignIn",
  async (userInfo: UserSignUpReqDto, { dispatch }) => {
    const signUpResponse = await dispatch(signUp(userInfo)).unwrap();

    const credentials: UserSignInReqDto = {
      email: userInfo.email,
      password: userInfo.password,
    };

    const signInResponse = await dispatch(signIn(credentials)).unwrap();

    return { signIn: signInResponse, signUp: signUpResponse };
  }
);
