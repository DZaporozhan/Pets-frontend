import { Title, TitleWrapper } from './PetsData.styled';
import PetsList from './PetList/PetsList';
import { AddPetBtn } from 'components/AddPetBtn/AddPetBtn';
import { useState } from 'react';
import AddPetModal from './AddPetModal/AddPetModal';
import Modal from 'components/Modal';

const PetsData = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prevState => {
      return !prevState;
    });
  };

  return (
    <>
      <TitleWrapper>
        <Title>My pets:</Title>
        <AddPetBtn onClick={toggleModal} />
      </TitleWrapper>

      <PetsList />
      {showModal && (
        <Modal onClose={toggleModal}>
          <AddPetModal />
        </Modal>
      )}
    </>
  );
};

export default PetsData;
