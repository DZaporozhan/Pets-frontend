
import { Component } from 'react';
import Modal from '../../components/Modal';
import { AddPetBtn } from '../../components/AddPetBtn/AddPetBtn';
import { Section } from '../../components/Section/Section';
import { Searchbar } from '../../components/Searchbar/Searchbar';

import { NoticesList } from 'components/NoticesList/NoticesList';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Section, Contaainer } from './NoticesPage.styled';

axios.defaults.baseURL = 'https://pets-api-team1.onrender.com/api/';

export default class NoticesPage extends Component {
  state = {
    showModal: false,
  };
  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };
  
   const [notices, setNotices] = useState([]);
  const category = 'sell';

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
  render() {
    const { showModal } = this.state;
    return (
      <>
        <Section title={`Find your favorite pet`}>
          <Searchbar></Searchbar>
        </Section>
        <AddPetBtn onClick={this.toggleModal}></AddPetBtn>
        {showModal && <Modal onClose={this.toggleModal}></Modal>}
        <Section>
      <Contaainer>
        {notices.length !== 0 && <NoticesList notices={notices} />}
      </Contaainer>
    </Section>
      </>
    );
  }
}
