import React from 'react';
import Modal from './Modal';
import RegistroFormulario from './FormRegistro';

const ModalRegistro = ({ onClose }) => {
  return (
    <Modal onClose={onClose}>
      <RegistroFormulario />
    </Modal>
  );
};

export default ModalRegistro;
