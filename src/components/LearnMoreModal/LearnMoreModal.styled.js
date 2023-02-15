import styled from 'styled-components';
// import { FiHeart } from 'react-icons/fi';
// import { ModalButton } from 'components/ModalBtn/ModalBtn';
// import { ReactComponent as IconHeart } from '../../../src/icons/smallHeart.svg';

export const Container = styled.div`
  flex-direction: column;
  align-items: center;
  position: relative;
  border-radius: ${p => p.theme.radii.small};
  margin: 60px 20px 40px 20px;
  background-color: ${p => p.theme.colors.white};

  @media ${p => p.theme.device.tablet} {
    border-radius: ${p => p.theme.radii.normal};
    margin: 0px 20px 0px 0px;
    width: 608px;
  }
`;

export const Title = styled.h3`
  text-align: left;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  letter-spacing: -0.01em;
  margin-bottom: 16px;
  @media ${p => p.theme.device.tablet} {
    width: 228px;
    font-size: 28px;
  }
  @media ${p => p.theme.device.desktop} {
    width: 228px;
    font-size: 28px;
  }
`;

export const ContactBtn = styled.a`
  width: 248px;
  border-radius: 44px;
  padding: 8px 0px;
  border: 2px solid #ffffff;
  background: #f59256;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: ${({ ownerNotice }) => (ownerNotice ? '20px' : '0px')};
  font-family: 'Manrope';
  color: ${p => p.theme.colors.white};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: 16px;
  line-height: 22px;
  align-items: center;
  letter-spacing: 0.04em;
  transition: ${p => p.theme.transition};
  :focus,
  :hover {
    transform: scale(1.02);
    color: ${p => p.theme.colors.white};
    border-color: ${p => p.theme.colors.notFoundPage};
    cursor: pointer;
  }
`;
// export const BtnAddFavorite = styled.button`
//   position: absolute;
//   top: 12px;
//   right: 12px;
//   width: 44px;
//   height: 44px;
//   border-radius: 100%;
//   border-color: transparent;
//   align-items: center;
//   justify-content: center;
//   display: flex;
//   background-color: rgba(255, 255, 255, 0.6);
//   transition: ${p => p.theme.transition};
//   :focus,
//   :hover {
//     transform: scale(1.05);
//     cursor: pointer;
//   }
// `;
// export const BtnAddFavoriteIcon = styled(FiHeart)`
//   color: #f59256;
//   fill: ${({ orfavorites: { favorite, _id } }) =>
//     favorite.includes(_id) ? '#f59256' : 'rgba(255, 255, 255, 0.6)'};
// `;
export const InfoWrapper = styled.div`
  @media ${p => p.theme.device.tablet} {
    display: flex;
  }
  @media ${p => p.theme.device.desktop} {
    display: flex;
  }
`;

const DescriptionText = styled.p`
  margin: 28px 0 40px 0;
  text-align: left;
  font-size: 14px;
  line-height: 1.4;
  font-family: ${p => p.theme.fonts.body};
  font-style: normal;
  font-weight: 400;

  @media ${p => p.theme.device.tablet} {
    margin-bottom: 50px;
    font-size: 16px;
  }
  @media ${p => p.theme.device.desktop} {
    margin-bottom: 50px;
    font-size: 16px;
  }
`;

const DescriptionLabel = styled.span`
  font-weight: 600;
  font-family: ${p => p.theme.fonts.body};
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  @media ${p => p.theme.device.tablet} {
    margin-bottom: 40px;
    font-size: 16px;
  }
`;

export const Description = ({ text }) => (
  <DescriptionText>
    <DescriptionLabel>Comments: </DescriptionLabel>
    {text}
  </DescriptionText>
);
//13:59

// export const AddToFavorites = ({ authorized, onClick, favoriteId }) => (
//   <ModalButton authorized={authorized} onClick={onClick}>
//     {!favoriteId ? 'Add to' : 'Delete'}
//     <IconHeart />
//   </ModalButton>
// );

export const DescriptionValue = styled.span`
  font-family: ${p => p.theme.fonts.body};
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: #000000;
`;

export const DescriptionStyle = styled.span`
  font-family: ${p => p.theme.fonts.body};
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: #000000;
`;

export const ImageThumb = styled.img`
  position: relative;
  object-fit: hidden;
  width: 288px;
  height: 328px;
  //================

  top: 0px;
  /* overflow: hidden; */
  margin: 0 20px 16px 0;
  display: flex;
  border-radius: 0px 0px 40px 40px;
`;

export const CategoryTitleWraper = styled.div`
  position: absolute;
  top: 20px;
  left: 0px;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 6px 0px 6px 20px;
  width: 158px;
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
`;

export const CategoryTitle = styled.p`
  font-family: ${p => p.theme.fonts.body};
  text-align: ${({ category }) => (category === 'sell' ? 'center' : 'left')};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes[0]}px;
  line-height: 16px;
  align-items: center;
`;

export const DeleteButton = styled.button`
  position: absolute;
  top: 68px;
  right: 20px;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  width: 34px;
  height: 34px;
  border-radius: ${p => p.theme.radii.round};
  border: 0px;
  background: ${p => p.theme.colors.background};
  backdrop-filter: blur(2px);
  padding: 3px;
`;

export const ActionButtons = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  margin-top: 32px;
  align-items: center;
  @media ${p => p.theme.device.tablet} {
    width: 332px;
    flex-direction: row;
    gap: 8px;
    margin-left: auto;
    margin-bottom: 32px;
  }
`;

const ModalButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 240px;
  height: 40px;
  padding: 9px 41px;
  background: #ffffff;
  border: ${props =>
    props.authorized ? '2px solid #f59256' : '2px solid rgba(17, 17, 17, 0.1)'};
  border-radius: 40px;
  cursor: pointer;
  font-family: ${p => p.theme.colors.white};
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes[2]}px;
  // line-height: 1.37;
  transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1),
    border 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  color: ${p => (p.authorized ? 'black' : 'rgba(17, 17, 17, 0.1)')};
  fill: ${p => (p.authorized ? '#f59256' : 'rgba(17, 17, 17, 0.1)')};
  stroke: ${p => (p.authorized ? '#f59256' : 'rgba(17, 17, 17, 0.1)')};
  @media ${p => p.theme.device.tablet} {
    width: 180px;
    height: 40px;
  }
  ${props =>
    props.primary &&
    `
    background-color: #f59256;
    color: white;
    border: 2px solid #f59256;
    transition: background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1), color 0.25s cubic-bezier(0.4, 0, 0.2, 1), border 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    `}
`;

export const ModalBtn = styled(ModalButton)`
  color: ${({ authorized, primary }) => {
    if (!authorized && !primary) return 'rgba(17, 17, 17, 0.1)';
    if (primary) return 'white';
    return '#080706';
  }};
  width: 248px;
  @media ${p => p.theme.device.tablet} {
    width: 203px;
  }
`;
