import React from 'react';
import Modal from './Modal';
import FormLogin from './FormLogin';

const ModalRegistro = ({ onClose }) => {
  return (
    <Modal onClose={onClose}>
      <FormLogin />
    </Modal>
  );
};

export default ModalRegistro;
