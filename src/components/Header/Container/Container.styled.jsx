import styled from 'styled-components';

export const ContainerBox = styled.div`
  margin-right: auto;
  margin-left: auto;
  
  @media screen and (max-width: 319px) {
    padding: 16px 10px 0 10px;
  }
  @media screen and (min-width: 320px) {
    padding: 16px 20px 0 20px;
  }
  @media screen and (min-width: 768px) {
    padding: 24px 32px 0 32px;
  }
  @media screen and (min-width: 1280px) {
    padding: 20px 16px 0 16px;
  
  }
`;