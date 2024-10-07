import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import { StyledAuth } from "./auth.style";
import { SignIn, SignUp, PasswordRecovery } from "./components/components";

import { AppRoute } from "~/enums/app-route.enum";
import { authActions } from "~/store/auth.ts/auth";
import { AppDispatch } from "~/store/store";
import { UserSignInReqDto, UserSignUpReqDto } from "~/types/types";

const Auth: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { pathname } = useLocation();

  const handleSignInSubmit = useCallback(
    (payload: UserSignInReqDto): void => {
      void dispatch(authActions.signIn(payload));
    },
    [dispatch]
  );

  const handleSignUpSubmit = useCallback(
    (payload: UserSignUpReqDto): void => {
      void dispatch(authActions.signUpAndSignIn(payload));
    },
    [dispatch]
  );

  const handleScreenRender = (screen: string): React.ReactNode => {
    switch (screen) {
      case AppRoute.SIGN_IN: {
        return <SignIn onSubmit={handleSignInSubmit} />;
      }

      case AppRoute.SIGN_UP: {
        return <SignUp onSubmit={handleSignUpSubmit} />;
      }

      case AppRoute.PASSWORD_RECOVERY: {
        return <PasswordRecovery />;
      }
    }

    return null;
  };

  return <StyledAuth>{handleScreenRender(pathname)}</StyledAuth>;
};

export { Auth };
