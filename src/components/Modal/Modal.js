import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { BackDrop, ModalWindow, BtnClose, IconClose } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');
const body = document.querySelector('#root');

export default class Modal extends Component {
  componentDidMount() {
    body.style.position = 'fixed';
    window.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    body.style.position = 'unset';
    window.removeEventListener('keydown', this.onKeyDown);
  }

  onKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  onBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    const { onClose, className } = this.props;
    return createPortal(
      <BackDrop onClick={this.onBackdropClick}>
        <ModalWindow className={className}>
          <BtnClose type="button" onClick={onClose}>
            <IconClose width={16} height={16}></IconClose>
          </BtnClose>
          {this.props.children}
        </ModalWindow>
      </BackDrop>,
      modalRoot
    );
  }
}
