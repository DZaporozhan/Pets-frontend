import styled from 'styled-components';
import { ReactComponent as SvgLogout } from './img/logout-icon.svg';

export const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  margin-left: auto;

  border: none;
  background: none;
  cursor: pointer;

  font-size: 16px;
  line-height: 1.38;
  letter-spacing: 0.04em;
  color: rgba(17, 17, 17, 0.6);

  @media ${p => p.theme.device.tablet} {
    margin-left: 0;
  }
`;

export const LogoutIcon = styled(SvgLogout)`
  margin-right: 8px;

  fill: ${p => p.theme.colors.accent};
  stroke: ${p => p.theme.colors.accent};
`;
