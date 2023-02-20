import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const NavLinkStyled = styled(NavLink)`
display: flex;
justify-content: center;
align-items: center;
gap: 12px;
background-color:  ${p => p.theme.colors.accent};
color: ${p => p.theme.colors.white};
border-radius:  ${p => p.theme.radii.normal};
font-size: ${p => p.theme.fontSizes[1]}px;
letter-spacing: 0.04em;
line-height: 1.35;
padding: 10px 28px;
transition: background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1) 0s;

@media (min-width: 768px) { 
font-size: ${p => p.theme.fontSizes[2]}px;
line-height: 1.38; 
}


 :hover:not(.active),
 :focus-visible:not(.active) {
    background-color:  ${ props  => props.theme.colors.hoverButton};
    border-color: ${p => p.theme.colors.hoverButton};
  }

`

