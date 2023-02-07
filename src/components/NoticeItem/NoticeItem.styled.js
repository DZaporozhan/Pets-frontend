import styled from 'styled-components';
import { FiHeart } from 'react-icons/fi';

export const Item = styled.li`
  width: 280px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  position: relative;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  background: #ffffff;
`;

export const Tumb = styled.div`
  padding: 20px 16px 32px 16px;
`;

export const Title = styled.h4`
  /* font-family: 'Manrope'; */
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  letter-spacing: -0.01em;
  margin-bottom: 20px;
  padding-left: 4px;
  color: #111111;
`;

export const DiscriptionWrapper = styled.div`
  display: flex;
`;

export const DescriptionList = styled.ul`
  padding-left: 4px;
  li:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const Description = styled.span`
  /* font-family: 'Manrope'; */
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: #111111;
`;

export const DescriptionValueList = styled.ul`
  li:not(:last-child) {
    margin-bottom: 8px;
  }
  margin-left: 40px;
`;

export const DescriptionValue = styled.span`
  /* font-family: 'Manrope'; */
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
  margin-top: 50px;
  /* font-family: 'Manrope'; */
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
    color: #2196f3;
    border-color: #2196f3;
    cursor: pointer;
  }
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
  /* font-family: 'Inter'; */
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
    background-color: #2196f3;
    cursor: pointer;
  }
`;

export const BtnAddFavoriteIcon = styled(FiHeart)`
  color: #f59256;
  transition: color 300ms, transform 300ms;
`;
