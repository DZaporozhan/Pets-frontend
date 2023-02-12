import { NavBtn } from './CategotyBtn.styled';

export const CategoryBtn = ({ title, onClick, to }) => {
  return (
    <>
      <NavBtn onClick={onClick} to={to}>
        {title}
      </NavBtn>
    </>
  );
};
