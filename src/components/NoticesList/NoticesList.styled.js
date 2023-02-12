import styled from 'styled-components';

export const List = styled.ul`
  @media screen and (max-width: 767px) {
    li:not(:last-child) {
      margin-bottom: 32px;
    }
  }

  list-style: none;
  @media screen and (${p => p.theme.device.tablet}) {
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
  }
`;
