import AuthForm from 'components/AuthForm/AuthForm';
import { Main } from './LoginPage.styled';

const LoginPage = () => {
  return (
    <Main>
      <AuthForm type="login" />
    </Main>
  );
};

export default LoginPage;
