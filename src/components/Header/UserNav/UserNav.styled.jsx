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

@media (min-width: 768px) { 
font-size: ${p => p.theme.fontSizes[2]}px;
line-height: 1.38; 
}

`

