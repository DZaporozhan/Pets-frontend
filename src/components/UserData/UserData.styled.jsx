import { Field, ErrorMessage, Form } from 'formik';
import { ReactComponent as EditSvg } from './img/edit-icon.svg';
import { ReactComponent as CameraSvg } from './img/camera-icon.svg';

import styled from 'styled-components';

export const UserInfoWrap = styled.div`
  display: block;
  padding: 20px 16px 20px 16px;

  background-color: #ffffff;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 20px;

  @media ${p => p.theme.device.tablet} {
    padding: 24px 40px 24px 32px;

    position: relative;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: flex-end;

    left: -32px;
    width: calc(100% + 32px);

    border-radius: 0 40px 40px 0;
  }

  @media ${p => p.theme.device.desktop} {
    padding: 20px 16px 18px 16px;

    display: block;
    width: 411px;
    left: -16px;
  }
`;

export const EditPhotoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 32px;

  @media ${p => p.theme.device.tablet} {
    margin-bottom: 0;
  }
  @media ${p => p.theme.device.desktop} {
    position: relative;
    margin-bottom: 32px;
  }
`;

export const Thumb = styled.div``;

export const UserAvatar = styled.img`
  display: block;
  overflow: hidden;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 12px;

  @media ${p => p.theme.device.tablet} {
    margin-bottom: 8px;
  }
  @media ${p => p.theme.device.desktop} {
    margin-bottom: 30px;
  }
  @media ${p => p.theme.device.desktop} {
    margin-bottom: 0;
  }
`;

export const AddPhoto = styled.label`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;

  /* padding: 6px 8px; */

  font-weight: 400;
  font-size: 12px;
  line-height: 1.83;
  letter-spacing: 0.04em;

  @media ${p => p.theme.device.desktop} {
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;

export const InputPhoto = styled.input`
  display: none;
`;

export const IconWraper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 20px;
  height: 20px;
  /* background-color: ${p => p.theme.colors.accent}; */

  margin-right: 4px;
`;

export const CameraIcon = styled(CameraSvg)`
  fill: ${p => p.theme.colors.accent};  

`;

export const InfoContainer = styled.div`
  /* @media ${p => p.theme.device.tablet} {
    margin-right: 56px;
  } */
`;

export const InfoForm = styled(Form)`
  width: 100%;
  display: grid;
  grid-template-columns: [labels] auto [inputs] 1fr [buttons];
  grid-auto-flow: row;
  grid-column-gap: 8px;
  grid-row-gap: 4px;

  align-items: center;
  margin-bottom: 40px;

  @media screen and (${p => p.theme.device.tablet}) {
    grid-column-gap: 24px;
    grid-row-gap: 8px;
    margin-bottom: 30px;
  }

  @media ${p => p.theme.device.desktop} {
    margin-bottom: 20px;
    margin-right: 0;
  }
`;

export const Label = styled.label`
  grid-column: labels;
  grid-row: auto;
  /* gap: 8px; */

  font-family: inherit;
  font-style: inherit;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: 0.04em;

  @media ${p => p.theme.device.tablet} {
    font-size: 18px;
    line-height: 1.39;
  }
`;

export const Input = styled(Field)`
  margin: 0;
  min-width: 100px;

  grid-column: inputs;
  grid-row: auto;

  font-family: inherit;
  font-style: inherit;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: 0.04em;

  padding-top: 3px;
  padding-bottom: 3px;

  padding-left: 18px;
  border: 1px solid #ffffff;
  border-radius: 40px;
  outline: none;
  color: #111111;

  transition: background-color 250ms linear;
  transition: border 250ms linear;

  &:hover,
  &:focus {
    background-color: #fdf7f2;
    border: 1px solid rgba(245, 146, 86, 0.5);
  }

  @media ${p => p.theme.device.tablet} {
    font-size: 18px;
    line-height: 1.39;

    width: 216px;
  }
`;

export const Button = styled.button`
  grid-column: buttons;
  grid-row: auto;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0;
  margin: 0;
  border: none;

  width: 20px;
  height: 20px;

  border-radius: ${p => p.theme.radii.round};

  background: #fdf7f2;

  backdrop-filter: blur(2px);

  cursor: pointer;

  @media ${p => p.theme.device.tablet} {
    width: 32px;
    height: 32px;
  }
`;

export const EditIcon = styled(EditSvg)`
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-repeat: no-repeat; */
  width: 12.5px;
  height: 12.5px;

  fill: rgba(17, 17, 17, 0.6);

  @media ${p => p.theme.device.tablet} {
    width: 20px;
    height: 20px;
  }
`;

export const ErrorText = styled(ErrorMessage)`
  /* color: tomato; */
`;
