import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  @media screen and (max-width: 1279px) {
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
  }
  @media screen and (min-width: 1280px) {
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
  }

  @media screen and (max-width: 767px) {
    /* li:not(:last-child) {
      margin-bottom: 32px;
    } */
  }
`;
