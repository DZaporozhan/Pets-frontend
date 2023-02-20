import AuthForm from 'components/AuthForm/AuthForm';
import { Main } from './RegisterPage.styled';

const RegisterPage = () => {
  return (
    <Main>
      <AuthForm type="register" />
    </Main>
  );
};

export default RegisterPage;
