import styled from 'styled-components';
import { ReactComponent as AddIcon } from '../../icons/addIcon.svg';

export const StyledBtn = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  padding: 16px;
  border: 0;
  border-radius: ${p => p.theme.radii.round};
  background: ${p => p.theme.colors.accent};
  cursor: pointer;
  @media screen and (${p => p.theme.media.tablet}) {
    width: 129px;
    height: 44px;
    padding: 0;
    border-radius: 0;
    background: transparent;
    flex-direction: row-reverse;
    gap: 12px;
  }
`;

export const Wrap = styled.div`
  @media screen and (${p => p.theme.media.tablet}) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 44px;
    height: 44px;
    background-color: ${p => p.theme.colors.accent};
    border-radius: ${p => p.theme.radii.round};
  }
`;

export const IconAdd = styled(AddIcon)`
  width: 32px;
  height: 32px;
  color: #ffffff;
  @media screen and (${p => p.theme.media.tablet}) {
    width: 24px;
    height: 24px;
  }
`;

export const Text = styled.span`
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes[0]}px;
  line-height: 1.33;

  color: #ffffff;
  @media screen and (${p => p.theme.media.tablet}) {
    color: ${p => p.theme.colors.primaryText};
    font-size: ${p => p.theme.fontSizes[4]}px;
    line-height: 1.35;
  }
`;
