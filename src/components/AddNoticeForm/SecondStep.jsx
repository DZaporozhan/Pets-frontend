import { ErrorMessage, Formik, useField } from 'formik';
import { useRef, useState } from 'react';
import * as Yup from 'yup';
import { ReactComponent as CrossPic } from '../../icons/Vectorcross.svg';
import {
  ActButton,
  ButtonWrapper,
  Image,
  ImageBtn,
  ImageExample,
  ImageLabel,
  ImageWrapper,
  Label,
  PhotoPetText,
  StaledForm,
  StyledError,
  TextAreaInput,
} from '../PetsData/Form/ModalAddsPet.styled';

const validationSchema = Yup.object({
  imageURL: Yup.mixed().required(`Please upload your pet's photo`),
  comments: Yup.string()
    .min(8, 'Please enter at least 8 characters')
    .max(120, 'Comments should be 120 characters or less')
    .required('Comments section is required!'),
});

const Step2 = ({ data, next, back }) => {
  const handleSubmit = values => {
    next(values, true);
  };
  const [image, setImage] = useState(null);
  const fileRef = useRef(null);

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={data}
      onSubmit={handleSubmit}
    >
      {formProps => (
        <StaledForm encType="multipart/form-data">
          <ImageLabel>Add photo and some comments</ImageLabel>

          {/* <ImageWrapper>
            <div>
              <PhotoPetText
                ref={fileRef}
                hidden
                id="imageURL"
                name="imageURL"
                type="file"
                accept=".png, .jpg, .jpeg"
                value={undefined}
                onChange={e => {
                  const { files } = e.currentTarget;
                  if (!files || !files[0]) {
                    return;
                  } else {
                    setImage(URL.createObjectURL(files[0]));
                    formProps.setFieldValue('imageURL', files[0]);
                  }
                }}
              />
              <ImageBtn
                type="button"
                onClick={() => {
                  fileRef.current.click();
                }}
              >
                {formProps.values.imageURL ? (
                  <ImageExample>
                    <Image
                      alt="pet"
                      src={
                        image === null
                          ? URL.createObjectURL(formProps.values.imageURL)
                          : image
                      }
                    />
                  </ImageExample>
                ) : (
                  <CrossPic width="48" height="48" fill="none" />
                )}
              </ImageBtn>
            </div>
          </ImageWrapper>
          <ErrorMessage
            name="imageURL"
            render={message => (
              <StyledError style={{ color: 'red' }}>{message}</StyledError>
            )}
          /> */}

          <Label htmlFor="comments">Comments</Label>
          <MyFormikTextareaField fieldName={'comments'} />
          <ErrorMessage
            name="comments"
            render={message => (
              <StyledError style={{ color: 'red' }}>{message}</StyledError>
            )}
          />

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

export function MyFormikTextareaField({ fieldName }) {
  const [field, meta] = useField(fieldName);

  return (
    <TextAreaInput
      value={meta.value}
      onChange={field.onChange}
      placeholder={`Type some ${fieldName}`}
      id={fieldName}
      name={fieldName}
    />
  );
}

export default Step2;
