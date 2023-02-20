import { ErrorMessage, Formik } from 'formik';
import * as Yup from 'yup';
import {
  ActButton,
  ButtonWrapper,
  DateInput,
  Label,
  StaledForm,
  StyledError,
  TextInput,
} from '../PetsData/Form/ModalAddsPet.styled';
import { CategoryContainer, CategoryInput, CategoryLabel, CategoryRadio, Description, FirstPageContainer } from './AddNoticeForm.styled.';

const inputReGeX = /^[aA-zZ\s]+$/;
const categoryArray = ["sell", "in good hand", "lost/found"]
const validationSchema = Yup.object({
  //category: Yup.string().required('Choose category'),
  // title: Yup.string()
  //   .required('Title is required')
  //   .min(2, 'Min 2 letters')
  //   .matches(
  //     /^([А-Яа-я\s]+|[a-zA-Z\s]+){2,}$/,
  //     'Must contain only letters and spaces'
  //   )
  //   .trim()
  //   .max(48, 'Max 48 letters'),
  name: Yup.string()
    .min(2, 'Please enter at least 2 characters')
    .max(16, 'Name should be 15 characters or less')
    .matches(inputReGeX, `Please enter a valid value using English characters`)
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

const Step1 = ({ data, next, onCancel }) => {
  
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
      {({values}) => (
        <FirstPageContainer>
          <Description>
            Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit
              amet, consectetur
          </Description>
          
          <CategoryContainer id='my-radio-group'>
            <div role="group" aria-labelledby="my-radio-group">
            <CategoryLabel>
            <CategoryInput
                  type="radio"
                  name="category"
                  value="lost found"
                  id="lost found"
                  // defaultChecked={
                  //   formik.values.category === 'lost found' ? true : false
                  // }
              />
                <CategoryRadio>lost/found</CategoryRadio>
                </CategoryLabel>
              
              <CategoryLabel>
                <CategoryInput
                  type="radio"
                  name="category"
                  value="in good hands"
                  id="in good hands"
                  // defaultChecked={
                  //   formik.values.category === 'in good hands' ? true : false
                  // }
                />
                <CategoryRadio>in good hands</CategoryRadio>
              </CategoryLabel>
              <CategoryLabel>
                <CategoryInput
                  type="radio"
                  name="category"
                  value="sell"
                  id="sell"
                  // defaultChecked={formik.values.category === 'sell'}
                />
                <CategoryRadio>sell</CategoryRadio>
              </CategoryLabel>
              <div>Picked: {values.category}</div>
              </div>
          </CategoryContainer>
          <Label htmlFor="name">Name pet</Label>
          <TextInput id="name" name="name" placeholder="Type name pet" />
          <ErrorMessage
            name="name"
            render={message => (
              <StyledError style={{ color: 'red' }}>{message}</StyledError>
            )}
          />

          <Label htmlFor="birthday">Date of birth</Label>
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
              <StyledError style={{ color: 'red' }}>{message}</StyledError>
            )}
          />

          <Label htmlFor="breed">Breed</Label>
          <TextInput id="breed" name="breed" placeholder="Type breed" />
          <ErrorMessage
            name="breed"
            render={message => (
              <StyledError style={{ color: 'red' }}>{message}</StyledError>
            )}
          />
          <div>Picked: {values.breed} {values.birthday}
            {values.name}</div>
          
        
          <ButtonWrapper>
            <ActButton type="button" onClick={onCancel}>
              Cancel
            </ActButton>
            <ActButton type="submit">Next</ActButton>
          </ButtonWrapper>
        </FirstPageContainer>
      )}
    </Formik>
  );
};

export default Step1;
