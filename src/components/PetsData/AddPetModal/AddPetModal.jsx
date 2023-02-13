import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

const AddPetModal = () => {
  const initialValues = {
    name: '',
    birthdate: '',
    breed: '',
    comments: '',
    imageURL: '',
  };
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, 'Must contain at least 2 letters')
      .max(16, 'Must be 15 characters or less')
      .required('Required'),
    // birthdate: Yup.date()
    //   .transform(function (value, originalValue) {
    //     if (this.isType(value)) {
    //       return value;
    //     }
    //     const result = parse(originalValue, 'dd.MM.yyyy', new Date());
    //     return result;
    //   })
    //   .typeError('please enter a valid date')
    //   .required()
    //   .min('1969-11-13', 'Date is too early'),
    breed: Yup.string().required('Required'),
    comments: Yup.string().required('Required'),
    imageURL: Yup.string().required('Required'),
  });

  return (
    <>
      <h2>Add pet</h2>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={() => {}}
      >
        <Form autoComplete="off">
          <Field name="petName" label="Name pet" placeholder="Type name pet" />
          <Field
            name="birthdate"
            type="date"
            label="Date of birth"
            placeholder="Type date of birth"
          />
          <Field name="breed" label="Breed" placeholder="Type breed" />
          <Field
            name="imageURL"
            label="Add photo and some comments"
            placeholder="Type name pet"
            type="file"
          />
          <Field name="comments" label="Comments" placeholder="Type comments" />
        </Form>
      </Formik>
      <div>
        <button>Cancel</button>
        <button>Next</button>
      </div>
    </>
  );
};

export default AddPetModal;
