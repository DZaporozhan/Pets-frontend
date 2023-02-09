import Logout from 'components/Logout';
import UserData from 'components/UserData';
import {
  PetContainer,
  PetSection,
  TitleUser,
  TitlePets,
  UserContainer,
  UserSection,
  TitleWrap,
} from './UserPage.styled';

const UserPage = () => {
  return (
    <UserContainer>
      <TitleUser>My Information:</TitleUser>
      <UserSection>
        <UserData />
        <Logout />
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
    </UserContainer>
  );
};

export default UserPage;
