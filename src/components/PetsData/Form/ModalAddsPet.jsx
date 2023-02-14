import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPet } from 'redux/user/operations';
import Step1 from './Step1';
import Step2 from './Step2';

const ModalAddsPet = ({ onCancel }) => {
  const dispatch = useDispatch();

  const [data, setData] = useState({
    name: '',
    birthdate: '',
    breed: '',
    comments: '',
    imageURL: '',
  });
  const [currentStep, setCurrentStep] = useState(0);

  const makeRequest = async formData => {
    try {
      const response = await dispatch(addPet(formData));
      console.log(response);
    } catch (error) {
      console.log(error.message.payload);
    }
  };

  const handleNextStep = (newData, final = false) => {
    setData(prev => ({ ...prev, ...newData }));
    if (final) {
      makeRequest(newData);
      return;
    }
    setCurrentStep(prev => prev + 1);
  };

  const handlePrevStep = newData => {
    setData(prev => ({ ...prev, ...newData }));
    setCurrentStep(prev => prev - 1);
  };

  const steps = [
    <Step1 next={handleNextStep} onCancel={onCancel} data={data} />,
    <Step2 next={handleNextStep} back={handlePrevStep} data={data} />,
  ];

  return (
    <>
      <h1>Add pet</h1>
      {steps[currentStep]}
    </>
  );
};

export default ModalAddsPet;
