import { NavLink } from "react-router-dom";
import styled from 'styled-components';

export const NavLinkStyled = styled(NavLink)`
    font-family: ${p => p.theme.fonts.body};
    font-weight: ${p => p.theme.fontWeights.medium};
    font-size: ${p => p.theme.fontSizes[7]}px;
    color: ${p => p.theme.colors.secondBlack};
    letter-spacing: 0.04em;
    line-height: 1.4;
    align-items: center;
    text-decoration: none;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);


&.active {
    color:  ${p => p.theme.colors.accent};
    font-weight: ${p => p.theme.fontWeights.bold};
    text-decoration-line: underline;
    text-decoration-thickness: 1px;
  }

    :hover:not(.active),
    :focus-visible:not(.active) {
    color:  ${p => p.theme.colors.accent};

  }
  
  @media (min-width: 768px) { 
  font-size: ${p => p.theme.fontSizes[9]}px;
  line-height: 1.38;
}

  @media (min-width: 1280px) { 
  font-size: ${p => p.theme.fontSizes[4]}px;
  line-height: 1.35;
}

`