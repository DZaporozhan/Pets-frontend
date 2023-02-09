import { Component } from 'react';
import Modal from '../../components/Modal';
import { AddPetBtn } from '../../components/AddPetBtn/AddPetBtn';
import { Section } from '../../components/Section/Section';
import { Searchbar } from '../../components/Searchbar/Searchbar';

export default class NoticesPage extends Component {
  state = {
    showModal: false,
  };
  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };
  render() {
    const { showModal } = this.state;
    return (
      <>
        <Section title={`Find your favorite pet`}>
          <Searchbar></Searchbar>
        </Section>
        <AddPetBtn onClick={this.toggleModal}></AddPetBtn>
        {showModal && <Modal onClose={this.toggleModal}></Modal>}
      </>
    );
  }
}
