import styled from 'styled-components';

export const Text = styled.p`
  margin-bottom: 12px;
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes[1]}px;
  color: ${p => p.theme.colors.black};
  line-height: 1.35;
  letter-spacing: 0.04em;

  @media ${p => p.theme.device.tablet} {
    font-size: ${p => p.theme.fontSizes[2]}px;
    line-height: 1.37;
  }
`;

export const DeleteIcon = styled.button`
  position: absolute;
  right: 20px;
  top: 273px;
  width: 44px;
  height: 44px;
  border-radius: ${p => p.theme.radii.round};
  background-color: ${p => p.theme.colors.white};
  border: none;
  color: ${p => p.theme.colors.gray};
  /* color: 'rgba(17, 17, 17, 0.6)'  */
  cursor: pointer;

  @media ${p => p.theme.device.tablet} {
    top: 20px;
    background-color: ${p => p.theme.colors.background};
  }

  &:hover,
  &:focus {
    box-shadow: 7px 4px 14px #f59256;
    color: white;
    background-color: ${p => p.theme.colors.accent};
    /* box-shadow: 2px 2px 20px 2px #f59256; */
    transition: ${p => p.theme.transition};
  }
`;

export const ImgWrapper = styled.div`
  width: 240px;
  height: 240px;
  /* border-radius: ${p => p.theme.radii.small}; */

  @media ${p => p.theme.device.tablet} {
    width: 161px;
    height: 161px;
    /* border-radius: ${p => p.theme.radii.normal}; */
  }
`;

export const Btn = styled.button`
  width: 240px;
  height: 240px;
  background-color: transparent;
  border: none;
  border-radius: ${p => p.theme.radii.small};
  cursor: pointer;

  &:hover,
  &:focus {
    box-shadow: 7px 4px 14px #f59256;
    /* box-shadow: 2px 2px 20px 2px #f59256; */
    transition: ${p => p.theme.transition};
  }

  @media ${p => p.theme.device.tablet} {
    width: 161px;
    height: 161px;
    border-radius: ${p => p.theme.radii.normal};
  }
`;

export const Img = styled.img`
  /* width: 240px;
  height: 240px; */
  border-radius: ${p => p.theme.radii.small};

  @media ${p => p.theme.device.tablet} {
    /* width: 161px;
    height: 161px; */
    border-radius: ${p => p.theme.radii.normal};
  }
`;

export const TextWrapper = styled.div`
  width: 235px;
  /* height: 240px; */
  border-radius: ${p => p.theme.radii.small};

  @media ${p => p.theme.device.tablet} {
    width: 471px;
    /* height: 161px; */
    border-radius: ${p => p.theme.radii.normal};
  }

  @media ${p => p.theme.device.desktop} {
    width: 580px;
    /* height: 161px; */
    border-radius: ${p => p.theme.radii.normal};
  }
`;
