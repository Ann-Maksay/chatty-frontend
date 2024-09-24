import { StyledAuth, StyledContainer, StyledLogo } from "./auth.style";
import { SignIn } from "./components/components";

import logo from "~/assets/images/logo/logo-small.svg";

const Auth: React.FC = () => {
  return (
    <StyledAuth>
      <StyledContainer>
        <StyledLogo src={logo} alt="Chatty logo" />
        <SignIn />
      </StyledContainer>
    </StyledAuth>
  );
};

export { Auth };
