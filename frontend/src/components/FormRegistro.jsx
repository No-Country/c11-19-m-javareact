import React, { useState } from 'react';
import styled from 'styled-components';
import Boton from './Boton'
import InputField from './InputField'
import PasswordFieldSignup from './PasswordFieldSignup'
import EmailInput from './EmailInput'
import BotonGoogle from './BotonGoogle'
import CuitField from './CUITField'

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const RadioButtonContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const RadioButtonLabel = styled.label`
  margin-right: 10px;
`;

const ErrorMessage = styled.p`
  color: red;
  margin: 5px 0;
`;

const FormText = styled.label`
  color: #8EA4A4
`;

const RegistroFormulario = () => {
  const [formData, setFormData] = useState({
    tipoUsuario: '',
    email: '',
    password: '',
    confirmPassword: '',
    rememberMe: false,
    error: '',
    step: 1,
  });

  const handleRememberMeChange = (e) => {
    const checked = e.target.checked;
    setFormData((prevFormData) => ({
      ...prevFormData,
      rememberMe: checked,
    }));
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.step === 1) {
      if (!formData.tipoUsuario) {
        setFormData((prevFormData) => ({
          ...prevFormData,
          error: 'Por favor, elige un tipo de usuario',
        }));
        return;
      }

      setFormData((prevFormData) => ({
        ...prevFormData,
        step: 2,
        error: '',
      }));
    } else if (formData.step === 2) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        step: 3,
        error: '',
      }));
    } else if (formData.step === 3) {
      // Realizar lógica de envío del formulario aquí
      console.log('Tipo de Usuario:', formData.tipoUsuario);
      console.log('Email:', formData.email);
      console.log('Contraseña:', formData.password);

      setFormData({
        tipoUsuario: '',
        email: '',
        password: '',
        confirmPassword: '',
        rememberMe: false,
        error: '',
        step: 1,
      });
    }
  };

  return (
    <FormContainer>
      {formData.step === 1 && (
        <>
          <h5 className="form-titulo">¿Cuál es tu rol?</h5>
          <RadioButtonContainer>
            <RadioButtonLabel>
              <input 
                type="radio"
                name="tipoUsuario"
                value="ecocreador"
                checked={formData.tipoUsuario === 'ecocreador'}
                onChange={handleChange}
              />
              EcoCreador
            </RadioButtonLabel>
            <RadioButtonLabel>
              <input
                type="radio"
                name="tipoUsuario"
                value="ecoproveedor"
                checked={formData.tipoUsuario === 'ecoproveedor'}
                onChange={handleChange}
              />
              EcoProveedor
            </RadioButtonLabel>
          </RadioButtonContainer>
          {formData.error && (
            <ErrorMessage>{formData.error}</ErrorMessage>
          )}
          <Boton disabled={!formData.tipoUsuario} onClick={handleSubmit}>Continuar</Boton>
        </>
      )}
      {formData.step === 2 && (
        <>
          <h5 className="form-titulo">Ingresa a Upcircle y sé parte del cambio</h5>
          <BotonGoogle onClick={handleSubmit}>Registro con Google</BotonGoogle>
          <EmailInput />
          <FormText>Contraseña</FormText>
          <PasswordFieldSignup placeholder="Ingresa tu contraseña" />
          <label>
            <input
              type="checkbox"
              checked={formData.rememberMe}
              onChange={handleRememberMeChange}
            />
            Recordarme
          </label>
          {formData.error && (
            <ErrorMessage>{formData.error}</ErrorMessage>
          )}
          <Boton
            disabled={
              !formData.email ||
              !formData.password ||
              !formData.confirmPassword
            }
            onClick={handleSubmit}
          >
            Registrarse
          </Boton>
          <p className="registered">
            ¿Ya estás registradx? <a href="#login">Click acá</a>
          </p> 
        </>
      )}
      {formData.step === 3 && (
        <>
          {formData.tipoUsuario === 'ecocreador' && (
            <div>
              <h6 className="form-titulo">
                Completá tus datos para empezar a transformar el mundo como
              </h6>
              <h4 className="form-titulo-verde">EcoCreador</h4>
              <label>Nombres</label>
              <InputField
                placeholder='Tu nombre'
                name="nombres"
                value={formData.nombres}
                onChange={handleChange}
              />
              <label>Apellido</label>
              <InputField
                placeholder='Tu apellido'
                name="apellido"
                value={formData.apellido}
                onChange={handleChange}
              />
              <label>Ocupación</label>
              <InputField
                placeholder='Tu ocupación'
                name="ocupacion"
                value={formData.ocupacion}
                onChange={handleChange}
              />
            </div>
          )}
          {formData.tipoUsuario === 'ecoproveedor' && (
            <div>
              <h6 className="form-titulo">
                Completá tus datos para empezar a transformar el mundo como
              </h6>
              <h4 className="form-titulo verde">EcoProveedor</h4>
              <label>Nombres</label>
              <InputField
                placeholder='Tu nombre'
                name="nombres"
                value={formData.nombres}
                onChange={handleChange}
              />
              <label>Apellido</label>
              <InputField
                placeholder='Tu apellido'
                name="apellido"
                value={formData.apellido}
                onChange={handleChange}
              />
              <label>Razón Social</label>
              <InputField
                placeholder='Ej. Tu Empresa SRL'
                name="razonSocial"
                value={formData.razonSocial}
                onChange={handleChange}
              />
              <label>CUIT de la empresa</label>
              <CuitField
                name="cuit"
                value={formData.cuit}
                onChange={handleChange}
              />
            </div>
          )}
          <br />
          {formData.error && (
            <ErrorMessage>{formData.error}</ErrorMessage>
          )}
          <Boton
            disabled={
              (formData.tipoUsuario === 'ecocreador' &&
                (!formData.nombres ||
                  !formData.apellido ||
                  !formData.ocupacion)) ||
              (formData.tipoUsuario === 'ecoproveedor' &&
                (!formData.nombres ||
                  !formData.apellido ||
                  !formData.razonSocial ||
                  !formData.cuit))
            }
            onClick={handleSubmit}
          >
            Guardar
          </Boton>
        </>
      )}
    </FormContainer>
  );
  
};

export default RegistroFormulario;