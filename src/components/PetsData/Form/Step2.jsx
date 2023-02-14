import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  imageURL: Yup.string().required('Image is required!'),
  comments: Yup.string()
    .min(8, 'Must contain at least 8 characters')
    .max(120, 'Must be 120 characters or less')
    .required('Comments section is required!'),
});

const Step2 = ({ data, next, back }) => {
  const handleSubmit = values => {
    next(values, true);
  };

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={data}
      onSubmit={handleSubmit}
    >
      {({ values }) => (
        <Form>
          <label htmlFor="imageURL">Add photo and some comments</label>
          <Field id="imageURL" name="imageURL" type="file" />
          <ErrorMessage name="imageURL" />

          <label htmlFor="comments">Comments</label>
          <Field id="comments" name="comments" placeholder="Type comments" />
          <ErrorMessage name="comments" />

          <button
            type="button"
            onClick={() => {
              back(values);
            }}
          >
            Back
          </button>
          <button type="submit">Done</button>
        </Form>
      )}
    </Formik>
  );
};

export default Step2;
