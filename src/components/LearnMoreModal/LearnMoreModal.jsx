import {
  Container,
  Title,
  ImageThumb,
  ContactBtn,
  InfoWrapper,
  Description,
  AddToFavorites,
  ActionButtons,
  DescriptionValue,
  DescriptionStyle,
  CategoryTitleWraper,
  CategoryTitle,
} from './LearnMoreModal.styled';

const defaultPhoto =
  'https://img.freepik.com/premium-vector/cartoon-farm-animals-and-birds-cute-domestic-animal-characters-sheep-goat-pig-rabbit-dog-horse-turkey-livestock-farming-vector-set-wild-fauna-isolated-bison-deer-and-bull_461812-926.jpg?w=740';

const onEditsText = text => {
  if (!text) return;
  if (text.length > 16) {
    return text.slice(0, 16) + '...';
  }
  return text;
};

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
        />

        <div>
          <Title>{onEditsText(noticeData.title)}</Title>
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
      <CategoryTitleWraper>
        <CategoryTitle category={noticeData.category}>
          {noticeData.category}
        </CategoryTitle>
      </CategoryTitleWraper>
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
