import { format } from 'date-fns';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPet } from 'redux/user/operations';
import { Title, Wrapper } from './ModalAddsPet.styled';
import Step1 from './Step1';
import Step2 from './Step2';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const ModalAddsPet = ({ onCancel }) => {
  const dispatch = useDispatch();

  const [data, setData] = useState({
    name: '',
    birthdate: '',
    breed: '',
    comments: '',
    imageURL: null,
  });
  const [currentStep, setCurrentStep] = useState(0);

  const makeRequest = async formData => {
    const data = new FormData();
    data.append('name', formData.name);
    data.append(
      'birthdate',
      format(new Date(formData.birthdate), 'dd.MM.yyyy')
    );
    data.append('breed', formData.breed);
    data.append('comments', formData.comments);
    data.append('imageURL', formData.imageURL);

    try {
      await dispatch(addPet(data));
      Notify.success('You added new Pet successfully!');
      onCancel();
    } catch (error) {
      console.log(error.message);
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
    <Wrapper>
      <Title>Add pet</Title>
      {steps[currentStep]}
    </Wrapper>
  );
};

export default ModalAddsPet;
