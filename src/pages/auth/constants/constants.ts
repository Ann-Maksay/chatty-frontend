import {
  type UserPasswordRecoveryReqDto,
  type UserSignInReqDto,
  type UserSignUpReqDto,
} from "~/types/types";

const DEFAULT_SIGN_IN_PAYLOAD: UserSignInReqDto = {
  email: "",
  password: "",
};

const DEFAULT_SIGN_UP_PAYLOAD: UserSignUpReqDto = {
  email: "",
  isFullYearOld: false,
  password: "",
  username: "",
};

const DEFAULT_PASSWORD_RECOVERY_PAYLOAD: UserPasswordRecoveryReqDto = {
  email: "",
};

export {
  DEFAULT_SIGN_IN_PAYLOAD,
  DEFAULT_SIGN_UP_PAYLOAD,
  DEFAULT_PASSWORD_RECOVERY_PAYLOAD,
};
