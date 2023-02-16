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
          <video
            loading="lazy"
            muted="muted"
            src="https://cdnl.iconscout.com/lottie/premium/thumb/cat-in-box-5159889-4309652.mp4"
            type="video/mp4"
            autoPlay="autoplay"
            width="200px"
            loop="loop"
          ></video>
          {/* <video
            loading="lazy"
            muted="muted"
            src="https://cdnl.iconscout.com/lottie/premium/thumb/error-404-5159890-4309653.mp4"
            type="video/mp4"
            autoPlay="autoplay"
            loop="loop"
          ></video> */}
          {/* </ImgWrap> */}
          {/* <picture>
            <source
              type="image/avif"
              srcset="https://cdni.iconscout.com/illustration/premium/thumb/unsubscribed-2511612-2133700.png?f=avif 1x, https://cdni.iconscout.com/illustration/premium/thumb/unsubscribed-2511612-2133700.png?f=avif 2x"
            ></source>
            <img
              alt="Unsubscribed Illustration"
              loading="lazy"
              src="https://cdni.iconscout.com/illustration/premium/thumb/unsubscribed-2511612-2133700.png?f=webp"
              srcset="https://cdni.iconscout.com/illustration/premium/thumb/unsubscribed-2511612-2133700.png?f=webp 1x, https://cdni.iconscout.com/illustration/premium/thumb/unsubscribed-2511612-2133700.png?f=webp 2x"
            ></img>
          </picture> */}
          {/* <video
            src="https://cdnl.iconscout.com/lottie/premium/preview-watermark/cat-in-box-5159889-4309652.mp4"
            autoPlay="autoplay"
            muted="muted"
            loop="loop"
            playsInline=""
            type="video/mp4"
          ></video> */}
          {/* <img
            src="https://cdna.iconscout.com/img/full-screen.0cca4a3.svg"
            alt="Full Screen"
            // class="fullScreen_yYb8C"
          ></img> */}
          {/* <img
            src="https://cdna.iconscout.com/img/full-screen.0cca4a3.svg"
            alt="Full Screen"
            // class="fullScreen_yYb8C"
          ></img> */}
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
