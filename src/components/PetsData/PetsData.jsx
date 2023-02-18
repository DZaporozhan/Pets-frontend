import { Title, TitleWrapper } from './PetsData.styled';
import PetsList from './PetList/PetsList';
import { AddPetBtn } from 'components/AddPetBtn/AddPetBtn';
import { useState } from 'react';
import Modal from 'components/Modal';
import ModalAddsPet from './Form/ModalAddsPet';

const PetsData = () => {
  const className = 'user';
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
        <Modal onClose={toggleModal} className={className}>
          <ModalAddsPet onCancel={toggleModal} />
        </Modal>
      )}
    </>
  );
};

export default PetsData;
