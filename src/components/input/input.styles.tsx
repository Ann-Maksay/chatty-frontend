import styled, { css } from "styled-components";

import mailIcon from "~/assets/images/icons/mail.svg";
import passwordIcon from "~/assets/images/icons/password.svg";
import userIcon from "~/assets/images/icons/user.svg";
import { type IconName } from "~/types/icon-name.type";

interface LabelProps {
  $icon: IconName;
  $style: "primary";
  $hasError: boolean;
}

interface InputProps {
  $hasError: boolean;
}

export const StyledWrapper = styled.label<LabelProps>`
  position: relative;
  display: inline-block;

  ${({ $hasError }) =>
    $hasError === true &&
    css`
      margin-top: 13px;
    `}

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 16px;
    z-index: 1;
    transform: translateY(-50%);

    width: 24px;
    height: 24px;

    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;

    ${({ $icon }) =>
      $icon === "user" &&
      css`
        background-image: url(${userIcon});
      `}

    ${({ $icon }) =>
      $icon === "mail" &&
      css`
        width: 22px;
        height: 16px;
        background-image: url(${mailIcon});
      `}

    ${({ $icon }) =>
      $icon === "password" &&
      css`
        background-image: url(${passwordIcon});
      `}
  }
`;

export const StyledInput = styled.input<InputProps>`
  width: 436px;
  padding: 14px 20px 14px 56px;

  font-size: 22px;

  background-color: var(--main-white-color);
  border-radius: 24px;
  box-shadow: 0px 0px 2px #013538;

  &::placeholder {
    color: rgba(26, 39, 40, 0.17);
  }

  &:focus {
    box-shadow: 0px 0px 3px #013538;

    ${({ $hasError }) =>
      $hasError === true &&
      css`
        box-shadow: inset 0px 0px 2px 1px rgba(240, 24, 24, 1);
      `}
  }

  ${({ $hasError }) =>
    $hasError === true &&
    css`
      box-shadow: inset 0px 0px 2px 1px rgba(240, 24, 24, 1);
    `}
`;

//Must be visually hidden but required for accessibility
export const StyledLabel = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  clip-path: inset(100%);
  white-space: nowrap;
  border: 0;
`;

export const StyledError = styled.p`
  position: absolute;
  top: -30px;
  left: 20px;
  font-size: 12px;
  color: red;
`;
