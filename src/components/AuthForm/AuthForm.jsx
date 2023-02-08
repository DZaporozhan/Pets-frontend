import {
  FormContainer,
  FormText,
  RegisterHeader,
  RegisterLink,
} from './AuthForm.styled';
import Login from './Login/Login';
import Registration from './Registration/Registration';

const AuthForm = ({ type }) => {
  return (
    <FormContainer>
      <RegisterHeader>
        {type === 'login' ? 'Login' : 'Registration'}
      </RegisterHeader>
      {type === 'login' ? <Login /> : <Registration />}
      {type === 'login' ? (
        <FormText>
          Don't have an account?
          <RegisterLink to="/register">Register</RegisterLink>
        </FormText>
      ) : (
        <FormText>
          Already have an account?
          <RegisterLink to="/login">Login</RegisterLink>
        </FormText>
      )}
    </FormContainer>
  );
};

export default AuthForm;
