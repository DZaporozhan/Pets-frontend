import { Field, Form, Formik } from 'formik';
import React from 'react';
import { useState } from 'react';
import * as Yup from 'yup';

const AddPetModal = ({ onClose }) => {
  const initialValues = {
    name: 'terst',
    birthdate: '',
    breed: '',
    comments: '',
    imageURL: '',
  };
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, 'Must contain at least 2 characters')
      .max(16, 'Must be 15 characters or less'),
    //   .required('Required'),
    birthdate: Yup.date()
      .typeError('Please choose the date')
      //   .required(`Required`)
      .min('1979-11-13', 'Date is too early'),
    breed: Yup.string()
      .min(2, 'Must contain at least 2 characters')
      .max(16, 'Must be 15 characters or less'),
    //   .required('Required'),
    comments: Yup.string()
      .min(8, 'Must contain at least 8 characters')
      .max(120, 'Must be 120 characters or less')
      .required('Required'),
    imageURL: Yup.string().required('Required'),
  });
  //   const handleSubmit = async values => {
  //     console.log(values);
  //   };

  return (
    <>
      <h2>Add pet</h2>
      <FormikStepper
        validationSchema={validationSchema}
        initialValues={initialValues}
        onCancel={onClose}
        // onSubmit={handleSubmit}
      >
        <FormikStep>
          <label htmlFor="name">Name pet</label>
          <Field name="name" placeholder="Type name pet" />
          <label htmlFor="birthdate">Date of birth</label>
          <Field
            name="birthdate"
            type="date"
            placeholder="Type date of birth"
          />
          <label htmlFor="breed">Breed</label>
          <Field name="breed" placeholder="Type breed" />
        </FormikStep>
        <FormikStep>
          <label htmlFor="imageURL">Add photo and some comments</label>
          <Field name="imageURL" placeholder="Choose a photo" type="file" />
          <label htmlFor="comments">Comments</label>
          <Field name="comments" as="textarea" placeholder="Type comments" />
          <button type="submit">Done</button>
        </FormikStep>
      </FormikStepper>
    </>
  );
};

export function FormikStep({ children, ...props }) {
  return <>{children}</>;
}

export function FormikStepper({ children, onCancel, ...props }) {
  //   const formik = useFormikContext();
  console.log(props);
  //   console.log(formik);
  const childrenArray = React.Children.toArray(children);

  const [step, setStep] = useState(0);
  const currentChild = childrenArray[step];
  //   const isLastStep = () => {
  //     return step === childrenArray.length - 1;
  //   };

  //   const handleCancel = () => {
  //     console.log(Formik.values);
  //   };
  return (
    <Formik
      {...props}
      //   onSubmit={async (values, helpers) => {
      //     console.log(`isLast Step`);
      //     if (step === childrenArray.length - 1) {
      //       const response = await props.onSubmit(values, helpers);
      //       console.log(response);
      //     } else {
      //       setStep(step => step + 1);
      //       console.log(`change step`);
      //     }
      //   }}
    >
      <Form autoComplete="off">
        {currentChild}
        <div>
          {step > 0 ? (
            <button
              type="button"
              onClick={() => {
                setStep(step => step - 1);
              }}
            >
              Back
            </button>
          ) : (
            <button type="button" onClick={onCancel}>
              Cancel
            </button>
          )}
          {/* {step === childrenArray.length - 1 ? (
            <button type="submit" onClick={onSubmit}>
              Done
            </button>
          ) : (
            <button
              type="button"
              onClick={() => {
                setStep(step => step + 1);
              }}
            >
              Next
            </button>
          )} */}
          {/* <button type="submit">
            {step === childrenArray.length - 1 ? 'Done' : 'Next'}
          </button> */}
        </div>
      </Form>
    </Formik>
  );
}

export default AddPetModal;
