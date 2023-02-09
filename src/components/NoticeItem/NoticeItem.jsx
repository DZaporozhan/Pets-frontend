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
  BtnAddFavoriteIcon,
  BtnDelete,
  IconBtnDel,
} from './NoticeItem.styled';

const defaultPhoto =
  'https://res.cloudinary.com/goit-academy/image/upload/v1614773221/codepen/cat_segyum.svg';
const userId = '63de3b5347179c3bdcb8d756';

export const NoticeItem = ({ notices }) => {
  const { breed, location, price, birthday, title, category, imageURL, owner } =
    notices;

  const ownerNotice = owner === userId;

  const onEditsText = text => {
    if (!text) return;
    if (text.length > 16) {
      return text.slice(0, 16) + '...';
    }
    return text;
  };

  return (
    <Item>
      <img
        style={{ height: 288, width: '100%' }}
        src={
          (imageURL &&
            `https://res.cloudinary.com/dqupdbup3/image/upload/${imageURL?.toLowerCase()}`) ||
          defaultPhoto
        }
        alt={title}
      />
      <Tumb ownerNotice={ownerNotice}>
        <Title>{onEditsText(title)}</Title>
        <DescriptionList>
          <li>
            <Description style={{ marginRight: 40 }}>Breed:</Description>
            <DescriptionValue>{onEditsText(breed)}</DescriptionValue>
          </li>
          <li>
            <Description style={{ marginRight: 43 }}>Place:</Description>
            <DescriptionValue>{onEditsText(location)}</DescriptionValue>
          </li>
          <li>
            <Description style={{ marginRight: 53 }}>Age:</Description>
            <DescriptionValue>{onEditsText(birthday)}</DescriptionValue>
          </li>
          {category === 'sell' && (
            <li>
              <Description style={{ marginRight: 47 }}>Price:</Description>
              <DescriptionValue>{onEditsText(price)}</DescriptionValue>
            </li>
          )}
        </DescriptionList>
        <LearnMore ownerNotice={ownerNotice}>Learn more</LearnMore>
        {ownerNotice && (
          <BtnDelete>
            Delete
            <IconBtnDel style={{ width: 20, height: 20 }} />
          </BtnDelete>
        )}
      </Tumb>
      <CategoryTitleWraper>
        <CategoryTitle category={category}>{category}</CategoryTitle>
      </CategoryTitleWraper>
      <BtnAddFavorite>
        <BtnAddFavoriteIcon style={{ width: 28, height: 28 }} />
      </BtnAddFavorite>
    </Item>
  );
};
