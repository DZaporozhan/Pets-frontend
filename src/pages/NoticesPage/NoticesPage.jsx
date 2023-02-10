import { NoticesList } from 'components/NoticesList/NoticesList';
import { useEffect, useState } from 'react';
import { Sections, Container } from './NoticesPage.styled';
import Modal from '../../components/Modal';
import { AddPetBtn } from '../../components/AddPetBtn/AddPetBtn';
import { Section } from '../../components/Section/Section';
import { Searchbar } from '../../components/Searchbar/Searchbar';
import {
  getNoticeByCategory,
  removeNotice,
  addNoticeToFavorite,
  removeNoticeFromFavorite,
} from 'services/api/notices';
import { useParams } from 'react-router-dom';

const NoticesPage = () => {
  const [notices, setNotices] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const { categoryName } = useParams;

  const toggleModal = () => {
    setShowModal(prevState => {
      return !prevState;
    });
  };

  useEffect(() => {
    const getNotices = async () => {
      try {
        const noticesByCategory = await getNoticeByCategory({
          category: categoryName,
        });
        setNotices(noticesByCategory.data.data.result);
      } catch (error) {
        console.log(error);
      }
    };
    getNotices();
  }, [categoryName]);

  const onDeleteNotice = async id => {
    try {
      const { id: elId } = await removeNotice(id);
      if (elId) {
        const newNotices = notices.filter(({ _id }) => elId !== _id);
        setNotices(newNotices);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addToFavorite = async id => {
    try {
      const added = await addNoticeToFavorite(id);
      console.log(added);
    } catch (error) {
      console.log(error);
    }
  };

  const removeFromFavorite = async id => {
    try {
      const removed = await removeNoticeFromFavorite(id);
      console.log(removed);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Section title={`Find your favorite pet`}>
        <Searchbar></Searchbar>
      </Section>
      <AddPetBtn onClick={toggleModal}></AddPetBtn>
      {showModal && <Modal onClose={toggleModal}></Modal>}
      <Sections>
        <Container>
          {notices.length !== 0 && (
            <NoticesList
              notices={notices}
              onDeleteNotice={onDeleteNotice}
              addToFavorite={addToFavorite}
              removeFromFavorite={removeFromFavorite}
            />
          )}
        </Container>
      </Sections>
    </>
  );
};

export default NoticesPage;
