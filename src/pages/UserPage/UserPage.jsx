// import Logout from 'components/Logout';
import PetsData from 'components/PetsData/PetsData';
import UserData from 'components/UserData';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUserData } from 'redux/user/operations';
import {
  PetSection,
  TitleUser,
  TitlePets,
  MainContainer,
  TitleWrap,
  UserSection,

} from './UserPage.styled';
import { toast } from 'react-toastify';
import { getError, getIsLoading } from 'redux/user/selectors';
import { useSelector } from 'react-redux';

const UserPage = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(getUserData());
  }, [dispatch]);

  return (
    <MainContainer>
      <UserSection>
        <TitleUser>My Information:</TitleUser>
        <UserData />
      </UserSection>
      <PetSection>
        <PetsData />
        {/* <TitleWrap>
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
        <PetContainer></PetContainer> */}
      </PetSection>
      {isLoading && <b> Loading...</b>}
      {error && toast.error('Something wrong :( Please, try again later!')}
       </MainContainer>
  );
};

export default UserPage;
