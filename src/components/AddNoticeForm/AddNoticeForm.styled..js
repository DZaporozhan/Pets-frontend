import styled from 'styled-components';

import malePic from '../../icons/male-icon.png';
import femalePic from '../../icons/female-icon.png';
import { Field } from 'formik';

export const FormWraper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 240 px;
  padding-top: 20px;
  padding-bottom: 40px;
  @media ${p => p.theme.device.tablet} {
    width: 448 px;
    padding-bottom: 40px;
  }
`;

export const Title = styled.h3`
  text-align: center;
  margin-bottom: 20px;
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes[5]}px;
  line-height: 1.4;
  @media ${p => p.theme.device.tablet} {
    font-size: ${p => p.theme.fontSizes[8]}px;
  }
`;

export const FirstPageContainer = styled.div`
  margin-bottom: 40px;
`;

export const SecPageContainer = styled.div`
  margin-bottom: 40px;
  
`;

export const Description = styled.p`
  text-align: center;
  margin-bottom: 20px;
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes[2]}px;
  line-height: 1.38;
  @media ${p => p.theme.device.tablet} {
    width: 448px;
    margin-bottom: 28px;
    font-size: ${p => p.theme.fontSizes[4]}px;
  }
`;

export const CategoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 8px;
  row-gap: 12px;
  margin-bottom: 32px;
  @media ${p => p.theme.device.tablet} {
    width: 448px;
    margin-bottom: 28px;
    column-gap: 12px;
    row-gap: 16px;
    
  }
`;

export const CategoryLabel = styled.label`
  /* margin-bottom: 4px; */
`;

export const CategoryInput = styled(Field)`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
  &:checked + div {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
  }
`;

export const CategoryRadio = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 25px;
  font-size: ${p => p.theme.fontSizes[1]}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  letter-spacing: 0.04em;
  line-height: 1.36;
  border: 2px solid #f59256;
  border-radius: 40px;
  cursor: pointer;
  transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  transition: background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
  }
  @media ${p => p.theme.device.tablet} {
    font-size: ${p => p.theme.fontSizes[4]}px;
  }
`;

export const InputWraper = styled.div`
  box-sizing: border-box;
  &:not(:last-child) {
    margin-bottom: 16px;
  }
  @media ${p => p.theme.device.tablet} {
    &:not(:last-child) {
      margin-bottom: 28px;
    }
  }
`;

export const TextLabel = styled.label`
  display: inline-block;
  width: 100%;
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes[3]}px;
  line-height: 1.44;
  @media ${p => p.theme.device.tablet} {
    font-size: 24px;
  }
`;

export const TextInput = styled(Field)`
  display: block;
  box-sizing: border-box;
  align-items: center;
  display: flex;
  outline: none;
  border: 1px solid rgba(245, 146, 86, 0.5);
  width: 100%;
  height: 40px;
  margin-top: 8px;
  padding: 0;
  padding-left: 14px;
  border-radius: ${p => p.theme.radii.normal};
  background-color: #FDF7F2;
  ::placeholder {
    font-family: ${p => p.theme.fonts.body};
    font-style: normal;
    font-weight: ${p => p.theme.fontWeights.regular};
    font-size: ${p => p.theme.fontSizes[1]}px;
    line-height: 1.4;
    color: rgba(27, 27, 27, 0.6);
  }
  @media ${p => p.theme.device.tablet} {
    margin-top: 12px;
    width: 100%;
    height: 48px;
    padding-left: 16px;
    ::placeholder {
      font-size: ${p => p.theme.fontSizes[2]}px;
    }
  }
`;

export const DateInput = styled(Field)`
  position: relative;
  display: block;
  box-sizing: border-box;
  padding-left: 14px;
  margin-top: 8px;
  border: 1px solid rgba(245, 146, 86, 0.5);
  width: 100%;
  height: 40px;
  border-radius: ${p => p.theme.radii.normal};
  background-color: #FDF7F2;
  ::placeholder {
    font-family: ${p => p.theme.fonts.body};
    font-style: normal;
    font-weight: ${p => p.theme.fontWeights.regular};
    font-size: ${p => p.theme.fontSizes[1]}px;
    line-height: 1.4;
    color: rgba(27, 27, 27, 0.6);
  }
  &::-webkit-calendar-picker-indicator {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }
  @media ${p => p.theme.device.tablet} {
    height: 48px;
    ::placeholder {
      font-size: ${p => p.theme.fontSizes[2]}px;
    }
  }
`;

export const InputContTextArea = styled.div`
  
`;

export const TextAreaInput = styled.textarea`
  display: block;
  outline: none;
  box-sizing: border-box;
  resize: none;
  margin-top: 8px;
  width: 240px;
  padding: 12px 5px 12px 14px;
  border-radius: 20px;
  background-color: #FDF7F2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  font-size: 14px;
  ::placeholder {
    font-family: ${p => p.theme.fonts.body};
  }
  @media ${p => p.theme.device.tablet} {
    width: 448px;
  }
`;

//          second page

export const GenderForm = styled.fieldset`
  display: flex;
  margin-bottom: 32px;
  border: none;
  padding: 0;
  @media ${p => p.theme.device.tablet} {
    margin-bottom: 40px;
  }
`;

export const GenderDesc = styled.legend`
  margin-bottom: 16px;
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes[3]}px;
  line-height: 26px;
  @media ${p => p.theme.device.tablet} {
    margin-bottom: 28px;
    font-size: ${p => p.theme.fontSizes[5]}px;
    line-height: 26px;
  }
`;

export const StarSpan = styled.span`
  font-size: ${p => p.theme.fontSizes[3]}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: 1.44;
  color: ${p => p.theme.colors.accent};
  @media ${p => p.theme.device.tablet} {
    font-size: ${p => p.theme.fontSizes[5]}px;
    line-height: 1.04;
  }
`;

export const StarSpanLocation = styled.span`
  font-size: ${p => p.theme.fontSizes[3]}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: 1.44;
  color: ${p => p.theme.colors.black};
  @media ${p => p.theme.device.tablet} {
    font-size: ${p => p.theme.fontSizes[5]}px;
    line-height: 1.04;
  }
`;
export const SexList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 50px;
  @media ${p => p.theme.device.tablet} {
    gap:80px;
  }
`;

export const SexItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 10;
`;

export const SexLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes[3]}px;
  line-height: 1.44;
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 40px;
  }
  @media ${p => p.theme.device.tablet} {
    font-size: ${p => p.theme.fontSizes[4]}px;
    &:not(:last-child) {
      margin-right: 80px;
    }
  }
`;

export const MalePicture = styled.div`
  width: 36px;
  height: 36px;
  margin-bottom: 16px;
  background-image: url(${malePic});
  background-repeat: no-repeat;
  background-size: contain, cover;
  @media ${p => p.theme.device.tablet} {
    width: 54px;
    height: 54px;
    margin-bottom: 25px;
  }
`;

export const FemalePicture = styled.div`
  width: 26px;
  height: 40px;
  margin-bottom: 12px;
  background-image: url(${femalePic});
  background-repeat: no-repeat;
  background-size: contain, cover;
  @media ${p => p.theme.device.tablet} {
    width: 39px;
    height: 60px;
    margin-bottom: 20px;
  }
`;

export const InputRadio = styled(Field)`
  opacity: 0;
  width: 0;
  height: 0;
  &:checked + label {
    color: ${p => p.theme.colors.accent};
  }
`;

export const PhotoPetText = styled.input`
  visibility: hidden;
  width: 0;
  height: 0;
`;

export const PhotoAddContainer = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: auto;
 // box-sizing: border-box;
  // padding: 22px;
`;

export const PhotoAddButton = styled.button`
  width: 116px;
  height: 116px;
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 20px;
  background-color: ${p => p.theme.colors.background};
  @media ${p => p.theme.device.tablet} {
    width: 140px;
    height: 140px;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border: none;
  padding: 0;
  margin-bottom: 28px;
`;

export const ImageTitle = styled.label`
  margin-bottom: 8px;
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes[3]}px;
  line-height: 1.2;
  letter-spacing: -0.01em;
  @media ${p => p.theme.device.tablet} {
    font-size: ${p => p.theme.fontSizes[5]}px;
    line-height: 1.04;
  }
`;

export const CurrentImage = styled.div`
  overflow: hidden;
  display: flex;
  margin-right: auto;
  width: 116px;
  height: 116px;
  border-radius: ${p => p.theme.radii.small};
  & > img {
    object-fit: cover;
    min-width: 100%;
    min-height: 100%;
  }
  @media ${p => p.theme.device.tablet} {
    width: 140px;
    height: 140px;
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 12px;
  @media ${p => p.theme.device.tablet} {
    flex-direction: row;
    
  }
`;

export const ActButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 28px;
  font-size: 14px;
  letter-spacing: 0.04em;
  line-height: 1.35;
  border: 2px solid #f59256;
  border-radius: 40px;
  cursor: pointer;
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes[2]}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  background-color: ${p => p.theme.colors.white};
  transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  transition: background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
   @media ${props => props.theme.device.tablet} {
    margin-right: 20px;
    width: 180px;
    height: 44px;
  }
    
  :hover:not(.active),
  :focus-visible:not(.active) {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
    transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    transition: background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  }
  &.active {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
  }
  :disabled {
    background-color: ${p => p.theme.colors.background};
    cursor: auto;
    :hover {
      background-color: ${p => p.theme.colors.background};
      color: ${p => p.theme.colors.disabled};
    }
  }
`;

export const TitleError = styled.p`
  position: absolute;
  top: 378px;
  left: 30%;
  display: inline-block;
  font-size: 12px;
  color: red;
  
  @media ${p => p.theme.device.tablet} {
    top: 435px;
    left: 60%;
    transform: translateX(-50%);
  }
`;

export const BirthdayError = styled.p`
  position: absolute;
  bottom: 273px;
  left: 18%;
  display:inline-block;
  font-size: 12px;
  color: red;

  @media ${p => p.theme.device.tablet} {
    bottom: 227px;
    left: 60%;
    transform: translateX(-50%);
  }
`;

export const NameError = styled.p`
  position: absolute;
  top: 467px;
  left: 22%;
  display:inline-block;
  font-size: 12px;
  color: red;

  @media ${p => p.theme.device.tablet} {
    top: 554px;
    left: 60%;
    transform: translateX(-50%);
  }
`;

export const BreedError = styled.p`
  position: absolute;
  left: 23%;
  display: inline-block;
  font-size: 12px;
  color: red;

  @media ${p => p.theme.device.tablet} {
    top: 795px;
    left: 60%;
    transform: translateX(-50%);
  }
`;

export const LocationError = styled.p`
  position: absolute;
  top: 321px;
  left: 18%;
  display: inline-block;
  font-size: 12px;
  color: red;

  @media ${p => p.theme.device.tablet} {
    top: 415px;
    left: 60%;
    transform: translateX(-50%);
  }
`;

export const PriceError = styled.p`
  position: absolute;
  top: 411px;
  left: 35%;
  display: inline-block;
  font-size: 12px;
  color: red;

  @media ${p => p.theme.device.tablet} {
    top: 536px;
    left: 60%;
    transform: translateX(-50%);
  }
`;

export const CommentError = styled.p`
  position: absolute;
  bottom: 188px;
  left: 21%;
  display: inline-block;
  font-size: 12px;
  color: red;

  @media ${p => p.theme.device.tablet} {
    bottom: 123px;
    left: 60%;
    transform: translateX(-50%);
  }
`;

export const SexError = styled.p`
  font-family: ${p => p.theme.fonts.sex};
  position: absolute;
  color: red;
  min-width: 260px;
  top: 23px;
  left: 300px;
  transform: translateX(-50%);
  font-size: 14px;
  @media ${p => p.theme.device.tablet} {
    font-size: 24px;
    top: 30px;
    left: 400px;
  }
`;

export const LoveGifWrapper = styled.div`
display: flex;
flex-direction: row;
align-items: baseline;
`