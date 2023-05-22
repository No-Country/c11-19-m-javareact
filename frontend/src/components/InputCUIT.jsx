import React, { useState } from 'react';
import InputField from './InputField';

const CuitField = () => {
    const [cuit, setCuit] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
  
    const handleCuitChange = (e) => {
      const input = e.target.value;
  
      // Validar si el valor ingresado es un número
      if (/^\d*$/.test(input)) {
        setCuit(input);
        setErrorMessage('');
      } else {
        setErrorMessage('El CUIT debe contener solo números');
      }
    };
  
    const handleBlur = () => {
      if (!cuit) return; // No mostrar mensaje de error si el campo está vacío al quitar el cursor
  
      // Validar si el valor ingresado es un número
      if (/^\d*$/.test(cuit)) {
        setErrorMessage('');
      } else {
        setErrorMessage('El CUIT debe contener solo números');
      }
    };
  
    return (
      <>
        <InputField
          type="text"
          value={cuit}
          onChange={handleCuitChange}
          onBlur={handleBlur}
          placeholder="Sin letras ni guiones"
        />
        {errorMessage && <p>{errorMessage}</p>}
      </>
    );
  };
  
  export default CuitField;