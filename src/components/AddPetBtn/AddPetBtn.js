import { StyledBtn, Wrap, IconAdd, Text } from './AddPetBtn.styled';

export const AddPetBtn = ({ onClick, page = 'notice' }) => {
  return (
    <>
      <StyledBtn type="button" onClick={onClick} page={page}>
        <Wrap page={page}>
          <IconAdd></IconAdd>
        </Wrap>
        <Text>Add pet</Text>
      </StyledBtn>
    </>
  );
};
