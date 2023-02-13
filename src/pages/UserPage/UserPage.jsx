// import Logout from 'components/Logout';
import UserData from 'components/UserData';
import {
  PetContainer,
  PetSection,
  TitleUser,
  TitlePets,
  MainContainer,
  TitleWrap,
  UserSection,
} from './UserPage.styled';

const UserPage = () => {
  return (
    <MainContainer>
      <UserSection>
        <TitleUser>My Information:</TitleUser>
        <UserData />
      </UserSection>
      <PetSection>
        <TitleWrap>
          <TitlePets>My pets:</TitlePets>
          <div>
            <span>Add pet</span>
            <button>icon</button>
          </div>
        </TitleWrap>
        <PetContainer>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Praesentium voluptates vitae a corporis deserunt iure ratione modi
            placeat labore? Esse.
          </p>
        </PetContainer>
        <PetContainer></PetContainer>
      </PetSection>
    </MainContainer>
  );
};

export default UserPage;
