import React, { useState } from 'react';
import styled from 'styled-components';
import Boton from './Boton'
import PasswordField from './PasswordField'
import EmailInput from './EmailInput'
import BotonGoogle from './BotonGoogle'

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top:10px;
  align-text: center;
`;
const RegistroFormulario = () => {
    return (
      <FormContainer>
        <h5 class="form-titulo">Ingresa a Upcircle</h5>
        <BotonGoogle>Ingresa con Google</BotonGoogle>
        <p class="form-texto">o ingresa con email</p>
        <EmailInput />
        <label>Contraseña</label>
        <PasswordField /><br/>
        <Boton>Ingresa</Boton>
        <a href="#" class="link-login">Olvidaste tu contraseña?</a>
      </FormContainer>
    );
  };
  
  export default RegistroFormulario;