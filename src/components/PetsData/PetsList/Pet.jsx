import { RiDeleteBin6Fill } from 'react-icons/ri';

const Pet = ({ userPet }) => {
  const { name, imageURL, birthdate, breed, comments } = userPet;
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
          <p>Name: {name}</p>
          <p>Date of birth: {birthdate}</p>
          <p>Breed: {breed}</p>
          <p>Comments: {comments}</p>
        </div>
        <button type="button">
          <RiDeleteBin6Fill />
        </button>
      </div>
    </>
  );
};

export default Pet;
