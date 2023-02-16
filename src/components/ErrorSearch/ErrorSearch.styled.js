import styled from 'styled-components';

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
  height: 10000px;
  position: relative;
  @media screen and (${p => p.theme.device.tablet}) {
    position: static;
    text-align: center;
  } ;
`;
export const Img = styled.img`
  background-color: ${p => p.theme.colors.background};
  @media screen and (${p => p.theme.device.tablet}) {
    margin: 0 auto;
  } ;
`;
