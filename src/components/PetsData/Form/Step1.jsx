import { Formik } from 'formik';
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
    .min(2, 'Must contain at least 2 characters')
    .max(16, 'Must be 15 characters or less')
    .matches(inputReGeX, `Is not in correct format`)
    .required('Name is required!'),
  birthdate: Yup.date()
    .typeError('Please choose the date')
    .required(`Birthdate is required!`),
  breed: Yup.string()
    .min(2, 'Must contain at least 2 characters')
    .max(16, 'Must be 15 characters or less')
    .matches(inputReGeX, `Is not in correct format`)
    .required('Breed is required!'),
});

const Step1 = ({ data, next, onCancel }) => {
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
          <StyledError name="name" />

          <Label htmlFor="birthdate">Date of birth</Label>
          <DateInput
            id="birthdate"
            name="birthdate"
            type="date"
            placeholder="Type date of birth"
          />
          <StyledError name="birthdate" />

          <Label htmlFor="breed">Breed</Label>
          <TextInput id="breed" name="breed" placeholder="Type breed" />
          <StyledError name="breed" />
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
