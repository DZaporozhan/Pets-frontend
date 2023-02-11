import { NavLinkStyled, } from "./UserNav.styled";
import { ReactComponent as AccountCircle } from "../../../icons/account-circle.svg"



export const UserNav = ({setIsMenuOpen}) => {
  return (
    <>
      <NavLinkStyled to="/user" onClick={() => setIsMenuOpen(false)}>
        <AccountCircle />
        Account</NavLinkStyled>
    </>
  );
};

