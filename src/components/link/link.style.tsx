import styled, { css } from "styled-components";

interface LinkProps {
  $style: "welcome" | "big-auth" | "small-auth";
}

export const StyledLink = styled.a<LinkProps>`
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
    $style === "big-auth" &&
    css`
      text-decoration: underline;
      font-size: 18px;
    `}

      ${({ $style }) =>
    $style === "small-auth" &&
    css`
      text-decoration: underline;
    `}

  &:hover {
    ${({ $style }) =>
      $style === "welcome" &&
      css`
        border: 4px solid var(--main-light-color);
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
  }
`;
