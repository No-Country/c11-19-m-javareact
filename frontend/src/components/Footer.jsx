import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center; /* Added to center-align the text */
`;

const FooterText = styled.span`
  color: #5B7171;
  font-size: 14px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        Copyright © 2023 Upcircle. <p>All rights reserved.</p>
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
