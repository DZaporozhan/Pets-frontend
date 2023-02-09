import { Outlet } from 'react-router-dom';
import React, { Component, Suspense } from 'react';
import { Header } from '../Header/Header';
import Modal from '../Modal';
import { AddPetBtn } from '../AddPetBtn/AddPetBtn';
export default class SharedLayout extends Component {
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
        <Header />
        <Suspense fallback={<div> Loading ...</div>}>
          <Outlet />
        </Suspense>
        <AddPetBtn onClick={this.toggleModal}></AddPetBtn>
        {showModal && <Modal onClose={this.toggleModal}></Modal>}
      </>
    );
  }
}
