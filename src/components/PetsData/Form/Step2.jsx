import { ErrorMessage, Field, Formik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import {
  ActButton,
  ButtonWrapper,
  Label,
  StaledForm,
  TextAreaInput,
} from './ModalAddsPet.styled';

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
        <StaledForm encType="multipart/form-data">
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
                }
              }}
            />
          ) : (
            <div>
              <img alt="pet" src={image} />
            </div>
          )}
          <ErrorMessage name="imageURL" />

          <Label htmlFor="comments">Comments</Label>
          <TextAreaInput
            id="comments"
            name="comments"
            as="textarea"
            placeholder="Type comments"
          />
          <ErrorMessage name="comments" />

          <ButtonWrapper>
            <ActButton
              type="button"
              onClick={() => {
                back(formProps.values);
              }}
            >
              Back
            </ActButton>
            <ActButton type="submit">Done</ActButton>
          </ButtonWrapper>
        </StaledForm>
      )}
    </Formik>
  );
};

export default Step2;
