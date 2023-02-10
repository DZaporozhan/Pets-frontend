import { useState } from 'react';
import SignUpStep1 from './SignUpStep1';
import SignUpStep2 from './SignUpStep2';

const Registration = () => {
  const [isNext, setIsNext] = useState(true);
  const [step1Data, setStep1Data] = useState({});
  const [step2Data, setStep2Data] = useState({});

  const firstStepData = data => {
    if (data.email !== '' && data.password !== '') {
      setIsNext(false);
      setStep1Data(data);
    }
  };
  const secondStepData = data => {
    setStep2Data(data);
    setIsNext(true);
  };

  return (
    <>
      {isNext ? (
        <SignUpStep1 data={step1Data} onSubmit={firstStepData} />
      ) : (
        <SignUpStep2
          data={step2Data}
          step1={step1Data}
          onBack={secondStepData}
        />
      )}
    </>
  );
};

export default Registration;
