import { StyledAuth } from "./auth.style";
import { SignIn, SignUp, PasswordRecovery } from "./components/components";

const Auth: React.FC = () => {
  return (
    <StyledAuth>
      <SignUp />
    </StyledAuth>
  );
};

export { Auth };
