import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
// import { getUserInfo } from 'redux/user/selectors';

import { Formik } from 'formik';
import * as yup from 'yup';
import {
  Button,
  CameraIcon,
  EditIcon,
  EditPhotoContainer,
  InfoContainer,
  // ErrorText,
  InfoForm,
  Input,
  InputPhoto,
  Label,
  AddPhoto,
  Thumb,
  UserAvatar,
  UserInfoWrap,
  IconWraper,
  CheckIcon,
} from './UserData.styled';

import avatar from './img/temp-avatar.jpg';
import Logout from 'components/Logout';
import { useState } from 'react';
// import { ReactComponent as SvgCross } from './img/svgCross.svg';

const nameRegExp = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const phoneRegExp =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

let schema = yup.object().shape({
  name: yup
    .string()
    .matches(
      nameRegExp,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required(),
  phone: yup
    .string()
    .matches(
      phoneRegExp,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required(),
});

let initialValues = {
  name: '',
  email: '',
  birthday: '',
  phone: '',
  city: '',
};

const UserData = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [inputValue, setInputValue] = useState();
  // const dispatch = useDispatch();

  // const { imageURL, name, email, birthday, phone, city } = useSelector(selectUser);
  const { name, email, birthday, phone, city } = useSelector(selectUser);

  initialValues = {
    name,
    email,
    birthday,
    phone,
    city,
  };

  // const handleChange = e => dispatch(setInputValue(e.currentTarget.value));
  const handleChange = e => {
    console.log(e.currentTarget.value);
    console.log(e.currentTarget);
    setInputValue(e.currentTarget.value);
  };

  const handleClick = e => {
    setIsDisabled(() => !isDisabled);
    console.log(e.currentTarget.id);

    if (!isDisabled || e.currentTarget.id) {
    }
  };

  const handleSubmit = value => {
    console.log(value);
  };

  ////////////////////////////
  // Червона консоль не працює
  // const user = useSelector(getUserInfo);
  // console.log(user);
  //
  // const {
  //   userInfo: { name, email, birthday, phone, city },
  // } = useSelector(getUserInfo);
  ////////////////////////////

  // const handleSubmit = value => {`
  //   dispatch(updateUser(value));
  // };

  return (
    <UserInfoWrap>
      <EditPhotoContainer>
        <Thumb>
          <UserAvatar
            // src={imageURL || avatar}
            src={avatar}
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
            />
            <IconWraper>
              <CameraIcon />
            </IconWraper>
            <span name="image">Edit photo</span>
          </AddPhoto>
        </Thumb>
      </EditPhotoContainer>

      <InfoContainer>
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={handleSubmit}
        >
          <InfoForm autoComplete="off">
            <Label htmlFor="name">Name:</Label>
            <Input
              id="name"
              type="text"
              name="name"
              // value={inputValue}
              onChange={handleChange}
              disabled={isDisabled}
              // touched="true"
            />
            <Button id="name" type="button" onClick={handleClick}>
              {isDisabled ? <EditIcon /> : <CheckIcon />}
            </Button>
            {/* <ErrorText name="name" component="div" /> */}

            <Label htmlFor="email">Email:</Label>
            <Input
              type="text"
              name="email"
              // value={email}
              disabled={isDisabled}
            />
            <Button id="email" type="button" onClick={handleClick}>
              {isDisabled ? <EditIcon /> : <CheckIcon />}
            </Button>
            {/* <ErrorText name="email" component="div" /> */}

            <Label htmlFor="birthday">Birthday:</Label>
            <Input
              type="text"
              name="birthday"
              // value={birthday}
              disabled={isDisabled}
            />
            <Button id="birthday" type="button" onClick={handleClick}>
              {isDisabled ? <EditIcon /> : <CheckIcon />}
            </Button>
            {/* <ErrorText name="birthday" component="div" /> */}

            <Label htmlFor="phone">Phone:</Label>
            <Input
              type="tel"
              name="phone"
              // value={phone}
              disabled={isDisabled}
            />
            <Button id="phone" type="button" onClick={handleClick}>
              {isDisabled ? <EditIcon /> : <CheckIcon />}
            </Button>
            {/* <ErrorText name="phone" component="div" /> */}

            <Label htmlFor="city">City:</Label>
            <Input
              type="text"
              name="city"
              // value={city}
              disabled={isDisabled}
            />
            <Button id="city" type="button" onClick={handleClick}>
              {isDisabled ? <EditIcon /> : <CheckIcon />}
            </Button>
            {/* <ErrorText name="city" component="div" /> */}
          </InfoForm>
        </Formik>
        <Logout />
      </InfoContainer>
    </UserInfoWrap>
  );
};

export default UserData;
