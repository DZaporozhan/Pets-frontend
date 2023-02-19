import { useFormik } from 'formik';
import * as Yup from 'yup';

import {
  AuthButton,
  FirstInpError,
  FormInput,
  SecondInpError,
  ThirdInpError,
} from '../AuthForm.styled';
const emailRegexp =
  // eslint-disable-next-line no-useless-escape
  /^(?=.{10,63}$)(([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/;

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Please enter valid email')
    .required('Please enter your email')
    .matches(
      emailRegexp,
      'Please enter a valid value using English characters'
    ),
  password: Yup.string()
    .trim()
    .required('Please enter password')
    .min(7, 'Please enter at least 7 characters')
    .max(32, 'Name should be 32 characters or less'),
  confirmPassword: Yup.string()
    .required('Please enter your password again ')
    .oneOf(
      [Yup.ref('password'), null],
      'Password doesn’t match. Please, try again'
    ),
});

const SignUpStep1 = ({ data, onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      email: data.email || '',
      password: data.password || '',
      confirmPassword: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      if (values.password === values.confirmPassword) {
        onSubmit({
          email: values.email,
          password: values.password,
        });
      }
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <FormInput
        id="email"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        placeholder="Email"
      />
      {formik.touched.email && formik.errors.email && (
        <FirstInpError>{formik.errors.email}</FirstInpError>
      )}
      <FormInput
        id="password"
        name="password"
        type="password"
        autoComplete="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        placeholder="Password"
      />
      {formik.touched.password && formik.errors.password && (
        <SecondInpError>{formik.errors.password}</SecondInpError>
      )}
      <FormInput
        id="confirmPassword"
        name="confirmPassword"
        label="Confirm Password"
        type="password"
        autoComplete="password"
        value={formik.values.confirmPassword}
        onChange={formik.handleChange}
        placeholder="Confirm Password"
      />
      {formik.touched.confirmPassword && formik.errors.confirmPassword && (
        <ThirdInpError>{formik.errors.confirmPassword}</ThirdInpError>
      )}

      <AuthButton type="submit">Next</AuthButton>
    </form>
  );
};

export default SignUpStep1;
