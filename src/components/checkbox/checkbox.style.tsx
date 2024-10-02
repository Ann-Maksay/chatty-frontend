import styled from "styled-components";

import checked from "~/assets/images/icons/checkbox-checked.svg";

export const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 18px;
  font-weight: 300;
  cursor: pointer;
`;

export const StyledCheckbox = styled.input`
  position: absolute;
  opacity: 0;
  pointer-events: none;
  width: 0;
  height: 0;
  margin: 0;

  & + label {
    position: relative;
    display: inline-block;

    width: 24px;
    height: 24px;

    cursor: pointer;
    border-radius: 32px;
  }

  & + label:before {
    content: "";

    box-sizing: border-box;

    position: absolute;
    top: 0;
    left: 0;

    width: 24px;
    height: 24px;

    border-radius: 10px;

    border: 1px solid var(--secondary-light-green-color);
    transition:
      background-color 0.2s ease,
      border-color 0.2s ease;
  }

  &:checked + label:before {
    background: url(${checked});
    border: none;
    background-size: cover;
  }
`;
