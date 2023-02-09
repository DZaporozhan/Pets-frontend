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

const validationSchema = Yup.object({
  name: Yup.string()
    .required('Це поле не може бути порожнім')
    .matches(/^[а-яА-ЯїЇіІЁёa-zA-Z]+$/, 'Тільки літери'),
  city: Yup.string()
    .required('Це поле не може бути порожнім')
    .matches(/[A-Z][a-z]+, [A-Z][a-z]*/, 'Введіть в форматі: місто, область'),
  phone: Yup.string()
    .required('Це поле не може бути порожнім')
    .matches(/^\+380\d{9}$/, 'Неправильний номер телефону'),
});

const SignUpStep2 = ({ data, onBack }) => {
  const { email, password } = data;
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
      formik.resetForm();
    },
  });

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
      <BackButton type="button" onClick={onBack}>
        Back
      </BackButton>
    </form>
  );
};

export default SignUpStep2;
