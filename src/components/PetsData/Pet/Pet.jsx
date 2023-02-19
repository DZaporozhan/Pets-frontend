import {
  Btn,
  DeleteIcon,
  Img,
  ImgWrapper,
  Text,
  TextWrapper,
} from './Pet.styled';
import { useDispatch } from 'react-redux';
import { deletePet, updateImage } from 'redux/user/operations';
import { HiTrash } from 'react-icons/hi2';
import { useRef, useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Form, Formik } from 'formik';

const Pet = ({ userPet }) => {
  const dispatch = useDispatch();
  const { name, imageURL, birthdate, breed, comments, _id } = userPet;
  const fileRef = useRef(null);
  const [image, setImage] = useState(null);

  function onChangeHandler(e) {
    if (image !== null) {
      const data = new FormData();
      data.append('imageURL', image);

      try {
        dispatch(updateImage({ id: _id, file: data }));
      } catch (error) {
        console.log('error on submit', error.message);
        Notify.failure(error.message);
      }
    }
  }

  return (
    <>
      <ImgWrapper>
        <Formik initialValues={{ image: '' }} onSubmit={onChangeHandler}>
          {formik => (
            <Form action="">
              <input
                ref={fileRef}
                hidden
                name="petImage"
                type="file"
                accept=".png, .jpg, .jpeg"
                value={undefined}
                onChange={async e => {
                  const { files } = e.currentTarget;
                  const file = files[0];
                  if (!file) return;
                  if (file === image) {
                    Notify.info('You trying to add the same image');
                    return;
                  }
                  setImage(file);
                  await formik.submitForm();
                }}
              />
              <Btn
                type="button"
                onClick={() => {
                  fileRef.current.click();
                }}
              >
                <Img
                  src={`https://res.cloudinary.com/dqupdbup3/image/upload/${imageURL}`}
                  alt={`Your pet ${name}`}
                />
              </Btn>
            </Form>
          )}
        </Formik>
      </ImgWrapper>

      <TextWrapper>
        <Text>Name: {name}</Text>
        <Text>Date of birth: {birthdate}</Text>
        <Text>Breed: {breed}</Text>
        <Text>Comments: {comments}</Text>
      </TextWrapper>

      <DeleteIcon type="button" onClick={() => dispatch(deletePet(_id))}>
        <HiTrash style={{ width: 20, height: 20 }} />
      </DeleteIcon>
    </>
  );
};

export default Pet;
