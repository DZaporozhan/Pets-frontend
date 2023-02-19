import styled from 'styled-components';
import { ReactComponent as CloseIcon } from '../../icons/closeIcon.svg';

export const BackDrop = styled.div`
  .user {
    @media screen and (max-height: 425px) and (orientation: landscape) {
      margin: 48vh 0;
    }
  }

  .notice,
  .learnMore {
    @media screen and (height: 852px) {
      margin: 4vh 0;
    }
    @media screen and (width: 375px) and (height: 667px) {
      margin: 18vh 0;
    }
    @media screen and (width: 360px) and (height: 740px) {
      margin: 11vh 0;
    }
    @media screen and (width: 390px) and (height: 844px) {
      margin: 4vh 0;
    }
    @media screen and (width: 393px) and (height: 851px) {
      margin: 3vh 0;
    }
    @media screen and (max-height: 425px) and (orientation: landscape) {
      margin: 40vw 0;
    }

    @media screen and (width: 768px) and (height: 852px) {
      margin: 11vw 0;
    }

    @media screen and (min-height: 768px) and (orientation: landscape) {
      margin: 12vw 0;
    }
    @media screen and (min-height: 1024px) and (orientation: landscape) {
      margin: 0vw 0;
    }

    @media screen and (width: 1920px) and (height: 1080) {
      margin: 15vw 0;
    }
  }

  .learnMore {
    @media screen and (max-height: 425px) and (orientation: landscape) {
      margin: 14vw 0;
    }
    @media screen and (width: 667px) and (height: 375px) and (orientation: landscape) {
      margin: 39vw 0;
    }
    @media screen and (width: 740px) and (height: 360px) and (orientation: landscape) {
      margin: 36vw 0;
    }

    @media screen and (width: 768px) and (height: 852px) {
      margin: 0vw 0;
    }

    @media screen and (min-height: 768px) and (orientation: landscape) {
      margin: 0vw 0;
    }
  }

  position: fixed;
  overflow-y: auto;
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

  @media screen and (${p => p.theme.device.tablet}) {
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
  z-index: 1;
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
