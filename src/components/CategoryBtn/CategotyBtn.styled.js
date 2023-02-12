import styled from 'styled-components';

export const NavBtn = styled.button`
  min-width: 81px;
  min-height: 31px;

  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes[1]}px;
  line-height: 1.21;
  letter-spacing: 0.04em;
  padding: 8px 28px;

  color: ${p => p.theme.colors.black};
  background: ${p => p.theme.colors.white};
  border: 2px solid ${p => p.theme.colors.accent};
  border-radius: ${p => p.theme.radii.normal};

  &:hover,
  &:focus,
  &:active {
    cursor: pointer;
    color: ${p => p.theme.colors.white};
    background: ${p => p.theme.colors.accent};
  }
`;
