
import {NavLinkStyled} from "./AuthNav.styled"

const links = [
  {
    "link": "/login",
    "text": "Login",
    "primary": 1,
  },
  {
    "link": "/register",
    "text": "Registration",
    "primary": 0,
  }]

export const AuthNav = ({setIsMenuOpen}) => {
  return (
    <>
      {links.map(({ link, text, primary }) =>
        (<NavLinkStyled to={link} primary={primary} key={text} onClick={() => setIsMenuOpen(false)}> {text} </NavLinkStyled>))}
 
    </>
  );
};

