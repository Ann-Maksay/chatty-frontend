import styled, { css } from "styled-components";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  $style: "welcome" | "primary" | "icon";
}

export const StyledButton = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: inherit;
  text-transform: uppercase;

  transition: border var(--default-transition-timer) ease;

  ${({ $style }) =>
    $style === "welcome" &&
    css`
      padding: 52px 146px;
      border-radius: 48px;
      background: var(--welcome-button-gradient);
      border: 4px solid var(--welcome-button-border);

      font-size: 32px;
      font-weight: 700;
      color: var(--main-white-color);
    `}

  ${({ $style }) =>
    $style === "primary" &&
    css`
      padding: 20px 74px;
      border-radius: 24px;
      background: var(--main-green-gradient);

      font-size: 20px;
      font-weight: 700;
      color: var(--main-light-color);
    `}
  
  &:hover {
    ${({ $style }) =>
      $style === "welcome" &&
      css`
        border: 4px solid var(--main-light-color);
      `}

    ${({ $style }) =>
      $style === "primary" &&
      css`
        background: var(--main-button-ative-gradient);
      `}
  }

  &:active {
    ${({ $style }) =>
      $style === "welcome" &&
      css`
        color: var(--secondary-white-color);
        background: var(--welcome-button-active-gradient);
        border: 4px solid var(--welcome-button-border);
      `}

    ${({ $style }) =>
      $style === "primary" &&
      css`
        color: var(--secondary-white-color);
      `}
  }

  &:disabled {
    cursor: not-allowed;

    ${({ $style }) =>
      $style === "welcome" &&
      css`
        color: var(--secondary-white-color);
        background: var(--disabled-button-gradient);
        border: 4px solid transparent;
      `}
  }
`;
