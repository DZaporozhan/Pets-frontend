import styled from 'styled-components';

export const Wrapper = styled.div`
width: 100%;
max-width: 280px;
margin: 40px auto 0;
@media ${p => p.theme.device.tablet} {
    margin: 60px auto 0;
    width: 704px;
    max-width: 704px;
  }
@media ${p => p.theme.device.desktop} {
    width: 1248px;
    max-width: 1248px;
  }
`;

export const List = styled.ul`
    display: grid;
	grid-template-columns: 280px;
	row-gap: 40px;
@media ${p => p.theme.device.tablet} {
    grid-template-columns: 336px 336px;
    row-gap: 60px;
    column-gap: 32px;
  }
@media ${p => p.theme.device.desktop} {
    display: grid;
    grid-template-columns: 395px 395px 395px;
  }
`;
