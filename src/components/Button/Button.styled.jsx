import styled from 'styled-components';

export const ButtonStyles = `display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 28px;
  font-size: 14px;
  letter-spacing: 0.04em;
  line-height: 1.35;
  border: 2px solid #f59256;
  border-radius: 40px;
  cursor: pointer;
  transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  transition: background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
   `;
//Button

//Category Link+++++++++++++
export const LinkBasic = styled.a`
  ${ButtonStyles};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-family: ${p => p.theme.fonts.body};
  background-color: ${p => p.theme.colors.white};
  :hover,
  :focus {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
    transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    transition: background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  }
  &.active {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
  }
`;
