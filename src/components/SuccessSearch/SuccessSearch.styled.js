import styled from 'styled-components';

export const ImgSearch = styled.img`
  position: absolute;
  width: 250px;
  top: 4.5vh;

  @media screen and (orientation: landscape) {
    top: 16vw;
  }

  @media screen and (${p => p.theme.device.tablet}) {
    top: 18vw;
  }

  @media screen and (${p => p.theme.device.desktop}) {
    top: 8vw;
    left: 25vw;
  }

  @media screen and (min-width: 1440px) {
    top: 7vw;
    left: 27vw;
  }

  @media screen and (min-width: 2560px) {
    top: 4vw;
    left: 37vw;
  }
`;
