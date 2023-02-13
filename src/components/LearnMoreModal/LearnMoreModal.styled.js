import styled from 'styled-components';

export const Container = styled.div``;

export const Title = styled.div`
  text-align: center;
`;
export const ImageThumb = styled.img`
  object-fit: cover;
  height: 288px;
  width: 100%;
`;
export const Tumb = styled.div`
  padding: ${({ ownerNotice }) =>
    ownerNotice ? '20px 16px 12px 16px' : '20px 16px 32px 16px'};
`;
export const ContactBtn = styled.button`
  width: 248px;
  border-radius: 44px;
  padding: 8px 0px;
  border: 2px solid #f59256;
  background: ${p => p.theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: ${({ ownerNotice }) => (ownerNotice ? '20px' : '50px')};
  font-family: ${p => p.theme.colors.white};
  color: ${p => p.theme.colors.accent};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes[2]}px;
  line-height: 22px;
  align-items: center;
  letter-spacing: 0.04em;
  transition: ${p => p.theme.transition};
  :focus,
  :hover {
    transform: scale(1.02);
    color: ${p => p.theme.colors.hoverButton};
    border-color: ${p => p.theme.colors.hoverButton};
    cursor: pointer;
  }
`;
// export const ImageThumb = ({ src, alt = '', category }) => (
//   <ImageWrapper>
//     <img src={src} alt={alt} />
//     {category && <CategoryLabel>{category}</CategoryLabel>}
//   </ImageWrapper>
// );
// const ImageWrapper = styled.div`
//   position: relative;
//   width: 240px;
//   height: 240px;
//   border-radius: 0px 0px 40px 40px;
//   overflow: hidden;
//   margin: 0 auto 16px auto;
//   @media ${p => p.theme.media.tablet} {
//     width: 288px;
//     height: 328px;
//     margin: 0 20px 0 0;
//   }
//   @media ${p => p.theme.media.desktop} {
//     width: 288px;
//     height: 328px;
//     margin: 0 20px 0 0;
//   }
// `;
// const CategoryLabel = styled.div`
//   position: absolute;
//   top: 20px;
//   left: 0;
//   width: 158px;
//   padding: 6px 20px;
//   background-color: rgba(255, 255, 255, 0.6);
//   backdrop-filter: blur(50px);
//   border-radius: 0 20px 20px 0;
// `;
