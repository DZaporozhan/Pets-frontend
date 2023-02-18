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
import { selectUser, selectIsAuth } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';
import Modal from '../Modal/Modal';
import { useState } from 'react';
import { LearnMoreModal } from '../LearnMoreModal/LearnMoreModal';
import { useNavigate } from 'react-router';
import calculateAge from 'calculate-age';
import numberToText from 'number-to-text';
import ClockLoader from 'react-spinners/ClockLoader';
import petImage from '../../icons/pets.png';
require('number-to-text/converters/en-us');

export const NoticeItem = ({
  notices,
  onDeleteNotice,
  favorite,
  addToFavoriteAndRemove,
  isLoading,
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
  const [clickId, setClickId] = useState(null);

  const { _id: userId } = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsAuth);

  const ownerNotice = owner === userId;
  const navigate = useNavigate();

  const onEditsText = text => {
    if (!text) return;
    if (text.length > 15) {
      return text.slice(0, 15) + '...';
    }
    return text;
  };

  const onStringBirthday = () => {
    if (!birthday) return;
    const date = birthday.split('.').reverse().join('-');
    const { years } = new calculateAge(new Date(date), new Date()).getObject();
    if (years === 0) {
      return 'Less than one year';
    }
    const numberToString = numberToText.convertToText(years, {
      case: 'lowerCase',
    });
    return (
      numberToString[0]?.toUpperCase() +
      numberToString.slice(1) +
      (numberToString === 'one' ? ' year' : ` years`)
    );
  };

  const onFavorite = async () => {
    if (isLoggedIn) {
      setClickId(_id);
      await addToFavoriteAndRemove(_id);
      setClickId(null);
      return;
    }
    navigate('/login');
  };

  return (
    <Item>
      <NoticePhoto
        src={
          (imageURL &&
            `https://res.cloudinary.com/dqupdbup3/image/upload/${imageURL?.toLowerCase()}`) ||
          petImage
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
            <DescriptionValue>
              {onEditsText(onStringBirthday())}
            </DescriptionValue>
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
      <BtnAddFavorite
        onClick={onFavorite}
        disabled={isLoading && clickId === _id}
      >
        {isLoading && clickId === _id ? (
          <ClockLoader color="#F59256" size={28} />
        ) : (
          <BtnAddFavoriteIcon
            style={{ width: 28, height: 28 }}
            orfavorites={{ favorite, _id }}
          />
        )}
      </BtnAddFavorite>
      {showModal && (
        <Modal onClose={() => setShowModal(prev => !prev)}>
          <LearnMoreModal
            noticeData={notices}
            favorite={favorite}
            onDeleteNotice={onDeleteNotice}
            addToFavoriteAndRemove={addToFavoriteAndRemove}
          />
        </Modal>
      )}
    </Item>
  );
};
