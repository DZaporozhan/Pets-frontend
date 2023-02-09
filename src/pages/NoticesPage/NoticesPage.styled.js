import styled from 'styled-components';

export const Sections = styled.section``;

export const Contaainer = styled.div`
  padding: 0 16px;
  margin: 0 auto;

  @media screen and (min-width: 1280px) {
    width: 1248px;
  }
  @media screen and (max-width: 1279px) {
    width: 736px;
  }
  @media screen and (max-width: 767px) {
    max-width: 300px;
    padding: 0 10px;
  }
`;
