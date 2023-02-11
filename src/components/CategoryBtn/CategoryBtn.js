import { NavBtn } from './CategotyBtn.styled';

export const CategoryBtn = ({ title, onClick }) => {
  return (
    <>
      <NavBtn type="button" onClick={onClick}>
        {title}
      </NavBtn>
    </>
  );
};
