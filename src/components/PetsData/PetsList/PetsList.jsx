import { Loader } from 'components/Loader/Loader';
import { useSelector } from 'react-redux';
import { getUserInfo } from 'redux/user/selectors';
import Pet from './Pet';
import { Card, StyledList } from './PetsList.styled';

const PetsList = () => {
  const userInfo = useSelector(getUserInfo);
  const userPets = userInfo.userPets;

  return (
    <>
      {Object.keys(userInfo).length === 0 ? (
        <Loader />
      ) : !userPets.length ? (
        <div>No content</div>
      ) : (
        <StyledList>
          {userPets.map(({ _id, ...userPets }) => (
            <Card key={_id}>
              <Pet userPet={userPets} />
            </Card>
          ))}
        </StyledList>
      )}
    </>
  );
};

export default PetsList;
