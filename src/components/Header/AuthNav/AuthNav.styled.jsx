import { NavLink } from "react-router-dom";
import styled from 'styled-components';


export const NavLinkStyled = styled(NavLink)`
display: flex;
justify-content: center;
align-items: center;  
background-color:  ${ props  => props.primary ? props.theme.colors.accent :  props.theme.colors.white}; 
color:  ${ props  => props.primary ? props.theme.colors.white :  props.theme.colors.black}; 
font-size: ${p => p.theme.fontSizes[1]}px;
border-radius:  ${p => p.theme.radii.normal};
border: 2px solid ${p => p.theme.colors.accent};
padding: 10px 28px;
font-family: ${p => p.theme.fonts.body};
letter-spacing: 0.04em;
line-height: 1.35;
cursor: pointer;
font-weight: ${p => p.theme.fontWeights.medium};
transition: background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1) 0s;


 &.active {
  background-color: ${p => p.theme.colors.accent};
   color: ${p => p.theme.colors.white};
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
   background-color:  ${ props  => props.primary ? props.theme.colors.hoverButton :  props.theme.colors.hoverButton}; ;
    color:  ${ props => props.primary ? props.theme.colors.black : props.theme.colors.white}; 
    border-color: ${p => p.theme.colors.hoverButton};
  }

@media (min-width: 768px) { 
font-size: ${p => p.theme.fontSizes[4]}px; }
`


