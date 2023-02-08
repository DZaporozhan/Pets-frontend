import { useFormik } from 'formik';
import * as Yup from 'yup';

import {
  AuthButton,
  FirstInpError,
  FormInput,
  SecondInpError,
} from '../AuthForm.styled';

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Email містить помилки')
    .required('Це поле не може бути порожнім'),
  password: Yup.string()
    .required('Це поле не може бути порожнім')
    .min(7, 'Пароль містить мінімум 7 символів')
    .max(32, 'Пароль містить максимум 32 символи'),
});

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async values => {
      try {
        console.log({
          email: values.email,
          password: values.password,
        });
      } catch (error) {}
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
