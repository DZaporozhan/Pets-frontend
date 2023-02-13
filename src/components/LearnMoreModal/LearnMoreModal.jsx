import { Container, Title, ImageThumb } from './LearnMoreModal.styled';

export const LearnMoreModal = ({ noticeData }) => {
  console.log(noticeData);
  return (
    <Container>
      <ImageThumb src={noticeData.imageURL} />
      src={noticeData.imageURL}
      category={noticeData.category}
      <Title> {noticeData.title} </Title>
      <li>{noticeData.category}</li>
      <li>Name: {noticeData.name}</li>
      <li>birthday: {noticeData.birthday}</li>
      <li>Breed: {noticeData.breed}</li>
      <li>Prace: {noticeData.price}</li>
      <li>The sex: {noticeData.sex}</li>
      <li>Email: {noticeData.email}</li>
      <li>Phone: {noticeData.phone}</li>
      <li>Comments: {noticeData.comments}</li>
    </Container>
  );
};
