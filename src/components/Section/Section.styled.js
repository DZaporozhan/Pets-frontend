import styled from 'styled-components';

export const Sections = styled.section`
  margin-top: 42px;
  @media screen and (${p => p.theme.device.tablet}) {
    margin-top: 90px;
  }
  @media screen and (${p => p.theme.device.desktop}) {
    margin-top: 59px;
  }
`;
export const Title = styled.h2`
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes[5]}px;
  line-height: 1.375;

  text-align: center;

  color: ${p => p.theme.colors.primaryText};

  @media screen and (${p => p.theme.device.tablet}) {
    font-size: ${p => p.theme.fontSizes[9]}px;
  }
`;
