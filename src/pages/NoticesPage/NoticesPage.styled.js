import styled from 'styled-components';

export const SectionList = styled.section`
  background-color: ${p => p.theme.colors.background};
  @media screen and (max-width: 1279px) {
    padding-bottom: 100px;
    padding-top: 30px;
  }
  @media screen and (${p => p.theme.device.desktop}) {
    padding-bottom: 200px;
    padding-top: 60px;
  }
`;

export const Container = styled.div`
  padding: 0 16px;
  margin: 0 auto;

  @media screen and (${p => p.theme.device.desktop}) {
    width: 1248px;
  }
  @media screen and (max-width: 1279px) {
    width: 736px;
  }
  @media screen and (max-width: 767px) {
    max-width: 300px;
    padding: 0 10px;
  }
`;

export const NavContainer = styled.div`
  margin: 0 auto;
  padding: 0 20px;

  @media screen and (${p => p.theme.device.tablet}) {
    padding: 0 32px;
  }

  @media screen and (${p => p.theme.device.desktop}) {
    padding: 0 16px;
  }
`;

export const AddBtnPosition = styled.div`
  position: fixed;
  top: 455px;
  right: 20px;
  z-index: 1;
  @media screen and (${p => p.theme.device.tablet}) {
    position: static;
    z-index: 0;
  }

  @media screen and (orientation: landscape) {
    top: 255px;
  }
`;

export const NavLinkPosition = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

export const BtnPosition = styled.div`
  @media screen and (${p => p.theme.device.tablet}) {
    display: flex;
    gap: 101px;
    justify-content: space-between;
  }
`;

export const Text = styled.p`
  position: absolute;
  top: 10px;

  font-size: ${p => p.theme.fontSizes[7]}px;
  font-family: ${p => p.theme.fonts.body};
  color: ${p => p.theme.colors.accent};
  font-weight: ${p => p.theme.fontWeights.bold};
  @media screen and (${p => p.theme.device.tablet}) {
    position: static;
  } ;
`;

export const ErrorPosition = styled.div`
  position: relative;
  @media screen and (${p => p.theme.device.tablet}) {
    position: static;
    text-align: center;
  } ;
`;
export const Img = styled.img`
  @media screen and (${p => p.theme.device.tablet}) {
    margin: 0 auto;
  } ;
`;
