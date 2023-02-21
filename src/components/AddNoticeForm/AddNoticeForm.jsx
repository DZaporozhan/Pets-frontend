import { format } from 'date-fns';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Step1 from './FirstStep';
import Step2 from './SecondStep';
import { toast } from 'react-toastify';
import { addNotice } from 'services/api/notices';
import { FormWraper, Title } from './AddNoticeForm.styled.';

const NoticeForm = ({ onClose }) => {
  const [data, setData] = useState({
    category: '',
    title: '',
    name: '',
    birthday: '',
    breed: '',
    sex: '',
    location: '',
    price: '',
    imageURL: null,
    comments: '',
      
  });
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();

  const makeRequest = async formData => {
    const data = new FormData();
    data.append('category', formData.category);
    data.append('title', formData.title);
    data.append('name', formData.name);
    data.append('birthday',format(new Date(formData.birthday), 'dd.MM.yyyy'));
    data.append('breed', formData.breed);
    data.append('comments', formData.comments);
    data.append('imageURL', formData.imageURL);
    data.append('sex', formData.sex);
    data.append('location', formData.location);

    try {
      await addNotice(data);
      navigate('/notices/owner');
      toast.success(`Your pet ${formData.name} has been added successfully`);
      onClose();
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
    <Step1 next={handleNextStep} onClose={onClose} data={data} />,
    <Step2 next={handleNextStep} back={handlePrevStep} data={data} />,
  ];

  return (
    <FormWraper>
      <Title>Add pet</Title>
      {steps[currentStep]}
    </FormWraper>
  );
};

export default NoticeForm;
