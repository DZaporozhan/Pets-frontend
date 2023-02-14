import {
  Container,
  Title,
  ImageThumb,
  // Tumb,
  ContactBtn,
  InfoWrapper,
  Description,
  AddToFavorites,
  ActionButtons,
  DescriptionValue,
  DescriptionStyle,
} from './LearnMoreModal.styled';

const defaultPhoto =
  'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png';

export const LearnMoreModal = ({
  noticeData,
  // onDeleteNotice,
  favorite,
  addToFavoriteAndRemove,
}) => {
  console.log(noticeData);

  return (
    <Container>
      <InfoWrapper>
        <ImageThumb
          src={
            (noticeData.imageURL &&
              `https://res.cloudinary.com/dqupdbup3/image/upload/${noticeData.imageURL?.toLowerCase()}`) ||
            defaultPhoto
          }
          alt={noticeData.title}
          category={noticeData.category}
        />
        <div>
          <Title> {noticeData.title} </Title>
          <ul>
            <li>
              <DescriptionStyle style={{ marginRight: 65 }}>
                Name:
              </DescriptionStyle>
              <DescriptionValue>{noticeData.name}</DescriptionValue>
            </li>
            <li>
              <DescriptionStyle style={{ marginRight: 47 }}>
                birthday:
              </DescriptionStyle>
              <DescriptionValue>{noticeData.birthday}</DescriptionValue>
            </li>
            <li>
              <DescriptionStyle style={{ marginRight: 65 }}>
                Breed:
              </DescriptionStyle>
              <DescriptionValue>{noticeData.breed}</DescriptionValue>
            </li>
            <li>
              <DescriptionStyle style={{ marginRight: 69 }}>
                Prace:
              </DescriptionStyle>
              <DescriptionValue>{noticeData.price}</DescriptionValue>
            </li>
            <li>
              <DescriptionStyle style={{ marginRight: 54 }}>
                The sex:
              </DescriptionStyle>
              <DescriptionValue>{noticeData.sex}</DescriptionValue>
            </li>
            <li>
              <DescriptionStyle style={{ marginRight: 71 }}>
                Email:
              </DescriptionStyle>
              <DescriptionValue>{noticeData.email}</DescriptionValue>
            </li>
            <li>
              <DescriptionStyle style={{ marginRight: 62 }}>
                Phone:
              </DescriptionStyle>
              <DescriptionValue>{noticeData.phone}</DescriptionValue>
            </li>
          </ul>
        </div>
      </InfoWrapper>
      <Description text={noticeData.comments} />

      <ActionButtons>
        <AddToFavorites
          authorized={!favorite}
          onClick={() => addToFavoriteAndRemove(noticeData._id)}
          favoriteId={favorite}
        />
        <ContactBtn href="tel:noticeData.phone">Сontact</ContactBtn>
      </ActionButtons>
    </Container>
  );
};
