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
  @media screen and (min-width: 768px) {
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
  @media screen and (min-width: 768px) {
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
