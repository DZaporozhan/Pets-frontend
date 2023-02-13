import { Field, Form, Formik } from 'formik';
import React from 'react';
import { useState } from 'react';
import * as Yup from 'yup';

const AddPetModal = ({ onClose }) => {
  const initialValues = {
    name: '',
    birthdate: '',
    breed: '',
    comments: '',
    imageURL: '',
  };
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, 'Must contain at least 2 characters')
      .max(16, 'Must be 15 characters or less')
      .required('Required'),
    birthdate: Yup.date()
      .typeError('Please choose the date')
      .required()
      .min('1979-11-13', 'Date is too early'),
    breed: Yup.string()
      .min(2, 'Must contain at least 2 characters')
      .max(16, 'Must be 15 characters or less')
      .required('Required'),
    comments: Yup.string()
      .min(8, 'Must contain at least 8 characters')
      .max(120, 'Must be 120 characters or less')
      .required('Required'),
    imageURL: Yup.string().required('Required'),
  });

  return (
    <>
      <h2>Add pet</h2>
      <FormikStepper
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={() => {
          console.log(`Hello`);
        }}
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
          <Field name="imageURL" placeholder="Type name pet" type="file" />
          <label htmlFor="comments">Comments</label>
          <Field name="comments" as="textarea" placeholder="Type comments" />
        </FormikStep>
      </FormikStepper>
    </>
  );
};

export function FormikStep({ children, ...props }) {
  return <>{children}</>;
}

export function FormikStepper({ children, ...props }) {
  console.log(props);
  const childrenArray = React.Children.toArray(children);
  console.log(childrenArray);
  const [step, setStep] = useState(0);
  const currentChild = childrenArray[step];
  //   const isLastStep = () => {
  //     return step === childrenArray.length - 1;
  //   };

  const handleCancel = () => {
    console.log(Formik.values);
  };

  return (
    <Formik
      {...props}
      //       async (values, helpers) => {
      // console.log(`isLast Step`);
      // if (isLastStep()) {
      //   const response = await props.onSubmit(values, helpers);
      //   console.log(response);
      // } else {
      //   setStep(step => step + 1);
      //   console.log(`change step`);
      // }
      //       }
    >
      <Form autoComplete="off">
        {currentChild}

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
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        )}
        <button type="subm it" onClick={onClose()}>
          {step === childrenArray.length - 1 ? 'Done' : 'Next'}
        </button>
      </Form>
    </Formik>
  );
}

export default AddPetModal;
