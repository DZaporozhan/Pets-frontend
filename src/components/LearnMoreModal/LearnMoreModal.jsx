import {
  Container,
  Title,
  ImageThumb,
  Tumb,
  ContactBtn,
} from './LearnMoreModal.styled';

const defaultPhoto =
  'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png';

export const LearnMoreModal = ({ noticeData }) => {
  console.log(noticeData);

  return (
    <Container>
      <Title> {noticeData.title} </Title>
      <Tumb> {noticeData.category}</Tumb>
      <ImageThumb
        src={
          (noticeData.imageURL &&
            `https://res.cloudinary.com/dqupdbup3/image/upload/${noticeData.imageURL?.toLowerCase()}`) ||
          defaultPhoto
        }
        alt={noticeData.title}
      />

      <li>{noticeData.category}</li>
      <li>Name: {noticeData.name}</li>
      <li>birthday: {noticeData.birthday}</li>
      <li>Breed: {noticeData.breed}</li>
      <li>Prace: {noticeData.price}</li>
      <li>The sex: {noticeData.sex}</li>
      <li>Email: {noticeData.email}</li>
      <li>Phone: {noticeData.phone}</li>
      <li>Comments: {noticeData.comments}</li>
      <ContactBtn primary onClick={window.open`tel:${noticeData.phone}`}>
        Contact
      </ContactBtn>
    </Container>
  );
};
// window.open`tel:${noticeData.phone