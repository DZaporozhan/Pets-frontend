import { ErrorMessage, Form, Formik } from 'formik';
import * as Yup from 'yup';
import {
  ActButton,
  TextInput,
  DateInput,
  BirthdayError,
  CategoryContainer,
  CategoryInput,
  CategoryLabel,
  CategoryRadio,
  Description,
  FirstPageContainer,
  InputWraper,
  StarSpan,
  TextLabel,
  TitleError,
  BreedError,
  ActionButtons,
  NameError
} from './AddNoticeForm.styled.';

const inputReGeX = /^[aA-zZ\s]+$/;

const validationSchema = Yup.object({
  category: Yup.string().required('Please, choose category'),
  title: Yup.string()
    .required('Please enter a title')
    .min(2, 'Please enter at least 2 characters')
    .matches(
      inputReGeX,
      'Please enter a valid value using Latin characters'
    )
    .max(48, 'Name should be 48 characters or less'),
  name: Yup.string()
    .min(2, 'Please enter at least 2 characters')
    .max(16, 'Name should be 15 characters or less')
    .matches(inputReGeX, `Please enter a valid value using Latin characters`)
    .required(`Please enter your pet's name`),
  birthday: Yup.date()
    .typeError('Please choose the date')
    .required(`Please enter your pet's date of birth`),
  breed: Yup.string()
    .min(2, 'Please enter at least 2 characters')
    .max(16, 'Breed should be 15 characters or less')
    .matches(inputReGeX, `Please enter a valid value using English characters`)
    .required(`Please enter your pet's breed`),
});

const Step1 = ({ data, next, onClose }) => {
  
  const today = new Date().toISOString().split('T')[0];

  const handleSubmit = values => {
    console.log('handleSubmit',values)
    next(values);
    
  };

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={data}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form>
        <FirstPageContainer>
          <Description>
            Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit
              amet, consectetur
          </Description>
          
          <CategoryContainer>
            <CategoryLabel>
            <CategoryInput
                  type="radio"
                  name="category"
                  value="lost found"
            />
                <CategoryRadio>lost/found</CategoryRadio>
                </CategoryLabel>
              
              <CategoryLabel>
                <CategoryInput
                  type="radio"
                  name="category"
                  value="in good hands"
                />
                <CategoryRadio>in good hands</CategoryRadio>
              </CategoryLabel>
              <CategoryLabel>
                <CategoryInput
                  type="radio"
                  name="category"
                  value="sell"
                />
                <CategoryRadio>sell</CategoryRadio>
              </CategoryLabel>
             </CategoryContainer>
            <InputWraper>
              <TextLabel>
                Title of ad<StarSpan>&#42;</StarSpan>
                <TextInput
                  id="title"
                  name="title"
                  placeholder="Type name pet"
                />
                <ErrorMessage
            name="title"
            render={message => (
              <TitleError>{message}</TitleError>
            )}
          />
            </TextLabel>
            </InputWraper>

            <InputWraper>
            <TextLabel>
              Name pet
              <TextInput
                id="name"
                name="name"
                placeholder="Type name pet"
              />
          <ErrorMessage
            name="name"
            render={message => (
              <NameError style={{ color: 'red' }}>{message}</NameError>
            )}
          />
              </TextLabel>
            </InputWraper>
            
            <InputWraper>
            <TextLabel>
              Date of birth
          <DateInput
            id="birthday"
            name="birthday"
            type="date"
            min="1950-01-01"
            max={today}
            placeholder="Type date of birth"
          />
          <ErrorMessage
            name="birthday"
            render={message => (
              <BirthdayError >{message}</BirthdayError>
            )}
          />
              </TextLabel>
            </InputWraper>
            
            <InputWraper>
            <TextLabel>
              Breed
              <TextInput
                id="breed"
                name="breed"
                placeholder="Type breed"
              />
          <ErrorMessage
            name="breed"
            render={message => (
              <BreedError>{message}</BreedError>
            )}
          />
              </TextLabel>
            </InputWraper>
            </FirstPageContainer>
            
          <ActionButtons>
            <ActButton type="button" onClick={onClose}>
              Cancel
            </ActButton>
            <ActButton type="submit">Next</ActButton>
          </ActionButtons>
          
          </Form>
      )}
    </Formik>
  );
};

export default Step1;
