import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(4px); 
  z-index: 1; 
`;

const ModalContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #FFFFFF;
  box-shadow: 4px 4px 30px rgba(84, 84, 84, 0.1);
  border-radius: 8px;
  width: 200px;
  padding: 20px;
  z-index: 2; /* Place the modal content above the background */
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 0px;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 15px;
  color: #677472;
`;

const Modal = ({ onClose, children }) => {
  const handleCloseModal = () => {
    if (typeof onClose === 'function') {
      onClose();
    }
  };

  return (
    <>
      <Background /> 
      <ModalContent>
        <CloseButton onClick={handleCloseModal}>
          <FontAwesomeIcon icon={faTimes} />
        </CloseButton>
        {children}
      </ModalContent>
    </>
  );
};

export default Modal;
