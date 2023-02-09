import { NoticesList } from 'components/NoticesList/NoticesList';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Sections, Contaainer } from './NoticesPage.styled';
import Modal from '../../components/Modal';
import { AddPetBtn } from '../../components/AddPetBtn/AddPetBtn';
import { Section } from '../../components/Section/Section';
import { Searchbar } from '../../components/Searchbar/Searchbar';

axios.defaults.baseURL = 'https://pets-api-team1.onrender.com/api/';

const NoticesPage = () => {
  const [notices, setNotices] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const category = 'sell';

  const toggleModal = () => {
    setShowModal(prevState => {
      return !prevState;
    });
  };
  useEffect(() => {
    const getNotices = async category => {
      try {
        const noticeByCategory = await axios.get(
          `notices/?category=${category}`
        );

        setNotices(noticeByCategory);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    getNotices(category);
  }, []);

  return (
    <>
      <Section title={`Find your favorite pet`}>
        <Searchbar></Searchbar>
      </Section>
      <AddPetBtn onClick={toggleModal}></AddPetBtn>
      {showModal && <Modal onClose={toggleModal}></Modal>}
      <Sections>
        <Contaainer>
          {notices.length !== 0 && <NoticesList notices={notices} />}
        </Contaainer>
      </Sections>
    </>
  );
};

export default NoticesPage;
