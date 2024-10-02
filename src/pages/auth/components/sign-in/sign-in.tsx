import { useState, useCallback } from "react";
import { useForm } from "react-hook-form";

import {
  StyledInputContainer,
  StyledTitle,
  StyledForm,
  StyledButtonContainer,
  StyledLink,
  StyledSubContent,
  StyledContainer,
  StyledLogo,
} from "../../auth.style";
import { DEFAULT_SIGN_IN_PAYLOAD } from "../../constants/constants";

import logo from "~/assets/images/logo/logo-small.svg";
import { Button, Input, Link } from "~/components/components";
import { AppRoute } from "~/enums/app-route.enum";

const SignIn: React.FC = () => {
  const [isPasswordVisible, setPasswordVisibility] = useState<boolean>(false);

  const { control, handleSubmit } = useForm({
    defaultValues: DEFAULT_SIGN_IN_PAYLOAD,
  });

  const handleFormSubmit = handleSubmit((data) => {
    console.log(data);
  });

  const handleChangePasswordVisibility = useCallback(() => {
    setPasswordVisibility(!isPasswordVisible);
  }, [isPasswordVisible]);

  return (
    <div>
      <StyledContainer $style="sign-in">
        <StyledLogo src={logo} alt="Chatty logo" />
        <StyledTitle>Sign in</StyledTitle>

        <StyledForm onSubmit={handleFormSubmit}>
          <Input
            control={control}
            icon="mail"
            label="E-mail"
            name="email"
            placeholder="E-mail"
            type="email"
          />

          <StyledInputContainer>
            <Input
              control={control}
              icon="password"
              label="Password"
              name="password"
              placeholder="Password"
              type={isPasswordVisible ? "text" : "password"}
            />

            <Button
              label="Toggle password"
              hasVisuallyHiddenLabel={true}
              icon={isPasswordVisible ? "password-show" : "password-hide"}
              style="icon-auth"
              onClick={handleChangePasswordVisibility}
            />
          </StyledInputContainer>

          <StyledSubContent>
            <Link
              href={AppRoute.PASSWORD_RECOVERY}
              label="Forgot Password?"
              style="big-auth"
            />
          </StyledSubContent>

          <StyledButtonContainer>
            <Button label="Sing In" type="submit" style="primary" />

            <StyledLink>
              Don`t have an account?{" "}
              <Link
                href={AppRoute.SIGN_UP}
                label="Sign up"
                style="small-auth"
              />
            </StyledLink>
          </StyledButtonContainer>
        </StyledForm>
      </StyledContainer>
    </div>
  );
};

export { SignIn };
