import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import {
  StyledTitle,
  StyledForm,
  StyledButtonContainer,
  StyledLink,
  StyledContainer,
  StyledLogo,
} from "../../auth.style";
import { DEFAULT_PASSWORD_RECOVERY_PAYLOAD } from "../../constants/constants";
import { passwordRecoverySchema } from "../../validation-shemas/validation-shemas";

import logo from "~/assets/images/logo/logo-small.svg";
import { Button, Input, Link } from "~/components/components";
import { AppRoute } from "~/enums/app-route.enum";

const PasswordRecovery: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: DEFAULT_PASSWORD_RECOVERY_PAYLOAD,
    resolver: yupResolver(passwordRecoverySchema),
  });

  const handleFormSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <div>
      <StyledContainer $style="password-recovery">
        <StyledLogo src={logo} alt="Chatty logo" />
        <StyledTitle>Password recovery</StyledTitle>

        <StyledForm onSubmit={handleFormSubmit}>
          <Input
            control={control}
            icon="mail"
            label="E-mail"
            name="email"
            placeholder="E-mail"
            type="email"
            error={errors.email?.message}
          />

          <StyledButtonContainer $style="password-recovery">
            <Button label="Send" type="submit" style="primary" />

            <StyledLink>
              Remembered the password?{" "}
              <Link
                href={AppRoute.SIGN_IN}
                label="Sign in"
                style="small-auth"
              />
            </StyledLink>
          </StyledButtonContainer>
        </StyledForm>
      </StyledContainer>
    </div>
  );
};

export { PasswordRecovery };
