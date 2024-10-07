import { StyledWelcome, StyledTitle, StyledLogo } from "./welcome.style";

import logo from "~/assets/images/logo/logo-big.svg";
import { Button } from "~/components/components";
import { AppRoute } from "~/enums/app-route.enum";

const Welcome: React.FC = () => (
  <StyledWelcome>
    <StyledLogo src={logo} alt="Chatty logo" />
    <StyledTitle>Meet, chat and have fun with new people - free.</StyledTitle>
    <Button href={AppRoute.SIGN_IN} label="Sign in" style="welcome" />
  </StyledWelcome>
);

export { Welcome };
