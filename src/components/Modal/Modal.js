import React, { Component } from 'react';
import { BackDrop, ModalWindow } from './Modal.styled';

export default class Modal extends Component {
  render() {
    return (
      <BackDrop>
        <ModalWindow></ModalWindow>
      </BackDrop>
    );
  }
}
