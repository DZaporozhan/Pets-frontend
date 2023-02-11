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
import { selectUser } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';
import Modal from '../Modal/Modal';
import { useState } from 'react';
import { LearnMoreModal } from '../LearnMoreModal/LearnMoreModal';

const defaultPhoto =
  'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png';

export const NoticeItem = ({
  notices,
  onDeleteNotice,
  favorite,
  addToFavoriteAndRemove,
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

  const [showModal, setShowModal] = useState(false);

  const { _id: userId } = useSelector(selectUser);

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
        <LearnMore
          ownerNotice={ownerNotice}
          onClick={() => setShowModal(prev => !prev)}
        >
          Learn more
        </LearnMore>
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
      <BtnAddFavorite onClick={() => addToFavoriteAndRemove(_id)}>
        <BtnAddFavoriteIcon
          style={{ width: 28, height: 28 }}
          orfavorites={{ favorite, _id }}
        />
      </BtnAddFavorite>
      {showModal && (
        <Modal onClose={() => setShowModal(prev => !prev)}>
          <LearnMoreModal noticeData={notices} />
        </Modal>
      )}
    </Item>
  );
};
