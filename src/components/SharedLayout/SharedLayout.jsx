import { Outlet } from 'react-router-dom';
import React, { Component, Suspense } from 'react';
import { Header } from '../Header/Header';
import Modal from '../Modal';

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

        <button type="button" onClick={this.toggleModal}>
          Open Modal
        </button>
        {showModal && <Modal />}
      </>
    );
  }
}
