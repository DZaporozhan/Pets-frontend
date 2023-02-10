import { List } from './NoticesList.styled';
import { NoticeItem } from 'components/NoticeItem/NoticeItem';

export const NoticesList = ({
  notices,
  onDeleteNotice,
  addToFavorite,
  removeFromFavorite,
}) => {
  return (
    <List>
      {notices.map(el => (
        <NoticeItem
          notices={el}
          key={el._id}
          onDeleteNotice={onDeleteNotice}
          addToFavorite={addToFavorite}
          removeFromFavorite={removeFromFavorite}
        />
      ))}
    </List>
  );
};
