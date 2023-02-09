import styled from 'styled-components';

export const LogoStyles = styled.span`
  display: inline-block;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes[6]}px;
  line-height: 1.5;
  letter-spacing: 0.07em;
  font-family: ${p => p.theme.fonts.logo};
  color: ${p => p.theme.colors.black};
  white-space: nowrap;

  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes[7]}px;
  }
`;

export const LetterStyles = styled(LogoStyles)`
  color: ${p => p.theme.colors.accent};
`;