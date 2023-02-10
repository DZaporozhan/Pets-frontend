import styled from 'styled-components';
import { FiHeart } from 'react-icons/fi';
import { HiTrash } from 'react-icons/hi2';

export const Item = styled.li`
  @media screen and (max-width: 767px) {
    max-width: 280px;
  }
  @media screen and (max-width: 1279px) {
    width: 336px;
  }
  @media screen and (min-width: 1280px) {
    width: 280px;
  }

  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  position: relative;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  background: #ffffff;
`;

export const NoticePhoto = styled.img`
  object-fit: cover;
  height: 288px;
  width: 100%;
`;

export const Tumb = styled.div`
  padding: ${({ ownerNotice }) =>
    ownerNotice ? '20px 16px 12px 16px' : '20px 16px 32px 16px'};
`;

export const Title = styled.h4`
  font-family: 'Manrope, sans-serif';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  letter-spacing: -0.01em;
  margin-bottom: 20px;
  padding-left: 4px;
  color: #111111;
`;

export const DescriptionList = styled.ul`
  padding-left: 4px;
  li:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const Description = styled.span`
  font-family: 'Manrope, sans-serif';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: #111111;
`;

export const DescriptionValue = styled.span`
  font-family: 'Manrope, sans-serif';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: #111111;
`;

export const LearnMore = styled.button`
  width: 248px;
  border-radius: 44px;
  padding: 8px 0px;
  border: 2px solid #f59256;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: ${({ ownerNotice }) => (ownerNotice ? '20px' : '50px')};
  font-family: 'Manrope, sans-serif';
  color: #f59256;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  align-items: center;
  letter-spacing: 0.04em;
  transition: transform 300ms, color 300ms, border-color 300ms;
  :focus,
  :hover {
    transform: scale(1.03);
    color: #ff6101;
    border-color: #ff6101;
    cursor: pointer;
  }
`;

export const BtnDelete = styled.button`
  font-family: 'Manrope, sans-serif';
  display: flex;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  align-items: center;
  width: 248px;
  border-radius: 44px;
  padding: 8px 0px;
  border: 2px solid #f59256;
  background: #ffffff;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: #f59256;
  margin-top: 12px;
  transition: transform 200ms, color 200ms, border-color 300ms;
  :focus,
  :hover {
    transform: scale(1.03);
    color: #ff6101;
    border-color: #ff6101;
    cursor: pointer;
  }
`;

export const IconBtnDel = styled(HiTrash)`
  margin-left: 12px;
`;

export const CategoryTitleWraper = styled.div`
  position: absolute;
  top: 20px;
  left: 0px;
  background-color: rgba(255, 255, 255, 0.6);
  padding: 6px 0px 6px 20px;
  width: 158px;
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
`;

export const CategoryTitle = styled.p`
  font-family: 'Inter, sans-serif';
  text-align: ${({ category }) => (category === 'sell' ? 'center' : 'left')};
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
`;

export const BtnAddFavorite = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 44px;
  height: 44px;
  border-radius: 100%;
  border-color: transparent;
  align-items: center;
  justify-content: center;
  display: flex;
  background-color: rgba(255, 255, 255, 0.6);
  transition: transform 300ms, background-color 500ms;
  :focus,
  :hover {
    transform: scale(1.05);

    cursor: pointer;
  }
`;

export const BtnAddFavoriteIcon = styled(FiHeart)`
  color: #f59256;
  fill: ${({ orAddedToFavorites }) =>
    orAddedToFavorites ? '#f59256' : 'rgba(255, 255, 255, 0.6)'};
`;
