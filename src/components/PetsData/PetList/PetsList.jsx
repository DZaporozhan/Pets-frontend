import { Loader } from 'components/Loader/Loader';
import { useSelector } from 'react-redux';
import { getUserInfo } from 'redux/user/selectors';
import Pet from '../Pet/Pet';
import { Card, EmptyTitle, ImgWrap, StyledList, Text } from './PetsList.styled';

const PetsList = () => {
  const userInfo = useSelector(getUserInfo);
  const userPets = userInfo.userPets;

  return (
    <>
      {Object.keys(userInfo).length === 0 ? (
        <Loader />
      ) : !userPets.length ? (
        <ImgWrap>
          <EmptyTitle>Your pets folder is Empty</EmptyTitle>
          <Text>
            Please, add information about your loved ones by clicking on button
            above
          </Text>
          <img
            src="https://s9.gifyu.com/images/ezgif.com-optimize01c8bfa89492d795.gif"
            alt="No pets yet"
            width="200px"
          />
          {/* <video
            loading="lazy"
            muted="muted"
            src="https://cdnl.iconscout.com/lottie/premium/thumb/cat-in-box-5159889-4309652.mp4"
            type="video/mp4"
            autoPlay="autoplay"
            width="200px"
            loop="loop"
          ></video> */}
        </ImgWrap>
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
