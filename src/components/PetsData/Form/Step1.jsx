import { ErrorMessage, Formik } from 'formik';
import * as Yup from 'yup';
import {
  ActButton,
  ButtonWrapper,
  DateInput,
  Label,
  StaledForm,
  StyledError,
  TextInput,
} from './ModalAddsPet.styled';

const inputReGeX = /^[aA-zZ\s]+$/;
const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Please enter at least 2 characters')
    .max(16, 'Name should be 15 characters or less')
    .matches(inputReGeX, `Please enter a valid value using English characters`)
    .required(`Please enter your pet's name`),
  birthdate: Yup.date()
    .typeError('Please choose the date')
    .required(`Please enter your pet's date of birth`),
  breed: Yup.string()
    .min(2, 'Please enter at least 2 characters')
    .max(16, 'Breed should be 15 characters or less')
    .matches(inputReGeX, `Please enter a valid value using English characters`)
    .required(`Please enter your pet's breed`),
});

const Step1 = ({ data, next, onCancel }) => {
  const today = new Date().toISOString().split('T')[0];

  const handleSubmit = values => {
    next(values);
  };

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={data}
      onSubmit={handleSubmit}
    >
      {() => (
        <StaledForm>
          <Label htmlFor="name">Name pet</Label>
          <TextInput id="name" name="name" placeholder="Type name pet" />
          <ErrorMessage
            name="name"
            render={message => (
              <StyledError style={{ color: 'red' }}>{message}</StyledError>
            )}
          />

          <Label htmlFor="birthdate">Date of birth</Label>
          <DateInput
            id="birthdate"
            name="birthdate"
            type="date"
            min="1950-01-01"
            max={today}
            placeholder="Type date of birth"
          />
          <ErrorMessage
            name="birthdate"
            render={message => (
              <StyledError style={{ color: 'red' }}>{message}</StyledError>
            )}
          />

          <Label htmlFor="breed">Breed</Label>
          <TextInput id="breed" name="breed" placeholder="Type breed" />
          <ErrorMessage
            name="breed"
            render={message => (
              <StyledError style={{ color: 'red' }}>{message}</StyledError>
            )}
          />

          <ButtonWrapper>
            <ActButton type="button" onClick={onCancel}>
              Cancel
            </ActButton>
            <ActButton type="submit">Next</ActButton>
          </ButtonWrapper>
        </StaledForm>
      )}
    </Formik>
  );
};

export default Step1;
