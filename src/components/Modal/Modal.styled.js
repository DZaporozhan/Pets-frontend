import styled from 'styled-components';
import { ReactComponent as CloseIcon } from '../../icons/closeIcon.svg';

export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: ${p => p.theme.colors.gray};
  backdrop-filter: blur(10px);
`;

export const ModalWindow = styled.div`
  position: absolute;
  top: ${p => p.theme.radii.round};
  left: ${p => p.theme.radii.round};
  transform: translate(-50%, -50%);
  min-height: 530px;
  min-width: 280px;
  padding: 20px;
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.small};

  @media screen and (${p => p.theme.media.tablet}) {
    min-width: 608px;
  }
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
  border-radius: ${p => p.theme.radii.round};
  border: 0px;
  background: ${p => p.theme.colors.background};
  backdrop-filter: blur(2px);
  padding: 3px;
`;

export const IconClose = styled(CloseIcon)`
  color: #000000;

  &:hover,
  &:focus {
    cursor: pointer;
    color: ${p => p.theme.colors.accent};
    transform: scale(1.2);
  }
`;
