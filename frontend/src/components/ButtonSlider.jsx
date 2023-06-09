import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState, useEffect } from "react";

// register Swiper custom elements

// register Swiper custom elements

const LimiteDiv = styled.div`
  max-width: 600px;
`;

const ButtonTypeMaterial = styled.button`
  border-radius: 17px;
  border: 2px solid var(--gray-3);
  font-size: 12px;
  padding: 5px 11px;
  width: 100px;
  display: flex;
  justify-content: center;
`;
const TextButton = styled.h2`
  font-family: var(--family-two);
  font-size: 1rem;
  padding: 2px 12px;
`;

export default ({ seleccion, selected }) => {
  const [botonValue, setBotonValue] = useState("");

  const opciones = ["Otros", "Telas", "Metales", "Plasticos", "Carton"];

  function handleItemClick(opcion) {
    setBotonValue(opcion);
  }

  useEffect(() => {
    seleccion(botonValue);
  }, [botonValue]);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 600 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 600, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };

  return (
    <div>
      <LimiteDiv>
        <Carousel responsive={responsive} showDots={false}>
          {opciones.map((opcion, i) => (
            <div key={i}>
              <ButtonTypeMaterial
                value={opcion}
                onClickCapture={() => handleItemClick(opcion)}
              >
                <TextButton>{opcion}</TextButton>
              </ButtonTypeMaterial>
            </div>
          ))}
        </Carousel>
      </LimiteDiv>
    </div>
  );
};
