import { NavLinkStyled } from './AuthNav.styled';
import { useLocation } from 'react-router-dom';

export const AuthNav = ({ setIsMenuOpen }) => {
  const { pathname } = useLocation();
  const isReg = pathname === '/register';
  const links = [
    {
      link: '/login',
      text: 'Login',
      primary: !isReg ? 1 : 0,
    },
    {
      link: '/register',
      text: 'Registration',
      primary: isReg ? 1 : 0,
    },
  ];
  return (
    <>
      {links.map(({ link, text, primary }) => (
        <NavLinkStyled
          to={link}
          primary={primary}
          key={text}
          onClick={() => setIsMenuOpen(false)}
        >
          {text}
        </NavLinkStyled>
      ))}
    </>
  );
};
