import { Field, ErrorMessage, Form } from 'formik';
import { ReactComponent as EditSvg } from './img/edit-icon.svg';
import { ReactComponent as CameraSvg } from './img/camera-icon.svg';

import styled from 'styled-components';

export const EditPhotoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Thumb = styled.div`
  outline: 1px solid red;
  margin-bottom: 32px;
`;

export const UserAvatar = styled.img`
  display: block;
  overflow: hidden;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 12px;
`;

export const LabelPhoto = styled.label`
  display: flex;
  justify-content: end;
  align-items: center;
  cursor: pointer;

  /* padding: 6px 8px; */

  font-weight: 400;
  font-size: 12px;
  line-height: 22px;
  letter-spacing: 0.04em;
`;

export const InputPhoto = styled.input`
  display: none;
`;

export const CameraIcon = styled(CameraSvg)`
  margin-right: 4px;
`;

export const InfoForm = styled(Form)`
  width: 100%;
  display: grid;
  grid-template-columns: [labels] auto [inputs] 1fr [buttons] 20px;
  grid-auto-flow: row;
  grid-column-gap: 8px;
  grid-row-gap: 4px;

  align-items: center;
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
  display: flex;
  align-items: baseline;

  cursor: pointer;
`;

export const Input = styled(Field)`
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

  transition: all 250ms linear;

  &:hover,
  &:focus {
    background: #fdf7f2;
    border: 1px solid rgba(245, 146, 86, 0.5);
  }

  /* display: inline-block; */
  /* margin-top: 4px;
  font-size: 16px;
  line-height: 24px;

  border-radius: 4px;
  box-sizing: border-box;
  border: 1px solid #d1d1d1;

  outline: none;
  cursor: pointer;

  box-shadow: inset 1px 2px 8px rgba(0, 0, 0, 0.02);

  transition: all 250ms linear;

  &:hover {
    box-shadow: inset 0px 2px 1px -1px rgb(0 0 0 / 20%),
      0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  }
  &:focus {
    border: 1px solid #b8b6b6;
    box-shadow: inset 1px 2px 4px rgba(0, 0, 0, 0.01),
      0px 0px 8px rgba(0, 0, 0, 0.2);
  } */
`;

export const Button = styled.button`
  grid-column: buttons;
  grid-row: auto;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0;
  margin: 0;

  width: 20px;
  height: 20px;

  border-radius: 50%;
  border: none;

  background: #fdf7f2;
  backdrop-filter: blur(2px);

  cursor: pointer;
  /* display: inline-flex;
  margin-left: 8px;

  padding: 4px 8px;
  font-size: 16px;
  border-radius: 4px;
  background-color: #fff;

  border: none;
  cursor: pointer;

  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);

  transition: background-color 250ms linear;

  &:hover,
  &:focus {
    background-color: #5cb85c;
  } */
`;
export const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 12.5px;
  height: 12.5px;
  /* background-color: ${p => p.theme.colors.accent}; */
  border-radius: ${p => p.theme.radii.round};
`;

export const EditIcon = styled(EditSvg)`
  display: block;
  width: 9.5px;
  height: 9.5px;
  display: inline-block;

  fill: #111111;
`;

export const ErrorText = styled(ErrorMessage)`
  /* color: tomato; */
`;
