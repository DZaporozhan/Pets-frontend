import { List } from './NoticesList.styled';
import { NoticeItem } from 'components/NoticeItem/NoticeItem';

export const NoticesList = ({ notices }) => {
  const { result } = notices?.data?.data;

  return (
    <List>
      {result.map(el => (
        <NoticeItem notices={el} key={el._id} />
      ))}
    </List>
  );
};
