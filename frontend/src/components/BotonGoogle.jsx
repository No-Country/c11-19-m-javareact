import React from 'react'
import styled from 'styled-components'
import GoogleIcon from './icons/GoogleIcon'

const Button = styled.button`
  background: var(--white);
  font-size: 0.8em;
  color: var(--grey-4);
  border: 1px solid #e0e0e5;
  border-radius: 30px;
  padding: 10px;
  transition: background-color 0.3s, transform 0.3s;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  width: 16.5rem;
  margin-bottom: 5px;
  & svg {
    width: 24px;
  }
  &:hover {
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }
  @media screen and (min-width: 769px) {
    width: 27.625rem;
    margin-bottom: 10px;
  }
`

const BotonGoogle = ({ children, onClick }) => {
  return (
    <Button onClick={onClick}>
      <GoogleIcon />
      {children}
    </Button>
  )
}

export { BotonGoogle }
