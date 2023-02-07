import {
  Item,
  Description,
  DescriptionValue,
  LearnMore,
  CategoryTitleWraper,
  CategoryTitle,
  BtnAddFavorite,
  Tumb,
  Title,
  DescriptionList,
  DiscriptionWrapper,
  DescriptionValueList,
  BtnAddFavoriteIcon,
} from './NoticeItem.styled';

export const NoticeItem = () => {
  return (
    <div
      style={{
        maxWidth: '1200px',
        justifyContent: 'center',
        display: 'flex',
        listStyle: 'none',
      }}
    >
      <Item>
        <img
          style={{ height: 288, width: '100%' }}
          src="https://res.cloudinary.com/goit-academy/image/upload/v1614773221/codepen/cat_segyum.svg"
          alt="test"
        />
        <Tumb>
          <Title>Сute dog looking for a home</Title>
          <DiscriptionWrapper>
            <DescriptionList>
              <li>
                <Description>Breed:</Description>
              </li>
              <li>
                <Description>Place:</Description>
              </li>
              <li>
                <Description>Age:</Description>
              </li>
            </DescriptionList>
            <DescriptionValueList>
              <li>
                <DescriptionValue>Value</DescriptionValue>
              </li>
              <li>
                <DescriptionValue>Value</DescriptionValue>
              </li>
              <li>
                <DescriptionValue>Value</DescriptionValue>
              </li>
            </DescriptionValueList>
          </DiscriptionWrapper>
          <LearnMore>Learn more</LearnMore>
        </Tumb>
        <CategoryTitleWraper>
          <CategoryTitle>In good hands</CategoryTitle>
        </CategoryTitleWraper>
        <BtnAddFavorite>
          <BtnAddFavoriteIcon style={{ width: 28, height: 28 }} />
        </BtnAddFavorite>
      </Item>
    </div>
  );
};
