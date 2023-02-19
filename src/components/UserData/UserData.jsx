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

import avatar from 'icons/temp-avatar.jpg';
import Logout from 'components/Logout';
import { useState } from 'react';
// import { useRef } from 'react';
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
  const [nameDisabled, setNameDisabled] = useState(true);
  const [emailDisabled, setEmailDisabled] = useState(true);
  const [birthdayDisabled, setBirthdayDisabled] = useState(true);
  const [phoneDisabled, setPhoneDisabled] = useState(true);
  const [cityDisabled, setCityDisabled] = useState(true);

  const [iconColor, setIconColor] = useState('#f59256');

  const [typeBtn, setTypeBtn] = useState('submit');
  // const [inputValue, setInputValue] = useState();

  // const ref = useRef(null);

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
  // const handleChange = e => {
  //   console.log(e.currentTarget.value);
  //   console.log(e.currentTarget);
  //   setInputValue(e.currentTarget.value);
  //   console.log(inputValue);
  // };

  const handleSubmit = value => {
    console.log(value);
    // console.log(actions);
  };

  const handleClick = (e, disabled, setDisabled, fieldValue) => {
    // const { type } = e.currentTarget;

    if (disabled) {
      setDisabled(false);
      setIconColor('rgba(17, 17, 17, 0.6)');
    } else {
      setDisabled(false);
      setIconColor('#f59256');
    }
    // if (type === 'button') {

    // }
    // console.log(name);

    // const handleSubmit = fieldValue => {
    //   console.log(fieldValue);
    //   // console.log(actions);
    // };

    setDisabled(!disabled);
    // if (disabled) {

    // }

    // setIsDisabled(!isDisabled);
    // console.log(e.currentTarget.id);
    // console.log(name);

    setTypeBtn(prevState => (prevState === 'submit' ? 'button' : 'submit'));
    // console.log(typeBtn);

    // if (!isDisabled || e.currentTarget.id) {
    // }
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
          {({ values }) => (
            <InfoForm autoComplete="off">
              <Label htmlFor="name">Name:</Label>
              <Input
                // id="name"
                type="text"
                name="name"
                // value={inputValue}
                // onChange={handleChange}
                disabled={nameDisabled}
                // touched="true"
              />
              <Button
                name="name"
                type={typeBtn}
                onClick={e =>
                  handleClick(e, nameDisabled, setNameDisabled, values.name)
                }
              >
                {nameDisabled ? <EditIcon fill={iconColor} /> : <CheckIcon />}
              </Button>
              {/* <ErrorText name="name" component="div" /> */}

              <Label htmlFor="email">Email:</Label>
              <Input
                type="text"
                name="email"
                // value={email}
                disabled={emailDisabled}
              />
              <Button
                name="email"
                type={typeBtn}
                onClick={e =>
                  handleClick(e, emailDisabled, setEmailDisabled, values.email)
                }
              >
                {emailDisabled ? <EditIcon fill={iconColor} /> : <CheckIcon />}
              </Button>
              {/* <ErrorText name="email" component="div" /> */}

              <Label htmlFor="birthday">Birthday:</Label>
              <Input
                type="text"
                name="birthday"
                // value={birthday}
                disabled={birthdayDisabled}
              />
              <Button
                name="birthday"
                type={typeBtn}
                onClick={e =>
                  handleClick(
                    e,
                    birthdayDisabled,
                    setBirthdayDisabled,
                    values.birthday
                  )
                }
              >
                {birthdayDisabled ? (
                  <EditIcon fill={iconColor} />
                ) : (
                  <CheckIcon />
                )}
              </Button>
              {/* <ErrorText name="birthday" component="div" /> */}

              <Label htmlFor="phone">Phone:</Label>
              <Input
                type="tel"
                name="phone"
                // value={phone}
                disabled={phoneDisabled}
              />
              <Button
                name="phone"
                type={typeBtn}
                onClick={e =>
                  handleClick(e, phoneDisabled, setPhoneDisabled, values.phone)
                }
              >
                {phoneDisabled ? <EditIcon fill={iconColor} /> : <CheckIcon />}
              </Button>
              {/* <ErrorText name="phone" component="div" /> */}

              <Label htmlFor="city">City:</Label>
              <Input
                type="text"
                name="city"
                // value={city}
                disabled={cityDisabled}
              />
              <Button
                name="city"
                type={typeBtn}
                onClick={e =>
                  handleClick(e, cityDisabled, setCityDisabled, values.city)
                }
              >
                {cityDisabled ? <EditIcon fill={iconColor} /> : <CheckIcon />}
              </Button>
              {/* <ErrorText name="city" component="div" /> */}
            </InfoForm>
          )}
        </Formik>
        <Logout />
      </InfoContainer>
    </UserInfoWrap>
  );
};

export default UserData;
