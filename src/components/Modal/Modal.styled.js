import styled from 'styled-components';
import { ReactComponent as CloseIcon } from '../../icons/closeIcon.svg';

export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(17, 17, 17, 0.6);
  backdrop-filter: blur(10px);
`;

export const ModalWindow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 530px;
  min-width: 280px;
  /* width: 100%; */
  padding: 20px;
  background-color: #ffffff;
  border-radius: 20px;
`;

export const BtnClose = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;

  display: inline-flex;
  justify-content: center;
  align-items: center;

  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: 0px;
  background: #fdf7f2;
  backdrop-filter: blur(2px);
  padding: 3px;
`;

export const IconClose = styled(CloseIcon)`
  color: #000000;

  &:hover,
  &:focus {
    cursor: pointer;
    color: #f59256;
    transform: scale(1.2);
  }
`;
