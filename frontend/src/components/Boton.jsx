import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  background: #99c2a2;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.16);
  border-radius: 30px;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #6d9f86;
    transform: translateY(-2px);
  }

  &:active {
    background-color: #6d9f86;
    transform: translateY(0);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }
`

const Boton = ({ children, onClick }) => {
  return <Button onClick={onClick}>{children}</Button>
}

export default Boton
