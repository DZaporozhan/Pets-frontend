import { NoticesList } from 'components/NoticesList/NoticesList';
import { useEffect, useState } from 'react';
import { SectionList, Container } from './NoticesPage.styled';
import Modal from '../../components/Modal';
import { AddPetBtn } from '../../components/AddPetBtn/AddPetBtn';
import { Section } from '../../components/Section/Section';
import { Searchbar } from '../../components/Searchbar/Searchbar';
import {
  getNoticeByCategory,
  removeNotice,
  getFavoriteNotices,
  addNoticeToFavorite,
  removeNoticeFromFavorite,
} from 'services/api/notices';
import { useParams } from 'react-router-dom';

const NoticesPage = () => {
  const [notices, setNotices] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [favorite, setFavorite] = useState([]);

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

  useEffect(() => {
    (async () => {
      const allFavorite = await getFavoriteNotices();
      setFavorite(allFavorite.map(({ _id }) => _id));
    })();
  }, []);

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

  const addToFavoriteAndRemove = async id => {
    try {
      if (!favorite.includes(id)) {
        await addNoticeToFavorite(id);
        setFavorite(prev => [...prev, id]);
        return;
      }
      await removeNoticeFromFavorite(id);
      setFavorite(prev => prev.filter(el => el !== id));
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
      <SectionList>
        <Container>
          {notices.length !== 0 && (
            <NoticesList
              notices={notices}
              favorite={favorite}
              onDeleteNotice={onDeleteNotice}
              addToFavoriteAndRemove={addToFavoriteAndRemove}
            />
          )}
        </Container>
      </SectionList>
    </>
  );
};

export default NoticesPage;
