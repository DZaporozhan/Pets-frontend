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
} from './UserData.styled';

import avatar from './img/temp-avatar.jpg';
import Logout from 'components/Logout';
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

const initialValues = {
  name: '',
  email: '',
  birthday: '',
  phone: '',
  city: '',
};

const UserData = () => {
  // const dispatch = useDispatch();

  const { imageURL, name, email, birthday, phone, city } =
    useSelector(selectUser);

  // const user = useSelector(getUserInfo);
  // console.log(user);

  // Червона консоль не працює
  // const {
  //   imageURL,
  //   userInfo: { name, email, birthday, phone, city },
  // } = useSelector(getUserInfo);
  ////////////////////////////

  // const handleSubmit = value => {
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
          //   onSubmit={handleSubmit}
        >
          <InfoForm autoComplete="off">
            <Label htmlFor="name">Name:</Label>
            <Input type="text" name="name" value={name} />
            <Button type="button">
              <EditIcon />
            </Button>
            {/* <ErrorText name="name" component="div" /> */}

            <Label htmlFor="email">Email:</Label>
            <Input type="text" name="email" value={email} />
            <Button type="button">
              <EditIcon />
            </Button>
            {/* <ErrorText name="email" component="div" /> */}

            <Label htmlFor="birthday">Birthday:</Label>
            <Input type="text" name="birthday" value={birthday} />
            <Button type="button">
              <EditIcon />
            </Button>
            {/* <ErrorText name="birthday" component="div" /> */}

            <Label htmlFor="phone">Phone:</Label>
            <Input type="tel" name="phone" value={phone} />
            <Button type="button">
              <EditIcon />
            </Button>
            {/* <ErrorText name="phone" component="div" /> */}

            <Label htmlFor="city">City:</Label>
            <Input type="text" name="city" value={city} />
            <Button type="button">
              <EditIcon />
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
