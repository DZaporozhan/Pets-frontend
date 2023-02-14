import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/operations';
import * as Yup from 'yup';

import {
  AuthButton,
  FirstInpError,
  FormInput,
  SecondInpError,
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
});

const Login = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async values => {
      dispatch(
        login({
          email: values.email,
          password: values.password,
        })
      );

      formik.resetForm();
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
      <AuthButton type="submit">Login</AuthButton>
    </form>
  );
};

export default Login;
