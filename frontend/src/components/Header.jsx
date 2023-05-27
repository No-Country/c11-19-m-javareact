import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 24px;
  background: #374444;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Logo = styled.img`
  height: 40px;
  max-width: 150px;
`;

const NavigationBar = () => {
  return (
    <NavbarContainer>
      <Logo
        src='https://res.cloudinary.com/drc41imav/image/upload/v1685218883/UpCircle/LogoD_sz9nqp.svg'
        alt='Logo'
      />
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Register</a></li>
        <li><a href="#">Login</a></li>

      </ul>
    </NavbarContainer>
  );
};

export default NavigationBar;
