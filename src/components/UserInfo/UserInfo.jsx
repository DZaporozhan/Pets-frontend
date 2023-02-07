import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { Button, ErrorText, Input, Label } from './UserInfo.styled';

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

const UserInfo = () => {
  //   return const dispatch = useDispatch();

  //   const handleSubmit = value => {
  //     dispatch(updateUser(value));
  //   };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      //   onSubmit={handleSubmit}
    >
      <Form autoComplete="off">
        <Label htmlFor="imageURL">
          Avatar
          <Input type="file" name="imageURL" />
          <Button type="submit">
            <span>Logout</span>
          </Button>
          <ErrorText name="imageURL" component="div" />
        </Label>
        <Label htmlFor="name">
          Name
          <Input type="text" name="name" />
          <Button type="submit">
            <span>icon</span>
          </Button>
          <ErrorText name="name" component="div" />
        </Label>
        <Label htmlFor="email">
          Email
          <Input type="text" name="email" />
          <Button type="submit">
            <span>icon</span>
          </Button>
          <ErrorText name="email" component="div" />
        </Label>
        <Label htmlFor="birthday">
          Birthday
          <Input type="text" name="birthday" />
          <Button type="submit">
            <span>icon</span>
          </Button>
          <ErrorText name="birthday" component="div" />
        </Label>
        <Label htmlFor="phone">
          Phone
          <Input type="tel" name="phone" />
          <Button type="submit">
            <span>icon</span>
          </Button>
          <ErrorText name="phone" component="div" />
        </Label>
        <Label htmlFor="city">
          City
          <Input type="text" name="city" />
          <Button type="submit">
            <span>icon</span>
          </Button>
          <ErrorText name="city" component="div" />
        </Label>
        <Button type="submit">
          <span>Log Out</span>
        </Button>
      </Form>
    </Formik>
  );
};

export default UserInfo;
