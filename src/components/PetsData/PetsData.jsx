import { Title, TitleWrapper } from './PetsData.styled';
import PetsList from './PetsList/PetsList';
import { AddPetBtn } from 'components/AddPetBtn/AddPetBtn';

const PetsData = () => {
  return (
    <>
      <TitleWrapper>
        <Title>My pets:</Title>
        <AddPetBtn />
      </TitleWrapper>

      <PetsList />
    </>
  );
};

export default PetsData;
