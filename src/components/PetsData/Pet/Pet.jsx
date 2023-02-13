import { RiDeleteBin6Fill } from 'react-icons/ri';
import { DeleteIcon, Text } from './Pet.styled';
import { IconContext } from 'react-icons';
import { useDispatch } from 'react-redux';
import { deletePet } from 'redux/user/operations';

const Pet = ({ userPet }) => {
  const dispatch = useDispatch();
  const { name, imageURL, birthdate, breed, comments, _id } = userPet;

  return (
    <>
      <div>
        <img
          src={`https://res.cloudinary.com/dqupdbup3/image/upload/${imageURL}`}
          alt={`Your pet ${name}`}
        />
      </div>
      <div>
        <div>
          <Text>Name: {name}</Text>
          <Text>Date of birth: {birthdate}</Text>
          <Text>Breed: {breed}</Text>
          <Text>Comments: {comments}</Text>
        </div>
        <IconContext.Provider
          value={{ color: 'rgba(17, 17, 17, 0.6)', size: '1.5em' }}
        >
          <DeleteIcon type="button" onClick={() => dispatch(deletePet(_id))}>
            <RiDeleteBin6Fill />
          </DeleteIcon>
        </IconContext.Provider>
      </div>
    </>
  );
};

export default Pet;
