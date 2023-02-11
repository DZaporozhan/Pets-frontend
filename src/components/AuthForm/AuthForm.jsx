import {
  FormContainer,
  FormText,
  RegisterHeader,
  RegisterLink,
} from './AuthForm.styled';
import Login from './Login/Login';
import Registration from './Registration/Registration';
import { useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/auth/selectors';

const regisnrationPageLink = (
  <FormText>
    Don't have an account?
    <RegisterLink to="/register">Register</RegisterLink>
  </FormText>
);
const regisnrationLoginLink = (
  <FormText>
    Already have an account?
    <RegisterLink to="/login">Login</RegisterLink>
  </FormText>
);
const AuthForm = ({ type }) => {
  const isLoding = useSelector(selectIsLoading);
  return isLoding ? (
    <h1>loding...</h1>
  ) : (
    <FormContainer>
      <RegisterHeader>
        {type === 'login' ? 'Login' : 'Registration'}
      </RegisterHeader>
      {type === 'login' ? <Login /> : <Registration />}
      {type === 'login' ? regisnrationPageLink : regisnrationLoginLink}
    </FormContainer>
  );
};

export default AuthForm;
