import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  margin-top: 1rem;
  background: #99c2a2;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.16);
  border-radius: 30px;
  transition: background-color 0.3s, transform 0.3s;
  width: 16.5rem;
  height: 2.75rem;
  color: var(--white);
  font: var(--paragraph-l-bold);
  &:hover {
    background-color: #6d9f86;
    transform: translateY(-2px);
  }

  &:active {
    background-color: #6d9f86;
    transform: translateY(0);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }
  @media screen and (min-width: 769px) {
    width: 27.625rem;
  }
`

const Boton = ({ children, onClick }) => {
  return <Button onClick={onClick}>{children}</Button>
}

export default Boton
