import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 24px;
  background: #374444;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Logo = styled.img`
  max-height: 40px;
  max-width: 140px;
`;

const NavigationBar = () => {
  return (
    <NavbarContainer>
      <a href="/">
        <Logo
          src='https://res.cloudinary.com/drc41imav/image/upload/v1685219349/UpCircle/LogoD_azrawy.svg'
          alt='Logo'
        />
      </a>
      <ul>
        <li><a href="#">Register</a></li>
        <li><a href="#">Login</a></li>
      </ul>
    </NavbarContainer>
  );
};

export default NavigationBar;
