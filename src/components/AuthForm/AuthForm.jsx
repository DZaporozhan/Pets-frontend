import { useState } from 'react';
import {
  FormContainer,
  FormText,
  RegisterHeader,
  RegisterLink,
} from './AuthForm.styled';
import SignUpStep1 from './Steps/SignUpStep1';
import SignUpStep2 from './Steps/SignUpStep2';

const AuthForm = () => {
  const [isNext, setIsNext] = useState(true);
  const [step1, setStep1] = useState({});

  const firstStepData = data => {
    if (data.email !== '' && data.password !== '') {
      setIsNext(false);
      setStep1(data);
    }
  };

  return (
    <FormContainer>
      <RegisterHeader>Registration</RegisterHeader>
      {isNext ? (
        <SignUpStep1 data={step1} onSubmit={firstStepData} />
      ) : (
        <SignUpStep2 data={step1} onSubmit={() => setIsNext(true)} />
      )}
      <FormText>
        Already have an account?
        <RegisterLink to="/login">Login</RegisterLink>
      </FormText>
    </FormContainer>
  );
};

export default AuthForm;
