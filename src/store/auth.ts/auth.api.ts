import axios from "axios";

import { apiUrl } from "../api";

import { type UserSignInReqDto, type UserSignUpReqDto } from "~/types/types";

export const signInApi = (credentials: UserSignInReqDto) => {
  return axios.post(`${apiUrl}/user1/login/`, credentials);
};

export const signUpApi = (credentials: UserSignUpReqDto) => {
  return axios.post(`${apiUrl}/user/`, credentials);
};
