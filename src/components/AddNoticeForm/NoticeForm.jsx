import { format } from 'date-fns';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPet } from 'redux/user/operations';
import { Title, Wrapper } from '../PetsData/Form/ModalAddsPet.styled';
import Step1 from './FirstStep';
import Step2 from './SecondStep';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { addNotice } from 'services/api/notices';

const ModalAddsPet = ({ onCancel }) => {
  const dispatch = useDispatch();

  const [data, setData] = useState({
    category: '',
   
    name: '',
    birthday: '',
    breed: '',
    comments: '',
    imageURL: null,
    location: '',
    sex: "",
    
  });
  const [currentStep, setCurrentStep] = useState(0);

  const makeRequest = async formData => {
    const data = new FormData();
    data.append('category', formData.category);
    data.append('title', formData.title);
    data.append('name', formData.name);
    data.append(
      'birthday',
      format(new Date(formData.birthday), 'dd.MM.yyyy')
    );
    data.append('breed', formData.breed);
    data.append('comments', formData.comments);
    data.append('imageURL', formData.imageURL);
    data.append('sex', formData.sex);
    data.append('location', formData.location);

    try {
      addNotice(data);
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
