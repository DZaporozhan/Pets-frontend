import styled from 'styled-components';

export const Sections = styled.section`
  background-color: ${p => p.theme.colors.background};
  @media screen and (max-width: 1279px) {
    padding-bottom: 100px;
    padding-top: 30px;
  }
  @media screen and (min-width: 1280px) {
    padding-bottom: 200px;
    padding-top: 60px;
  }
`;

export const Container = styled.div`
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
