import styled from 'styled-components';
import backgroundImageMob from './images/background-mobile-min.png';
import backgroundImageTablet from './images/background-tablet-min.png';
import backgroundImageDeskV2 from './images/backgroundImageDesk-V2-1x.png';
import backgroundImageDeskV22x from './images/backgroundImageDesk-V2-2x.png';

import girtWithDogMob1x from './images/girlWithDog_1x-mobile-min.png';
import girtWithDogMob2x from './images/girlWithDog_2x-mobile-min.png';
import girtWithDogTab1x from './images/girlWithDog_1x-tablet-min.png';
import girtWithDogTab2x from './images/girlWithDog_2x-tablet-min.png';
import girtWithDogDesk1x from './images/girlWithDog_1x-desktop-min.png';
import girtWithDogDesk2x from './images/girlWithDog_2x-desktop-min.png';
import heart from './images/heart-min.png';

export const Main = styled.main`
  margin: 0 auto;
  width: 100%;
`;

export const Text = styled.h1`
  font-weight: 700;
  font-size: 32px;
  line-height: 1.38;
  font-family: ${p => p.theme.fonts.body};
  padding: 60px 20px 60px 20px;
  max-width: 320px;

  @media (min-width: 768px) {
    font-size: 68px;
    line-height: 1.47;
    padding: 88px 0px 118px 32px;
    max-width: 607px;
    margin-right: auto;
    max-width: 620px;
  }

  @media screen and (min-width: 1280px) {
    padding: 40px 0 0 16px;
    max-width: 604px;
    margin-right: auto;
  }
`;

export const Background = styled.section`
  background: url(${girtWithDogMob1x}), url(${backgroundImageMob});
  height: calc(100vh - 59px);
  background-position: bottom, bottom -10px right -200px;
  background-repeat: no-repeat;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${girtWithDogMob2x}), url(${backgroundImageMob});
  }

  @media screen and (min-width: 768px) {
    background-image: url(${girtWithDogTab1x}), url(${backgroundImageTablet});
    background-position: bottom, 22% calc(9vh + 100%);
    background-repeat: no-repeat;
    height: calc(100vh - 75px);

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${girtWithDogTab2x}), url(${backgroundImageTablet});
    }
  }

  /* @media screen and (min-width: 1024px) {
    background: url(${girtWithDogTab1x}, url(${backgroundImageDeskV2});
    background-position: bottom, 60% calc(22vh + 100%);
    background-repeat: no-repeat;
    background-size: contain;
    height: calc(100vh - 99px);
  }   */

  @media screen and (min-width: 1280px) {
    margin-top: 60px;
    background: url(${girtWithDogDesk1x}), url(${backgroundImageDeskV2});
    background-position: bottom right, bottom -10px right -25px;
    background-repeat: no-repeat;
    background-size: contain;
    height: calc(100vh - 130px);

    &:after {
      content: '';
      position: absolute;
      width: 92px;
      height: 89px;
      background-image: url(${heart});
      top: calc(50% - 200px);
      left: calc(50% + 80px);
    }

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${girtWithDogDesk2x}),
        url(${backgroundImageDeskV22x});
    }
  }
`;

export const SectionWrapper = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  @media screen and (min-width: 320px) {
    width: 320px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;
