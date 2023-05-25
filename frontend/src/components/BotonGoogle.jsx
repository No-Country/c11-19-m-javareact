import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  background: #fff;
  font-size: 0.8em;
  color: #374444;
  border: 1px solid #e0e0e5;
  border-radius: 30px;
  padding: 1rem;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }
`

const BotonGoogle = ({ children, onClick }) => {
  return <Button onClick={onClick}>{children}</Button>
}

export default BotonGoogle
