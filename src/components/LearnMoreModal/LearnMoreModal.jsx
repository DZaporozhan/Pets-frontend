import {
  Container,
  Title,
  ImageThumb,
  // Tumb,
  ContactBtn,
  InfoWrapper,
  Description,
} from './LearnMoreModal.styled';

const defaultPhoto =
  'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png';

export const LearnMoreModal = ({
  noticeData,
  onDeleteNotice,
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
            <li>{noticeData.category}</li>
            <li>Name: {noticeData.name}</li>
            <li>birthday: {noticeData.birthday}</li>
            <li>Breed: {noticeData.breed}</li>
            <li>Prace: {noticeData.price}</li>
            <li>The sex: {noticeData.sex}</li>
            <li>Email: {noticeData.email}</li>
            <li>Phone: {noticeData.phone}</li>
          </ul>
        </div>
      </InfoWrapper>

      <Description text={noticeData.comments} />

      <ContactBtn href="tel:noticeData.phone">Сontact</ContactBtn>
    </Container>
  );
};
