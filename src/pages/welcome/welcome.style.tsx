import styled from "styled-components";

export const StyledWelcome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;

  width: 100%;
  min-height: 100vh;
  padding: 50px 0 10px;

  background: var(--secondary-green-gradient);
`;

export const StyledLogo = styled.img`
  width: 180px;
  height: 188px;
`;

export const StyledTitle = styled.h1`
  color: var(--main-light-color);
  font-size: 36px;
  font-weight: 500;
`;
