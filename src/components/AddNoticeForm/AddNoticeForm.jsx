import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ReactComponent as MalePic } from '../../icons/Vectormale.svg';
import { ReactComponent as FemalePic } from '../../icons/Vectorfemale.svg';
import { ReactComponent as CrossPic } from '../../icons/Vectorcross.svg';

import {
  CategoryContainer,
  CategoryInput,
  CategoryLabel,
  CategoryRadio,
  TextInput,
  TextLabel,
  DateInput,
  Description,
  // FormContainer,
  InputWraper,
  Title,
  GenderForm,
  GenderDesc,
  StarSpan,
  SexList,
  SexItem,
  SexLabel,
  InputRadio,
  ActionButtons,
  AddedImage,
  PhotoAddContainer,
  PhotoPetText,
  ImageWrapper,
  ImageTitle,
  // Button,
  TextAreaInput,
  InputContTextArea,
  ActButton,
  FormContent,
} from './AddNoticeModal.styled';
import axios from 'axios';

const validationSchema = Yup.object({
  category: Yup.string().required('Choose category'),
  title: Yup.string()
    .required('Title is required')
    .min(2, 'Min 2 letters')
    .matches(
      /^([А-Яа-я\s]+|[a-zA-Z\s]+){2,}$/,
      'Must contain only letters and spaces'
    )
    .trim()
    .max(48, 'Max 48 letters'),
  name: Yup.string()
    .trim()
    .min(2, 'Min 2 letters')
    .required('Name is required')
    .matches(
      /^([А-Яа-я\s]+|[a-zA-Z\s]+){2,}$/,
      'Must contain only letters and spaces'
    )
    .max(16, 'Max 16 letters'),
  birthday: Yup.date()
    .required('Choose date of birth')
    .max(new Date(), 'Date is required in the past'),
  breed: Yup.string()
    .required('Breed is required')
    .min(2, 'Min 2 letters')
    .matches(/^([А-Яа-я\s]+|[a-zA-Z\s]+){2,}$/, 'only letters')
    .trim()
    .max(24, 'Max 24 letters'),
  location: Yup.string().required('Type the location'),
  sex: Yup.string().required('Choose sex'),
  price: Yup.string().when('category', {
    is: category => category === 'sell',
    then: Yup.string()
      .required('Price is required')
      .matches(/^[0-9][0-9]*$/, 'Numbers only'),
  }),
  comments: Yup.string()
    .trim()
    .required('Type comments')
    .min(8, 'Min 8 letters')
    .max(120, 'Max 120 letters'),
});

export const AddNoticeForm = ({ onClose, addNotices }) => {
  const [isFirstPage, setIsFirstPage] = useState(true);
  const [image, setImage] = useState(null);
  // const [notices, setNotices] = useState([]);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const categorySetByDefault = () => {
    const endPoint = pathname.split('/').pop();
    return endPoint === 'notices' ? 'sell' : endPoint;
  };

  // ДОДАВ ЩОБ НЕБУЛО КОНФЛІКТА
  // eslint-disable-next-line no-unused-vars
  const addN = addNotices;
  const moveToNextPage = () => {
    isFirstPage ? setIsFirstPage(false) : setIsFirstPage(true);
  };

  const formik = useFormik({
    initialValues: {
      category: categorySetByDefault(),
      title: '',
      name: '',
      birthday: '',
      breed: '',
      sex: '',
      location: '',
      price: 1,
      photoURL: null,
      comments: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      const data = {
        category: values.category,
        title: values.title,
        name: values.name,
        birthday: values.birthday,
        breed: values.breed,
        sex: values.sex,
        location: values.location,
        price: values.price,
        photoUrl: values.photoURL,
        comments: values.comments,
      };

      axios
        .post('https://pets-api-team1.onrender.com/api/notices/', data)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);

          navigate('/notices/own');
        });
    },
  });
  const onImageChange = e => {
    const { files } = e.currentTarget;
    if (files) {
      setImage(URL.createObjectURL(files[0]));
      formik.setFieldValue('photoURL', files[0]);
    }
  };

  return (
    <>
      <Title>Add pet</Title>
      <FormContent onSubmit={formik.handleSubmit}>
        {isFirstPage && (
          <div>
            <Description>
              Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit
              amet, consectetur
            </Description>
            <CategoryContainer onChange={formik.handleChange} required>
              <CategoryLabel>
                <CategoryInput
                  defaultChecked={
                    formik.values.category === 'lost found' ? true : false
                  }
                  type="radio"
                  name="category"
                  value="lost/found"
                  id="lost/found"
                />
                <CategoryRadio>lost/found</CategoryRadio>
              </CategoryLabel>
              <CategoryLabel>
                <CategoryInput
                  defaultChecked={
                    formik.values.category === 'in good hands' ? true : false
                  }
                  type="radio"
                  name="category"
                  value="in good hands"
                  id="in good hands"
                />
                <CategoryRadio>in good hands</CategoryRadio>
              </CategoryLabel>
              <CategoryLabel>
                <CategoryInput
                  defaultChecked={
                    formik.values.category === 'sell' ? true : false
                  }
                  type="radio"
                  name="category"
                  value="sell"
                  id="sell"
                />
                <CategoryRadio>sell</CategoryRadio>
              </CategoryLabel>
            </CategoryContainer>
            <InputWraper>
              <TextLabel>
                Title of ad <StarSpan>&#42;</StarSpan>
                <TextInput
                  id="title"
                  name="title"
                  value={formik.values.title}
                  onChange={formik.handleChange}
                  placeholder="Type name"
                />
                {/* {formik.touched.title && formik.errors.title && (
                    <p>{formik.errors.title}</p>
                  )} */}
              </TextLabel>
            </InputWraper>
            <InputWraper>
              <TextLabel>
                Name pet
                <TextInput
                  id="name"
                  name="name"
                  type="name"
                  autoComplete="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  placeholder="Type name pet"
                />
                {/* {formik.touched.name && formik.errors.name && (
                    <p>{formik.errors.name}</p>
                  )} */}
              </TextLabel>
            </InputWraper>

            <InputWraper>
              <TextLabel>
                Date of birth
                <DateInput
                  id="birthday"
                  name="birthday"
                  type="date"
                  value={formik.values.birthday}
                  onChange={formik.handleChange}
                  placeholder="Type date of birth"
                />
                {/* {formik.touched.birthday && formik.errors.birthday && (
                    <p>{formik.errors.birthday}</p>
                  )} */}
              </TextLabel>
            </InputWraper>

            <InputWraper>
              <TextLabel>
                Breed
                <TextInput
                  id="breed"
                  name="breed"
                  value={formik.values.breed}
                  onChange={formik.handleChange}
                  placeholder="Type breed"
                />
                {/* {formik.touched.breed && formik.errors.breed && (
                    <p>{formik.errors.breed}</p>
                  )} */}
              </TextLabel>
            </InputWraper>
          </div>
        )}

        {!isFirstPage && (
          <>
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
                    checked={formik.values.sex === 'male'}
                    onChange={formik.handleChange}
                  />
                  <SexLabel htmlFor="malePet">
                    <MalePic></MalePic>
                    Male
                  </SexLabel>
                </SexItem>
                <SexItem>
                  <InputRadio
                    id="femalePet"
                    name="sex"
                    type="radio"
                    value="female"
                    checked={formik.values.sex === 'female'}
                    onChange={formik.handleChange}
                  />
                  <SexLabel htmlFor="femalePet">
                    <FemalePic></FemalePic>
                    Female
                  </SexLabel>
                </SexItem>
              </SexList>
            </GenderForm>
            <InputWraper>
              <TextLabel htmlFor="locationPet">
                City, Region<StarSpan>&#42;</StarSpan>:
                {formik.values.location !== '' && formik.errors.location ? (
                  <p>{formik.errors.location}</p>
                ) : null}
                <TextInput
                  value={formik.values.location}
                  id="location"
                  name="location"
                  type="text"
                  onChange={formik.handleChange}
                  placeholder="Type place"
                />
              </TextLabel>
            </InputWraper>
            <InputWraper>
              {formik.values.category === 'sell' && (
                <TextLabel htmlFor="pricePet">
                  Price *:
                  {formik.values.price !== '' && formik.errors.price ? (
                    <p>{formik.errors.price}</p>
                  ) : null}
                  <TextInput
                    id="pricePet"
                    name="price"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.price}
                    placeholder="Set price"
                  />
                </TextLabel>
              )}
            </InputWraper>
            <ImageWrapper>
              <ImageTitle>Load the pet's image:</ImageTitle>
              {formik.values.photoURL === null ? (
                <PhotoAddContainer htmlFor="imagePet">
                  <CrossPic width="48" height="48" fill="none"></CrossPic>
                  <PhotoPetText
                    id="imagePet"
                    name="photoURL"
                    type="file"
                    accept=".png, .jpg, .jpeg"
                    onChange={e => {
                      formik.handleChange(e);
                      onImageChange(e);
                    }}
                  />
                </PhotoAddContainer>
              ) : (
                <AddedImage>
                  <img alt="pet" src={image} />
                </AddedImage>
              )}
            </ImageWrapper>
            <InputContTextArea>
              <TextLabel htmlFor="commentsId">
                Comments <StarSpan>&#42;</StarSpan>
                {formik.values.comments !== '' && formik.errors.comments ? (
                  <p>{formik.errors.comments}</p>
                ) : null}
              </TextLabel>
              <TextAreaInput
                id="commentsId"
                name="comments"
                type="text"
                maxLength="120"
                rows={5}
                onChange={formik.handleChange}
                value={formik.values.comments}
              />
            </InputContTextArea>
          </>
        )}

        <ActionButtons>
          {isFirstPage ? (
            <ActButton type="button" onClick={onClose}>
              Cancel
            </ActButton>
          ) : (
            <ActButton type="button" onClick={moveToNextPage}>
              Back
            </ActButton>
          )}
          {isFirstPage ? (
            <ActButton type="button" onClick={moveToNextPage}>
              {' '}
              Next
            </ActButton>
          ) : (
            <ActButton type="submit">Done</ActButton>
          )}
        </ActionButtons>
      </FormContent>
    </>
  );
};
