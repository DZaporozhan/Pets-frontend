import { Title, NoticePhoto } from './LearnMoreModal.styled';

const defaultPhoto =
  'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png';

export const LearnMoreModal = ({ noticeData }) => {
  console.log(noticeData);
  return (
    <div>
      <NoticePhoto
        src={
          (noticeData.imageURL &&
            `https://res.cloudinary.com/dqupdbup3/image/upload/${imageURL?.toLowerCase()}`) ||
          defaultPhoto
        }
        alt={noticeData.title}
      />
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
    </div>
  );
};
