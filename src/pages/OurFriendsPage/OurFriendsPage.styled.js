import styled from 'styled-components';

export const FriendsSection = styled.section`
padding: 20px 0px;
background: ${p => p.theme.colors.background}; 
@media ${p => p.theme.device.tablet} {
    padding: 45px 0px;
  }
@media ${p => p.theme.device.desktop} {
    padding: 30px 0px;
  }
`;

export const FriendsTitle = styled.h2`
font-weight: ${p => p.theme.fontWeights.bold};
font-size: ${p => p.theme.fontSizes[5]}px;
line-height: 1.375;
text-align: center;
}    

@media ${p => p.theme.device.tablet} {font-size: 48px; 
}
`

