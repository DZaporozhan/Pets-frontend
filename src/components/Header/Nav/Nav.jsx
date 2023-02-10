import { NavLinkStyled } from './Nav.styled';

export const Nav = ({setIsMenuOpen}) => {
  return (
    <>
      <NavLinkStyled to="/news" onClick={() => setIsMenuOpen(false)}>News</NavLinkStyled>
      <NavLinkStyled to="/notices/sell" onClick={() => setIsMenuOpen(false)}>Find pet</NavLinkStyled>
      <NavLinkStyled to="/friends" onClick={() => setIsMenuOpen(false)}>Our friends</NavLinkStyled>
    </>
  );
};
