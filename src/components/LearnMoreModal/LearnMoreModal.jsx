import { useSelector } from 'react-redux';
import { selectId, selectIsAuth } from 'redux/auth/selectors';
import {
  Container,
  Title,
  ImageThumb,
  ContactBtn,
  InfoWrapper,
  Description,
  DescriptionValue,
  DescriptionStyle,
  CategoryTitleWraper,
  CategoryTitle,
  ActionButtons,
  DeleteButton,
  ModalBtn,
} from './LearnMoreModal.styled';

import { FcDislike, FcLike } from 'react-icons/fc';
import { CiTrash } from 'react-icons/ci';

import petImage from '../../icons/pets.png';

import { useNavigate } from 'react-router';

export const LearnMoreModal = ({
  noticeData,
  onDeleteNotice,
  favorite,
  addToFavoriteAndRemove,
}) => {
  const authorized = useSelector(selectIsAuth);
  // дізнаємось що ми owner↓
  const userID = useSelector(selectId);
  const isOwner = noticeData.owner === userID;
  //дізнаємось що ми owner↑
  const favoriteId = favorite.find(elem => elem === noticeData._id);
  // Зміна кнопки або наповнення кнопки↑

  //===============================================
  const navigate = useNavigate();

  const onFavorite = async id => {
    if (authorized) {
      await addToFavoriteAndRemove(id);

      return;
    }
    navigate('/login');
  };

  return (
    <Container>
      <InfoWrapper>
        <ImageThumb
          src={`https://res.cloudinary.com/dqupdbup3/image/upload/${noticeData.imageURL?.toLowerCase()}`}
          alt={noticeData.title}
          onError={e => {
            e.target.onerror = null;
            e.target.src = petImage;
          }}
        />

        <div>
          <Title>{noticeData.title}</Title>
          <ul>
            <li>
              <DescriptionStyle style={{ marginRight: 65 }}>
                Name:
              </DescriptionStyle>
              <DescriptionValue>{noticeData.name}</DescriptionValue>
            </li>
            <li>
              <DescriptionStyle style={{ marginRight: 42 }}>
                Birthday:
              </DescriptionStyle>
              <DescriptionValue>{noticeData.birthday}</DescriptionValue>
            </li>
            <li>
              <DescriptionStyle style={{ marginRight: 63 }}>
                Breed:
              </DescriptionStyle>
              <DescriptionValue>{noticeData.breed}</DescriptionValue>
            </li>
            <li>
              <DescriptionStyle style={{ marginRight: 67 }}>
                Place:
              </DescriptionStyle>
              <DescriptionValue>{noticeData.location}</DescriptionValue>
            </li>
            <li>
              <DescriptionStyle style={{ marginRight: 53 }}>
                Thesex:
              </DescriptionStyle>
              <DescriptionValue>{noticeData.sex}</DescriptionValue>
            </li>
            <li>
              <DescriptionStyle style={{ marginRight: 67 }}>
                Email:
              </DescriptionStyle>
              <DescriptionValue>{noticeData.email}</DescriptionValue>
            </li>
            <li>
              <DescriptionStyle style={{ marginRight: 59 }}>
                Phone:
              </DescriptionStyle>
              <DescriptionValue>{noticeData.phone}</DescriptionValue>
            </li>
            <li>
              <DescriptionStyle style={{ marginRight: 70 }}>
                Price:
              </DescriptionStyle>
              <DescriptionValue>{noticeData.price}</DescriptionValue>
            </li>
          </ul>
        </div>
      </InfoWrapper>
      <CategoryTitleWraper>
        <CategoryTitle category={noticeData.category}>
          {noticeData.category}
        </CategoryTitle>
      </CategoryTitleWraper>
      <Description text={noticeData.comments} />

      {/* видалення усього notices якщо ти його owner ↓*/}
      {isOwner && (
        <DeleteButton onClick={() => onDeleteNotice(noticeData._id)}>
          <CiTrash />
        </DeleteButton>
      )}
      {/* видалення усього notices якщо ти його owner↑ */}

      <ActionButtons>
        <ModalBtn
          authorized={authorized}
          onClick={() => onFavorite(noticeData._id)}
        >
          {!favoriteId ? 'Add to' : 'Delete'}
          {!favoriteId ? <FcLike /> : <FcDislike />}
        </ModalBtn>
        <ContactBtn href="tel:noticeData.phone">Contact</ContactBtn>
      </ActionButtons>
    </Container>
  );
};
//=====================================
