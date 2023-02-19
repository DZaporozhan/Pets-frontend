import styled from 'styled-components';
import { ReactComponent as AddIcon } from '../../icons/addIcon.svg';

export const StyledBtn = styled.button`
  display: flex;

  align-items: center;
  border: 0;
  cursor: pointer;

  width: ${p => (p.page === 'user' ? '125px' : '129px')};
  height: ${p => (p.page === 'user' ? '40px' : '44px')};
  padding: 0;
  border-radius: 0;
  background: transparent;
  flex-direction: row-reverse;
  gap: 12px;
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${p => (p.page === 'user' ? '40px' : '44px')};
  height: ${p => (p.page === 'user' ? '40px' : '44px')};
  background-color: ${p => p.theme.colors.accent};
  border-radius: ${p => p.theme.radii.round};
`;

export const IconAdd = styled(AddIcon)`
  width: 24px;
  height: 24px;
`;

export const Text = styled.span`
  color: ${p => p.theme.colors.primaryText};
  font-size: ${p => p.theme.fontSizes[4]}px;
  line-height: 1.35;
`;
