import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const FormContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 148px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px 0;
  background: #fdf7f2;
  @media ${p => p.theme.device.tablet} {
    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
    border-radius: 40px;
    max-width: 618px;
    background: ${p => p.theme.colors.white};
    padding: 60px 0;
  }
`;

export const RegisterHeader = styled.h2`
  margin-bottom: 40px;
  letter-spacing: 0.04em;
  line-height: 49px;
  font-size: ${p => p.theme.fontSizes[5]}px;
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.medium};
  @media ${p => p.theme.device.tablet} {
    font-size: ${p => p.theme.fontSizes[8]}px;
  }
`;

export const FormText = styled.p`
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes[0]}px;
  letter-spacing: 0.04em;
  line-height: 16px;
  color: rgba(17, 17, 17, 0.6);
`;

export const RegisterLink = styled(NavLink)`
  display: inline-block;
  margin-left: 2px;
  color: ${p => p.theme.colors.blue};
`;

export const FormInput = styled.input`
  box-sizing: border-box;
  display: flex;
  width: 280px;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: ${p => p.theme.radii.normal};
  padding: 14px 32px;
  font-size: ${p => p.theme.fontSizes[3]}px;
  margin-bottom: 16px;
  outline: ${p => p.theme.colors.accent};
  background-color: ${p => p.theme.colors.background};
  &:focus-visible {
    border: 1px solid #f59256;
  }
  &::placeholder {
    font-size: ${p => p.theme.fontSizes[3]}px;
    letter-spacing: 0.04em;
    line-height: 25px;
    font-weight: ${p => p.theme.fontWeights.regular};
    font-family: ${p => p.theme.fonts.body};
  }
  @media ${p => p.theme.device.tablet} {
    width: 458px;
  }
`;

export const AuthButton = styled.button`
  width: 100%;
  margin-top: 40px;
  margin-bottom: 40px;
  padding: 10.5px 0;
  border-radius: ${p => p.theme.radii.normal};
  letter-spacing: 0.04em;
  line-height: 27px;
  font-size: ${p => p.theme.fontSizes[4]}px;
  color: ${p => p.theme.colors.white};
  border: 2px solid rgba(245, 146, 86, 0.5);
  box-shadow: none;
  background-color: ${p => p.theme.colors.accent};
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.medium};
  outline: ${p => p.theme.colors.accent};
  &:hover,
  &:focus {
    color: black;
    box-shadow: none;
    border: 2px solid rgba(245, 146, 86, 0.5);
    background-color: ${p => p.theme.colors.white};
  }
`;

export const BackButton = styled.button`
  width: 100%;
  margin-bottom: 40px;
  padding: 10.5px 0;
  border-radius: 40px;
  letter-spacing: 0.04em;
  line-height: 27px;
  font-size: 20px;
  border: 2px solid #f59256;
  color: ${p => p.theme.colors.black};
  outline: ${p => p.theme.colors.accent};
  background-color: ${p => p.theme.colors.white};
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.medium};
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.white};
    box-shadow: none;
    border: 2px solid #f59256;
    background-color: ${p => p.theme.colors.accent};
  }
`;

export const FirstInpError = styled.p`
  position: absolute;
  color: red;
  min-width: 260px;
  top: 160px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 12px;
  @media ${p => p.theme.device.tablet} {
    top: 200px;
  }
`;

export const SecondInpError = styled.p`
  position: absolute;
  color: red;
  min-width: 260px;
  top: 227px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 12px;
  @media ${p => p.theme.device.tablet} {
    top: 267px;
  }
`;

export const ThirdInpError = styled.p`
  position: absolute;
  color: red;
  min-width: 260px;
  top: 295px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 12px;
  @media ${p => p.theme.device.tablet} {
    top: 335px;
  }
`;
