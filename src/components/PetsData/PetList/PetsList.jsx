import { Loader } from 'components/Loader/Loader';
import { useSelector } from 'react-redux';
import { getUserInfo } from 'redux/user/selectors';
import Pet from '../Pet/Pet';
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
          {userPets.map(pet => (
            <Card key={pet._id}>
              <Pet userPet={pet} />
            </Card>
          ))}
        </StyledList>
      )}
    </>
  );
};

export default PetsList;
