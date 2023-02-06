import { NavLink } from "react-router-dom";

export const Nav = () => {
  return (
    <>
      <NavLink to="/news">News</NavLink>
      <NavLink to="/notices">Find pet</NavLink>
      <NavLink to="/friends">Our friends</NavLink>
    </>
  );
};

