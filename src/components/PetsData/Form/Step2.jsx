import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  imageURL: Yup.mixed().required('Image is required!'),
  comments: Yup.string()
    .min(8, 'Must contain at least 8 characters')
    .max(120, 'Must be 120 characters or less')
    .required('Comments section is required!'),
});

const Step2 = ({ data, next, back }) => {
  const handleSubmit = values => {
    next(values, true);
  };
  const [image, setImage] = useState(null);

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={data}
      onSubmit={handleSubmit}
    >
      {formProps => (
        <Form encType="multipart/form-data">
          <label htmlFor="imageURL">Add photo and some comments</label>

          {formProps.values.imageURL === null ? (
            <Field
              id="imageURL"
              name="imageURL"
              type="file"
              accept=".png, .jpg, .jpeg"
              value={undefined}
              onChange={e => {
                const { files } = e.currentTarget;
                if (files) {
                  setImage(URL.createObjectURL(files[0]));
                  formProps.setFieldValue('imageURL', files[0]);
                  console.log(formProps.values.imageURL);
                }
              }}
            />
          ) : (
            <div>
              <img alt="pet" src={image} />
            </div>
          )}

          <ErrorMessage name="imageURL" />

          <label htmlFor="comments">Comments</label>
          <Field
            id="comments"
            name="comments"
            as="textarea"
            placeholder="Type comments"
          />
          <ErrorMessage name="comments" />

          <button
            type="button"
            onClick={() => {
              back(formProps.values);
              console.log(formProps.values.imageURL);
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
