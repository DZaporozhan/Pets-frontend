import styled from 'styled-components';

export const SectionList = styled.section`
  background-color: ${p => p.theme.colors.background};
  @media screen and (max-width: 1279px) {
    padding-bottom: 100px;
    padding-top: 30px;
  }
  @media screen and (min-width: 1280px) {
    padding-bottom: 200px;
    padding-top: 60px;
  }
`;

export const Container = styled.div`
  padding: 0 16px;
  margin: 0 auto;

  @media screen and (min-width: 1280px) {
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
  left: 220px;
  z-index: 1;
  @media screen and (${p => p.theme.device.tablet}) {
    position: static;
    z-index: 0;
  } ;
`;

export const NavBtnPosition = styled.div`
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
