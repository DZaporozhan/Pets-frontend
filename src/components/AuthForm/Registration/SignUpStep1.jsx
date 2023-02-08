import { useFormik } from 'formik';
import * as Yup from 'yup';

import {
  AuthButton,
  FirstInpError,
  FormInput,
  SecondInpError,
  ThirdInpError,
} from '../AuthForm.styled';

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Неправильний поштовий адрес')
    .required('Це поле не може бути порожнім'),
  password: Yup.string()
    .trim()
    .required('Це поле не може бути порожнім')
    .min(7, 'Пароль містить мінімум 7 символів')
    .max(32, 'Пароль містить максимум 32 символи'),
  confirmPassword: Yup.string()
    .required('Це поле не може бути порожнім')
    .oneOf([Yup.ref('password'), null], 'Пароль не співпадає'),
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
