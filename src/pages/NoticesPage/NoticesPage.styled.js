import { ReactComponent as AddIcon } from '../../icons/addIcon.svg';
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
    width: 1280px;
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
  max-width: 1280px;
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

// btn mobile
export const MobileAddBtn = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  padding: 16px;
  border: 0;
  cursor: pointer;

  border-radius: ${p => p.theme.radii.round};
  background: ${p => p.theme.colors.accent};
  &:hover,
  :focus {
    background: ${p => p.theme.colors.hoverButton};
  }
`;

export const IconAdd = styled(AddIcon)`
  width: 32px;
  height: 32px;
  color: #ffffff;
`;

export const TextAddBtn = styled.span`
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes[0]}px;
  line-height: 1.33;

  color: #ffffff;
`;

export const NoAdsInThisCategory = styled.h2`
  text-align: center;
  padding-top: 20px;
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes[6]}px;
  color: ${p => p.theme.colors.secondaryText};
`;
