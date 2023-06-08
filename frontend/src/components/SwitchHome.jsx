import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: inline-block;
  width: 152px;
  height: 25px;
  border-radius: 15px;
  margin-right:0px;
  @media screen and (min-width: 769px) {
    margin-right:50px;
    margin-top:-10px;
 }
`;

const ToggleSwitch = styled.div`
  display: block;
  width: 70px;
  height: 25px;
  border-radius: 15px;
  margin-left:-0px;
  margin-right:30px;
  background-color: #f5f5f5;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: transform 0.6s ease;
  transform: ${({ isActive }) => (isActive ? 'translateX(82px)' : 'translateX(0)')};
  @media screen and (min-width: 769px) {
    margin-left:-5px;
    width: 110px;
  height: 35px;
  transition: transform 0.6s ease;
  transform: ${({ isActive }) => (isActive ? 'translateX(105px)' : 'translateX(0)')};
 }
`;

const ToggleContainer = styled.div`
  display: inline-block;
  width: 152px;
  height: 25px;
  border-radius: 15px;
  background-color: #b8e7d3;
  cursor: pointer;
  transition: background-color 0.6s ease;
  position: relative;

  &:active {
    background-color: #7fd1ae;
  }
  @media screen and (min-width: 769px) {
    width: 210px;
  height: 35px;
 }
`;

const ToggleButton = styled.input`
  display: none;
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 6px;
  font-size: 10px;
  color: #f5f5f5;
  font-weight: 800;
  @media screen and (min-width: 769px) {
    font-size: 16px;
 }
`;

const Text = styled(Link)`
  z-index: 10;
  margin-right: 10px;
  margin-left: 10px;
  margin-top: -27px;
  color: #374444;
  text-decoration: none;
  @media screen and (min-width: 769px) {
    margin-right: 10px;
  margin-left: 20px;
  margin-top: -37px;
 }
`;

const Switch = () => {
  const [isActive, setIsActive] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const location = useLocation();

  const handleToggle = () => {
    if (!isTransitioning) {
      setIsActive(!isActive);
      setIsTransitioning(true);
    }
  };

  useEffect(() => {
    if (isTransitioning) {
      setTimeout(() => {
        setIsTransitioning(false);
      }, 600); // Delay duration in milliseconds (e.g., 600ms)
    }
  }, [isActive, isTransitioning]);

  useEffect(() => {
    setIsActive(location.pathname === '/register');
  }, [location.pathname]);

  return (
    <Container>
      <ToggleContainer onClick={handleToggle}>
        <ToggleButton type='checkbox' checked={isActive} onChange={() => {}} />
        <ToggleSwitch isActive={isActive} />
        <TextContainer>
          <Text to='/login' className={location.pathname === '/login' ? 'active' : ''}>
            Ingresar
          </Text>
          <Text to='/register' className={location.pathname === '/register' ? 'active' : ''}>
            Registrarse
          </Text>
        </TextContainer>
      </ToggleContainer>
    </Container>
  );
};

export default Switch;
