import styled from 'styled-components';

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
  @media screen and (min-width: 768px) {
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
  min-width: 185px;
  top: 160px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 12px;
  @media screen and (min-width: 768px) {
    top: 200px;
  }
`;

export const SecondInpError = styled.p`
  position: absolute;
  color: red;
  min-width: 185px;
  top: 227px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 12px;
  @media screen and (min-width: 768px) {
    top: 267px;
  }
`;

export const ThirdInpError = styled.p`
  position: absolute;
  color: red;
  min-width: 185px;
  top: 295px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 12px;
  @media screen and (min-width: 768px) {
    top: 335px;
  }
`;
