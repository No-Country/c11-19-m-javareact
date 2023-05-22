import React, { useState } from 'react';
import styled from 'styled-components';
import PasswordField from './PasswordField';

const InputContainer = styled.div`
  position: relative;
`;

const ErrorMessage = styled.p`
  color: red;
  margin-top: 5px;
`;

const PasswordFieldSignup = ({ placeholder }) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState('');

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    if (confirmPassword !== '' && newPassword !== confirmPassword) {
      setPasswordError('Las contraseñas no coinciden');
    } else {
      setPasswordError('');
    }
  };

  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);

    if (newConfirmPassword !== password) {
      setPasswordError('Las contraseñas no coinciden');
    } else {
      setPasswordError('');
    }
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <InputContainer>
      <PasswordField
       
        value={password}
        onChange={handlePasswordChange}
        showPassword={showPassword}
        togglePassword={handleTogglePassword}
      /><label>Confirme la contraseña </label>
      <PasswordField
        
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
        showPassword={showPassword}
        togglePassword={handleTogglePassword}
      />
      {passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}
    </InputContainer>
  );
};

export default PasswordFieldSignup;
