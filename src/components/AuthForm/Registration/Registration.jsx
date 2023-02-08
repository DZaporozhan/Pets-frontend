import { useState } from 'react';
import SignUpStep1 from './SignUpStep1';
import SignUpStep2 from './SignUpStep2';

const Registration = () => {
  const [isNext, setIsNext] = useState(true);
  const [step1, setStep1] = useState({});

  const firstStepData = data => {
    if (data.email !== '' && data.password !== '') {
      setIsNext(false);
      setStep1(data);
    }
  };

  return (
    <>
      {isNext ? (
        <SignUpStep1 data={step1} onSubmit={firstStepData} />
      ) : (
        <SignUpStep2 data={step1} onSubmit={() => setIsNext(true)} />
      )}
    </>
  );
};

export default Registration;
