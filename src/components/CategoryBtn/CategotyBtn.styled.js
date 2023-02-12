import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavBtn = styled(NavLink)`
  text-decoration: none;
  min-width: 81px;
  min-height: 31px;
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes[1]}px;
  line-height: 1.35;
  letter-spacing: 0.04em;
  padding: 8px 28px;

  color: ${p => p.theme.colors.black};
  background: ${p => p.theme.colors.white};
  border: 2px solid ${p => p.theme.colors.accent};
  border-radius: ${p => p.theme.radii.normal};

  &.active {
    color: ${p => p.theme.colors.white};
    background: ${p => p.theme.colors.accent};
  }

  @media screen and (${p => p.theme.device.tablet}) {
    padding: 10px 28px;
    font-size: ${p => p.theme.fontSizes[4]}px;
  }
`;
