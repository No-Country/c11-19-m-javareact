import React from "react";
import ContactModal from "./ContactModal";
import styled from "styled-components";

const Contenedor = styled.div`
  position: absolute;
  width: 312px;
  min-height: 71.2vh;
  height: 569px;
  left: 50%;
  transform: translate(-50%, 0);
  //   left: 5%;
  top: 12.5vh;
`;

function ContactContainer({ datos }) {
  return (
    <Contenedor>
      <ContactModal datosProveedor={datos} />
    </Contenedor>
  );
}

export default ContactContainer;
