import styled from 'styled-components';

// export const CardText = styled.div`
//   display: flex;
//   align-items: flex-start;
//   flex-direction: row;
//   gap: 20px;

//   @media ${p => p.theme.device.desktop} {
//     gap: 22px;
//   }
// `;

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
  cursor: pointer;

  @media ${p => p.theme.device.tablet} {
    top: 20px;
    background-color: ${p => p.theme.colors.background};
  }

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.accent};
    transition: ${p => p.theme.transition};
  }
`;
