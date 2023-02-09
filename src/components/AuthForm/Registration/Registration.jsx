import { useState } from 'react';
import SignUpStep1 from './SignUpStep1';
import SignUpStep2 from './SignUpStep2';

const Registration = () => {
  const [isNext, setIsNext] = useState(true);
  const [stepData, setStepData] = useState({});

  const firstStepData = data => {
    if (data.email !== '' && data.password !== '') {
      setIsNext(false);
      setStepData(data);
    }
  };

  return (
    <>
      {isNext ? (
        <SignUpStep1 data={stepData} onSubmit={firstStepData} />
      ) : (
        <SignUpStep2 data={stepData} onBack={() => setIsNext(true)} />
      )}
    </>
  );
};

export default Registration;
