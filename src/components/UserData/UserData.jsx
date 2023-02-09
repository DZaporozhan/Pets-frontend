import { Formik } from 'formik';
import * as yup from 'yup';
import {
  Button,
  EditIcon,
  EditPhotoContainer,
  // ErrorText,
  InfoForm,
  Input,
  InputPhoto,
  Label,
  LabelPhoto,
  Thumb,
} from './UserData.styled';
// import { HiCamera } from 'react-icons/hi2';
import { ReactComponent as SvgCamera } from './img/svgCamera.svg';
import { ReactComponent as SvgEdit } from './img/svgEdit.svg';
import avatar from './img/user-avatar.jpg';

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
  //   return const dispatch = useDispatch();

  //   const handleSubmit = value => {
  //     dispatch(updateUser(value));
  //   };

  return (
    <>
      <Thumb>
        <img src={avatar} alt="User avatar" loading="lazy" width="233" />
      </Thumb>
      <EditPhotoContainer>
        <LabelPhoto htmlFor="user-photo">
          <InputPhoto
            id="user-photo"
            type="file"
            accept="image/*"
            name="user-photo"
          />
          <span name="image">Edit photo</span>
          <SvgCamera />
        </LabelPhoto>
      </EditPhotoContainer>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        //   onSubmit={handleSubmit}
      >
        <InfoForm autoComplete="off">
          <Label htmlFor="name">Name:</Label>
          <Input type="text" name="name" value={'Anna'} />
          <Button type="button">
            <EditIcon width="12px" height="12px" />
          </Button>
          {/* <ErrorText name="name" component="div" /> */}

          <Label htmlFor="email">Email:</Label>
          <Input type="text" name="email" value={'anna00@gmail.com'} />
          <Button type="button">
            <SvgEdit />
          </Button>
          {/* <ErrorText name="email" component="div" /> */}

          <Label htmlFor="birthday">Birthday:</Label>
          <Input type="text" name="birthday" value={'00.00.0000'} />
          <Button type="button">
            <SvgEdit />
          </Button>
          {/* <ErrorText name="birthday" component="div" /> */}

          <Label htmlFor="phone">Phone:</Label>
          <Input type="tel" name="phone" value={'+38000000000'} />
          <Button type="button">
            <SvgEdit />
          </Button>
          {/* <ErrorText name="phone" component="div" /> */}

          <Label htmlFor="city">City:</Label>
          <Input type="text" name="city" value={'Kiev'} />
          <Button type="button">
            <SvgEdit />
          </Button>
          {/* <ErrorText name="city" component="div" /> */}
        </InfoForm>
      </Formik>
    </>
  );
};

export default UserData;
