import { useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

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
import { DEFAULT_SIGN_UP_PAYLOAD } from "../../constants/constants";

import logo from "~/assets/images/logo/logo-small.svg";
import { Button, Input, Link, Checkbox } from "~/components/components";
import { AppRoute } from "~/enums/app-route.enum";
import { RootState } from "~/store/store";
import { UserSignUpReqDto } from "~/types/types";

type Props = {
  onSubmit: (payload: UserSignUpReqDto) => void;
};

const SignUp: React.FC<Props> = ({ onSubmit }) => {
  const [isPasswordVisible, setPasswordVisibility] = useState<boolean>(false);
  const [isFullYear, setIsFullYear] = useState<boolean>(false);
  const isUserLoading = useSelector(
    (state: RootState) => state.auth.isUserLoading
  );

  const { control, handleSubmit } = useForm({
    defaultValues: DEFAULT_SIGN_UP_PAYLOAD,
  });

  const handleFormSubmit = useCallback(
    (event_: React.BaseSyntheticEvent): void => {
      void handleSubmit(onSubmit)(event_);
    },
    [handleSubmit, onSubmit]
  );

  const handleChangePasswordVisibility = useCallback(() => {
    setPasswordVisibility(!isPasswordVisible);
  }, [isPasswordVisible]);

  return (
    <div>
      <StyledContainer $style="sign-up">
        <StyledLogo src={logo} alt="Chatty logo" />
        <StyledTitle>Sign Up</StyledTitle>

        <StyledForm onSubmit={handleFormSubmit}>
          <Input
            control={control}
            icon="user"
            label="Username"
            name="nickname"
            placeholder="Nickname"
            type="text"
          />

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
            <Checkbox
              control={control}
              label="Has gone past the age of 18"
              name="isFullYearOld"
              onChange={(e) => setIsFullYear(e.target.checked)}
            />
          </StyledSubContent>

          <StyledButtonContainer>
            <Button
              label="Sing Up"
              type="submit"
              style="primary"
              disabled={!isFullYear || isUserLoading}
            />

            <StyledLink>
              Already have an account?{" "}
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

export { SignUp };
