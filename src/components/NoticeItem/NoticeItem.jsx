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
  NoticePhoto,
} from './NoticeItem.styled';
import { getUser } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';

const defaultPhoto =
  'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png';

export const NoticeItem = ({
  notices,
  onDeleteNotice,
  addToFavorite,
  removeFromFavorite,
}) => {
  const {
    breed,
    location,
    price,
    birthday,
    title,
    category,
    imageURL,
    owner,
    _id,
  } = notices;

  const { id: userId, favorite = false } = useSelector(getUser);

  const ownerNotice = owner === userId;

  const onEditsText = text => {
    if (!text) return;
    if (text.length > 16) {
      return text.slice(0, 16) + '...';
    }
    return text;
  };

  const orAddedToFavorites = favorite?.includes(_id);

  return (
    <Item>
      <NoticePhoto
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
          <BtnDelete onClick={() => onDeleteNotice(_id)}>
            Delete
            <IconBtnDel style={{ width: 20, height: 20 }} />
          </BtnDelete>
        )}
      </Tumb>
      <CategoryTitleWraper>
        <CategoryTitle category={category}>{category}</CategoryTitle>
      </CategoryTitleWraper>
      <BtnAddFavorite onClick={() => addToFavorite(_id)}>
        <BtnAddFavoriteIcon
          style={{ width: 28, height: 28 }}
          orAddedToFavorites={orAddedToFavorites}
        />
      </BtnAddFavorite>
    </Item>
  );
};
