import { RiDeleteBin6Fill } from 'react-icons/ri';
import {
  Btn,
  DeleteIcon,
  Img,
  // ImgWrapper,
  Text,
  TextWrapper,
} from './Pet.styled';
import { IconContext } from 'react-icons';
import { useDispatch } from 'react-redux';
import { deletePet } from 'redux/user/operations';

const Pet = ({ userPet }) => {
  const dispatch = useDispatch();
  const { name, imageURL, birthdate, breed, comments, _id } = userPet;

  return (
    <>
      {/* <ImgWrapper> */}
      <Btn>
        <Img
          src={`https://res.cloudinary.com/dqupdbup3/image/upload/${imageURL}`}
          alt={`Your pet ${name}`}
        />
      </Btn>
      {/* </ImgWrapper> */}

      <TextWrapper>
        <Text>Name: {name}</Text>
        <Text>Date of birth: {birthdate}</Text>
        <Text>Breed: {breed}</Text>
        <Text>Comments: {comments}</Text>
      </TextWrapper>
      <IconContext.Provider
        value={{ color: 'rgba(17, 17, 17, 0.6)', size: '1.5em' }}
      >
        <DeleteIcon type="button" onClick={() => dispatch(deletePet(_id))}>
          <RiDeleteBin6Fill />
        </DeleteIcon>
      </IconContext.Provider>
    </>
  );
};

export default Pet;
