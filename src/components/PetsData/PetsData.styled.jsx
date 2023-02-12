import styled from 'styled-components';

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  background-color: ${p => p.theme.colors.background};

  @media ${p => p.theme.device.tablet} {
    margin-bottom: 24px;
  }
`;

export const Title = styled.h2`
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes[4]}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: 1.35;
  letter-spacing: 0.04em;

  @media ${p => p.theme.device.tablet} {
    font-size: ${p => p.theme.fontSizes[6]}px;
  }
`;
