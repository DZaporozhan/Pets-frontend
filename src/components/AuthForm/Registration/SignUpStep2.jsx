import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import {
  AuthButton,
  BackButton,
  FirstInpError,
  SecondInpError,
  ThirdInpError,
  FormInput,
} from '../AuthForm.styled';
import { register } from 'redux/auth/operations';

const nameRegexp = /^(?=.{2,16}$)([A-Za-z])*$/;
const cityRegEx = /^[-a-z]+(?:(?:(,\s|,)[-a-z]+))$/i;

const validationSchema = Yup.object({
  name: Yup.string()
    .required('Name is required')
    .matches(nameRegexp, 'Must contain only latin letters')
    .min(2, 'Name must have min 2 letters')
    .max(16, 'Name must have max 16 letters'),
  city: Yup.string()
    .required('City is required')
    .matches(cityRegEx, 'Entered city should have the format: City, Region'),
  phone: Yup.string()
    .required('Phone is required')
    .matches(/^\+380\d{9}$/, 'Entered phote should have the format: +380()'),
});

const SignUpStep2 = ({ data, step1, onBack }) => {
  const { email, password } = step1;
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: data.name || '',
      city: data.city || '',
      phone: data.phone || '',
    },
    validationSchema: validationSchema,
    onSubmit: async values => {
      dispatch(
        register({
          email,
          password,
          name: values.name,
          city: values.city,
          phone: values.phone,
        })
      );
    },
  });

  const reqData = {
    name: formik.values.name,
    city: formik.values.city,
    phone: formik.values.phone,
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormInput
        id="name"
        name="name"
        placeholder="Name"
        value={formik.values.name}
        onChange={formik.handleChange}
      />
      {formik.touched.name && formik.errors.name && (
        <FirstInpError>{formik.errors.name}</FirstInpError>
      )}
      <FormInput
        id="city"
        name="city"
        placeholder="City, region"
        value={formik.values.city}
        onChange={formik.handleChange}
      />
      {formik.touched.city && formik.errors.city && (
        <SecondInpError>{formik.errors.city}</SecondInpError>
      )}
      <FormInput
        id="phone"
        name="phone"
        type="phone"
        autoComplete="phone"
        placeholder="Phone"
        value={formik.values.phone}
        onChange={formik.handleChange}
      />{' '}
      {formik.touched.phone && formik.errors.phone && (
        <ThirdInpError>{formik.errors.phone}</ThirdInpError>
      )}
      <AuthButton type="submit">Register</AuthButton>
      <BackButton type="button" onClick={() => onBack(reqData)}>
        Back
      </BackButton>
    </form>
  );
};

export default SignUpStep2;
