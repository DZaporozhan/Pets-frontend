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

export const EmptyImg = styled.img`
  display: block;
  /* -webkit-user-select: none; */
  margin: auto;
  cursor: zoom-in;
  background-color: hsl(0, 0%, 80%);
  /* border-radius: ${p => p.theme.radii.round}; */
`;

export const ImgWrap = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: ${p => p.theme.radii.normal};
  background-color: ${p => p.theme.colors.white};
  /* width: 300px; */
  min-height: 400px;
  height: 100%;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
`;

export const EmptyTitle = styled.h3`
  text-align: center;
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes[3]}px;
  color: ${p => p.theme.colors.black};
  line-height: 1.35;
  letter-spacing: 0.04em;

  @media ${p => p.theme.device.tablet} {
    font-size: ${p => p.theme.fontSizes[5]}px;
  }
`;

export const Text = styled.p`
  margin-bottom: 10px;
  text-align: center;
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes[1]}px;
  color: ${p => p.theme.colors.gray};
  line-height: 1.35;
  letter-spacing: 0.04em;

  @media ${p => p.theme.device.tablet} {
    font-size: ${p => p.theme.fontSizes[2]}px;
  }
`;
