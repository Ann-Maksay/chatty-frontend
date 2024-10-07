import { yupResolver } from "@hookform/resolvers/yup";
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
  StledError,
} from "../../auth.style";
import { DEFAULT_SIGN_IN_PAYLOAD } from "../../constants/constants";
import { signInSchema } from "../../validation-shemas/validation-shemas";

import logo from "~/assets/images/logo/logo-small.svg";
import { Button, Input, Link } from "~/components/components";
import { AppRoute } from "~/enums/app-route.enum";
import { RootState } from "~/store/store";
import { UserSignInReqDto } from "~/types/types";

type Props = {
  onSubmit: (payload: UserSignInReqDto) => void;
};

const SignIn: React.FC<Props> = ({ onSubmit }) => {
  const [isPasswordVisible, setPasswordVisibility] = useState<boolean>(false);
  const isUserLoading = useSelector(
    (state: RootState) => state.auth.isUserLoading
  );
  const error = useSelector((state: RootState) => state.auth.errorMessage);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: DEFAULT_SIGN_IN_PAYLOAD,
    resolver: yupResolver(signInSchema),
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
            error={errors.email?.message}
          />

          <StyledInputContainer>
            <Input
              control={control}
              icon="password"
              label="Password"
              name="password"
              placeholder="Password"
              type={isPasswordVisible ? "text" : "password"}
              error={errors.password?.message}
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
            {error && <StledError $style="sign-in">{error}</StledError>}
            <Button
              label="Sing In"
              type="submit"
              style="primary"
              disabled={isUserLoading}
            />

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
