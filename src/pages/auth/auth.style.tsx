import styled from "styled-components";

import authBG from "~/assets/images/auth-dg.png";

export const StyledAuth = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;

  width: 100%;
  min-height: 100vh;
  padding: 168px 0 116px;

  background: var(--auth-green-gradient);
`;

export const StyledContainer = styled.div`
  position: relative;

  width: 900px;
  height: 668px;
  padding: 192px 115px 74px;

  background: url(${authBG});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export const StyledLogo = styled.img`
  position: absolute;
  top: 0px;
  left: 50%;

  width: 126px;
  height: 130px;

  transform: translateX(-50%) translateY(-50%);
`;
export const StyledTitle = styled.h1`
  margin-bottom: 40px;

  text-align: center;
  font-size: 42px;
  font-weight: 500;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
`;

export const StyledInputContainer = styled.div`
  position: relative;
`;

export const StyledSubContent = styled.div`
  width: 100%;

  padding: 20px 0 35px 132px;
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const StyledLink = styled.p`
  margin: 0;
  font-size: 12px;
  font-weight: 500;
`;
