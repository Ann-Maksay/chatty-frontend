import { createAsyncThunk } from "@reduxjs/toolkit";

import { signInApi, signUpApi } from "./auth.api";
import { setErrorMessage } from "./auth.slice";

import { type UserSignInReqDto, type UserSignUpReqDto } from "~/types/types";

export const signIn = createAsyncThunk(
  "auth/signIn",
  async (payload: UserSignInReqDto, { dispatch, rejectWithValue }) => {
    try {
      const response = await signInApi(payload);
      return response.data;
    } catch (error) {
      if (error.response) {
        const status = error.response.status;
        const errorData = error.response.data;

        if (status === 401 && errorData.detail) {
          dispatch(setErrorMessage("Incorrect email or password."));
        } else {
          dispatch(setErrorMessage("Something went wrong. Please try again."));
        }
      }

      return rejectWithValue(error.response.data);
    }
  }
);

export const signUp = createAsyncThunk(
  "auth/signUp",
  async (credentials: UserSignUpReqDto, { dispatch, rejectWithValue }) => {
    try {
      const response = await signUpApi(credentials);
      return response.data;
    } catch (error) {
      if (error.response) {
        const status = error.response.status;
        const errorData = error.response.data;

        if (status === 400 && errorData.email) {
          dispatch(
            setErrorMessage("User with this email address already exists.")
          );
        } else {
          dispatch(setErrorMessage("Something went wrong. Please try again."));
        }
      }

      return rejectWithValue(error.response.data);
    }
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
