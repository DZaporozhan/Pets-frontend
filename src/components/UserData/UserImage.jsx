import {
  CameraIcon,
  InputPhoto,
  AddPhoto,
  UserAvatar,
  IconWraper,
} from './UserData.styled';

import avatar from 'icons/temp-avatar.jpg';
import { updateAvatar } from 'redux/user/operations';
import { useDispatch, useSelector } from 'react-redux';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Form, Formik } from 'formik';
import { useState } from 'react';
import { getUserInfo } from 'redux/user/selectors';

const UserImage = () => {
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);

  const { imageURL } = useSelector(getUserInfo);

  const onChangeHandler = () => {
    if (image !== null) {
      const data = new FormData();
      data.append('imageURL', image);

      try {
        dispatch(updateAvatar({ file: data }));
      } catch (error) {
        console.log('error on submit', error.message);
        Notify.failure(error.message);
      }
    }
  };

  return (
    <Formik initialValues={{ imageURL: '' }} onSubmit={onChangeHandler}>
      {formik => (
        <Form>
          <UserAvatar
            src={
              imageURL === ''
                ? avatar
                : `https://res.cloudinary.com/dqupdbup3/image/upload/${imageURL}`
            }
            alt="User avatar"
            loading="lazy"
            width="233"
            height="233"
          />
          <AddPhoto htmlFor="user-photo">
            <InputPhoto
              id="user-photo"
              type="file"
              accept="image/*"
              name="user-photo"
              onChange={async e => {
                const { files } = e.currentTarget;
                const file = files[0];
                if (!file) return;
                setImage(file);
                await formik.submitForm();
              }}
            />
            <IconWraper>
              <CameraIcon />
            </IconWraper>
            <span name="image">Edit photo</span>
          </AddPhoto>
        </Form>
      )}
    </Formik>
  );
};

export default UserImage;
