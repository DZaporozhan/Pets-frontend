import styled from 'styled-components';

export const StyledList = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  background-color: ${p => p.theme.colors.background};

  @media ${p => p.theme.device.desktop} {
    gap: 22px;
  }
`;

export const Card = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  gap: 20px;
  padding: 16px 20px;
  width: 100%;
  /* min-width: 280px; */
  /* max-height: 541px; */
  background-color: ${p => p.theme.colors.white};
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: ${p => p.theme.radii.small};

  @media ${p => p.theme.device.tablet} {
    flex-direction: row;
    /* min-width: 704px; */
    /* height: 230px; */
    padding: 20px;
    border-radius: ${p => p.theme.radii.normal};
  }

  @media ${p => p.theme.device.desktop} {
    /* min-width: 821px; */
    /* height: 230px; */
    padding: 20px;
  }
`;
