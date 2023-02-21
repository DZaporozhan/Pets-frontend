import { ErrorMessage, Formik, useField, Form } from 'formik';
import { useRef, useState } from 'react';
import * as Yup from 'yup';
import { ReactComponent as CrossPic } from '../../icons/Vectorcross.svg';
import HeartLove from "../../../src/icons/heart-love.gif"
import {
  
  Image,
  ImageBtn,
  ImageExample,
  
 
} from '../PetsData/Form/ModalAddsPet.styled';
import {
  ImageWrapper,
  ActionButtons,
  ActButton,
  TextAreaInput,
  FemalePicture,
  GenderDesc,
  GenderForm,
  ImageTitle,
  InputRadio,
  InputWraper,
  LocationError,
  PhotoPetText,
  LoveGifWrapper,
  MalePicture,
  PhotoAddContainer,
  PriceError,
  SecPageContainer,
  SexError,
  SexItem,
  SexLabel,
  SexList,
  StarSpan,
  StarSpanLocation,
  TextInput,
  TextLabel,
  CommentError,
  InputContTextArea
} from './AddNoticeForm.styled.';

const cityRegEx = /^[-a-z]+(?:(?:(,\s|,)[-a-z]+))$/i;

const validationSchema = Yup.object({
  location: Yup.string()
    .trim()
    .matches(/\s/, 'There must be a space between the City and the Region.')
    .required('Please enter your City and Region')
    .matches(cityRegEx, 'Please enter a valid city format: City, Region'),
  sex: Yup.string().required('Boy or girl'),
  price: Yup.string().when('category', {
    is: 'sell',
    then: Yup.string()
      .required('Price is required')
      
  }),
  comments: Yup.string()
    .min(8, 'Please enter at least 8 characters')
    .max(120, 'Comments should be 120 characters or less')
    .required('Comments section is required!'),
});

const Step2 = ({ data, next, back }) => {
  const handleSubmit = values => {
    console.log('handleSubmit step2',values)
    next(values, true);
  };
  const [image, setImage] = useState(null);
  const fileRef = useRef(null);
 
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={data}
      onSubmit={handleSubmit}
    >
      {formProps => (
        
        <Form encType="multipart/form-data">
          <SecPageContainer>
          <GenderForm>
              <GenderDesc>
                The sex
                <StarSpan>&#42;</StarSpan>:
              </GenderDesc>
              <SexList>
                <SexItem>
                  <InputRadio
                    id="malePet"
                    name="sex"
                    type="radio"
                    value="male"
                    checked={formProps.values.sex === 'male'}
                    
                  />
                  <SexLabel htmlFor="malePet">
                    <MalePicture></MalePicture>
                  Male
                <ErrorMessage
            name="sex"
            render={message => (
              <LoveGifWrapper>
                <SexError>{message}
                  <img src={HeartLove} width="46" height="42" alt="heartBeat" />
                </SexError>
                </LoveGifWrapper>
            )}
          />                     
                </SexLabel>
                
                </SexItem>
                <SexItem>
                  <InputRadio
                    id="femalePet"
                    name="sex"
                    type="radio"
                    value="female"
                    checked={formProps.values.sex === 'female'}
                    
                  />
                  <SexLabel htmlFor="femalePet">
                    <FemalePicture></FemalePicture>
                  Female
                 </SexLabel>
                </SexItem>
              </SexList>
            </GenderForm>
            <InputWraper>
              <TextLabel htmlFor="location">
                Location<StarSpanLocation>&#42;</StarSpanLocation>:
                <TextInput
                  id="location"
                  name="location"
                type="text"
                placeholder="Type location"
              />
              <ErrorMessage
            name="location"
            render={message => (
              <LocationError>{message}</LocationError>
            )}
          />  
           </TextLabel>   
            </InputWraper>

          {formProps.values.category === 'sell' && (
          <InputWraper>
                <TextLabel htmlFor="pricePet">
                  Price<StarSpan>&#42;</StarSpan>:
                   <TextInput
                    id="pricePet"
                    name="price"
                    type="text"
                    placeholder="Type price"
                />
                <ErrorMessage
            name="price"
            render={message => (
              <PriceError>{message}</PriceError>
            )}
          />  
                </TextLabel>
              </InputWraper>)}
          <ImageWrapper>
            <ImageTitle>Load the pet's image:</ImageTitle>
              {formProps.values.imageURL === null ? (
                <PhotoAddContainer htmlFor="imagePet">
                  <CrossPic width="48" height="48" fill="none"></CrossPic>
              <PhotoPetText
                ref={fileRef}
                hidden
                id="imagePet"
                name="imageURL"
                type="file"
                accept=".png, .jpg, .jpeg"
                value={undefined}
                onChange={e => {
                  const { files } = e.currentTarget;
                  if (files) {
                    setImage(URL.createObjectURL(files[0]));
                    formProps.setFieldValue('imageURL', files[0]);
                  }
                }}
              />
                </PhotoAddContainer>
              ):(
              <ImageBtn
                type="button"
                onClick={() => {
                  fileRef.current.click();
                }}
              >
                {formProps.values.imageURL ? (
                  <ImageExample>
                    <Image
                      alt="pet"
                      src={
                        image === null
                          ? URL.createObjectURL(formProps.values.imageURL)
                          : image
                      }
                    />
                  </ImageExample>
                ) : (
                  <CrossPic width="48" height="48" fill="none" />
                )}
              </ImageBtn>
         )}
            </ImageWrapper>
            <InputContTextArea>
              <TextLabel htmlFor='comments'>
                Comments</TextLabel>
              <MyFormikTextareaField
                type="text"
                maxLength="120"
                rows={5}
                placeholder="Type comment"
                fieldName={'comments'} />
          <ErrorMessage
            name="comments"
            render={message => (
              <CommentError>{message}</CommentError>
            )}
                />
               
              </InputContTextArea>
         </SecPageContainer>           
          <ActionButtons>
            <ActButton
              type="button"
              onClick={() => {
                back(formProps.values);
              }}
            >
              Back
            </ActButton>
            <ActButton type="submit">Done</ActButton>
          </ActionButtons>
          </Form>
          
      )}
    </Formik>
  );
};

export function MyFormikTextareaField({ fieldName }) {
  const [field, meta] = useField(fieldName);

  return (
    <TextAreaInput
      value={meta.value}
      onChange={field.onChange}
      placeholder={`Type ${fieldName}`}
      id={fieldName}
      name={fieldName}
      maxLength="120"
                rows={5}
    />
  );
}

export default Step2;
