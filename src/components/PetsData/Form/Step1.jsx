import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

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
  // .min('1979-11-13', 'Date is too early'),
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
        <Form>
          <label htmlFor="name">Name pet</label>
          <Field id="name" name="name" placeholder="Type name pet" />
          <ErrorMessage name="name" />

          <label htmlFor="birthdate">Date of birth</label>
          <Field
            id="birthdate"
            name="birthdate"
            type="date"
            placeholder="Type date of birth"
          />
          <ErrorMessage name="birthdate" />

          <label htmlFor="breed">Breed</label>
          <Field id="breed" name="breed" placeholder="Type breed" />
          <ErrorMessage name="breed" />

          <button type="button" onClick={onCancel}>
            Cancel
          </button>
          <button type="submit">Next button submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default Step1;
