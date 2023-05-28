import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

const InputContainer = styled.div`
  position: relative;
`

const PasswordInput = styled.input`
  padding: 8px 16px;
  border: 0.5px solid #808194;
  border-radius: 30px;
  position: relative;
  background: #fff;
`

const ToggleButton = styled.button`
  color: #808194;
  position: absolute;
  top: 45%;
  right: 0px;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  cursor: pointer;
`

const PasswordField = ({ placeholder, value, onChange, showPassword, togglePassword }) => {
  return (
    <InputContainer>
      <PasswordInput type={showPassword ? 'text' : 'password'} value={value} onChange={onChange} placeholder={placeholder} />
      <ToggleButton onClick={togglePassword}>
        <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
      </ToggleButton>
    </InputContainer>
  )
}

export default PasswordField
