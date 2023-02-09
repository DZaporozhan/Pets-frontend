import { StyledBtn, Wrap, IconAdd, Text } from './AddPetBtn.styled';

export const AddPetBtn = ({ onClick }) => {
  return (
    <>
      <StyledBtn type="button" onClick={onClick}>
        <Wrap>
          <IconAdd></IconAdd>
        </Wrap>
        <Text>Add pet</Text>
      </StyledBtn>
    </>
  );
};
