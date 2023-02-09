import { NavLinkStyled, } from "./UserNav.styled";
import { ReactComponent as AccountCircle } from "../Icons/account-circle.svg"


export const UserNav = () => {
  return (
    <>
      <NavLinkStyled to="/user">
        <AccountCircle />
        Account</NavLinkStyled>
    </>
  );
};

