import styled, { css } from "styled-components";

import hidePassword from "~/assets/images/icons/password-hide.svg";
import showPassword from "~/assets/images/icons/password-show.svg";
import { IconName } from "~/types/icon-name.type";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  $style: "primary" | "icon" | "icon-auth";
  $icon: IconName;
}

interface LabelProps {
  $isHidden: "true" | "false";
}

export const StyledButton = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: inherit;
  text-transform: uppercase;

  transition:
    border var(--default-transition-timer) ease,
    box-shadow var(--default-transition-timer) ease;

  ${({ $style }) =>
    $style === "primary" &&
    css`
      padding: 20px 56px;
      border-radius: 24px;
      background: var(--main-green-gradient);

      font-size: 20px;
      font-weight: 700;
      color: var(--main-light-color);
    `}

  ${({ $style }) =>
    $style === "icon-auth" &&
    css`
      position: absolute;
      top: 50%;
      right: 16px;
      z-index: 1;
      transform: translateY(-50%);

      width: 24px;
      height: 24px;

      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
    `}

  ${({ $icon }) =>
    $icon === "password-show" &&
    css`
      background: url(${showPassword});
    `}

     ${({ $icon }) =>
    $icon === "password-hide" &&
    css`
      background: url(${hidePassword});
    `}

  &:hover {
    ${({ $style }) =>
      $style === "primary" &&
      css`
        box-shadow: inset 0 0 0 1px var(--main-light-color);
      `}
  }

  &:active {
    ${({ $style }) =>
      $style === "primary" &&
      css`
        color: var(--secondary-white-color);
      `}
  }

  &:disabled {
    cursor: not-allowed;
    color: rgba(245, 255, 255, 0.7);
    background: linear-gradient(
      180deg,
      rgba(253, 253, 253, 0.79) 0%,
      rgba(143, 170, 171, 0.8) 100%
    );
  }
`;

export const StyledLabel = styled.span<LabelProps>`
  ${({ $isHidden }) =>
    $isHidden === "true" &&
    css`
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
    `}
`;
