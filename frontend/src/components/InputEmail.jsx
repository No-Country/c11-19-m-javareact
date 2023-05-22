import React, { useState } from 'react';
import styled from 'styled-components';

const EmailInputField = styled.input`
  padding: 8px 16px;
  border: 0.5px solid #808194;
  border-radius: 30px;
  position: relative;
  background: #fff;
`;

const ErrorMessage = styled.p`
  color: red;
  margin-top: 5px;
`;

const EmailInput = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
  };

  const handleEmailBlur = () => {
    if (email.trim() === '') {
      setEmailError('Por favor, ingresa un correo electrónico');
    } else if (!validateEmail(email)) {
      setEmailError('Por favor, ingresa un correo electrónico válido');
    } else {
      setEmailError('');
    }
  };

  return (
    <div>
      <label>Email</label>
      <EmailInputField
        type="email"
        value={email}
        onChange={handleEmailChange}
        onBlur={handleEmailBlur}
      />
      {emailError && <ErrorMessage>{emailError}</ErrorMessage>}
    </div>
  );
};

export default EmailInput;
