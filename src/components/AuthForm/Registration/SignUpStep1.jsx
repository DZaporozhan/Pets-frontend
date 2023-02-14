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
    .email('Invalid email')
    .required('Email is required')
    .matches(emailRegexp, 'Must contain only latin letters'),
  password: Yup.string()
    .trim()
    .required('Password is required')
    .min(7, 'Password must have min 7 symbol')
    .max(32, 'Password must have max 32 symbol'),
  confirmPassword: Yup.string()
    .required('Email is required')
    .oneOf([Yup.ref('password'), null], 'Password is not coincide'),
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
