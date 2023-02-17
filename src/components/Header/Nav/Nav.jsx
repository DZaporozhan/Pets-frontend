import { NavLinkStyled } from './Nav.styled';
import { useParams } from "react-router-dom";

export const Nav = ({setIsMenuOpen}) => {

  const {categoryName = "sell"} = useParams();

  return (
    <>
      <NavLinkStyled to="/news" onClick={() => setIsMenuOpen(false)}>News</NavLinkStyled>
      <NavLinkStyled to={`notices/${categoryName}`}  onClick={() => setIsMenuOpen(false)}>Find pet</NavLinkStyled>
      <NavLinkStyled to="/friends" onClick={() => setIsMenuOpen(false)}>Our friends</NavLinkStyled>
    </>
  );
};
