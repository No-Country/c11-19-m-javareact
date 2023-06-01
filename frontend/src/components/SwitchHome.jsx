import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.span`
  display: inline-block;
  width: 180px;
  height: 30px;
  border-radius: 15px;
`

const ToggleSwitch = styled(Link)`
  display: block;
  width: 90px;
  height: 30px;
  border-radius: 15px;
  background-color: #f5f5f5;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s;
  transform: ${({ isActive }) => (isActive ? 'translateX(90px)' : 'translateX(0)')};
`

const ToggleContainer = styled(Link)`
  display: inline-block;
  width: 180px;
  height: 30px;
  border-radius: 15px;
  background-color: #b8e7d3;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #7fd1ae;
  }

  &:hover ${ToggleSwitch} {
    transform: translateX(90px);
  }
`

const ToggleButton = styled.input`
  display: none;
`

const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  font-size: 14px;
  color: #f5f5f5;
  font-weight: 800;
`

const Text = styled.span`
  margin-right: 10px;
  margin-left: 10px;
  margin-top: -10px;
`

const Switch = () => {
  const [isActive, setIsActive] = useState(false)

  const handleToggle = () => {
    setIsActive(!isActive)
  }

  return (
    <Container>
      <ToggleContainer to='/login'>
        <ToggleButton type='checkbox' checked={isActive} onChange={handleToggle} />
        <ToggleSwitch isActive={isActive} to='/register' />
      </ToggleContainer>
      <TextContainer>
        <Text>Ingresar</Text>
        <Text>Registrarse</Text>
      </TextContainer>
    </Container>
  )
}

export default Switch
