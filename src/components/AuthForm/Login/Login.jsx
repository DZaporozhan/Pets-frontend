import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/operations';
import * as Yup from 'yup';
import { NavLink } from 'react-router-dom';

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
    .email('Please enter your registered email')
    .required('Please enter your email')
    .matches(
      emailRegexp,
      'Please enter a valid value using English characters'
    ),
  password: Yup.string()
    .trim()
    .required('Please enter password')
    .min(7, 'The password you entered is incorrect. Please try again')
    .max(32, 'The password you entered is incorrect. Please try again'),
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
    <>
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
      <NavLink to={'http://localhost:65000/api/auth/google'}>
        Click me to authorize with Google!
      </NavLink>
    </>
  );
};

export default Login;
