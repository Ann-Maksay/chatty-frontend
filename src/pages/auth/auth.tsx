import { useLocation } from "react-router-dom";

import { StyledAuth } from "./auth.style";
import { SignIn, SignUp, PasswordRecovery } from "./components/components";

import { AppRoute } from "~/enums/app-route.enum";

const Auth: React.FC = () => {
  const { pathname } = useLocation();

  const handleScreenRender = (screen: string): React.ReactNode => {
    switch (screen) {
      case AppRoute.SIGN_IN: {
        return <SignIn />;
      }

      case AppRoute.SIGN_UP: {
        return <SignUp />;
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
