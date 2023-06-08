import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";
// register Swiper custom elements

// register Swiper custom elements

const ButtonTypeMaterial = styled.button`
  border-radius: 17px;
  border: 2px solid var(--gray-3);
  font-size: 12px;
  padding: 5px 11px;
`;
const TextButton = styled.h2`
  font-family: var(--family-two);
  font-size: 1rem;
  padding: 2px 12px;
`;

export default () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2.5
    }
  };

  return (
    <Carousel responsive={responsive}>
      <div>
        <ButtonTypeMaterial>
          <TextButton>Todos</TextButton>
        </ButtonTypeMaterial>
      </div>
      <div>
        <ButtonTypeMaterial>
          <TextButton>Telas</TextButton>
        </ButtonTypeMaterial>
      </div>
      <div>
        <ButtonTypeMaterial>
          <TextButton>Metales</TextButton>
        </ButtonTypeMaterial>
      </div>
      <div>
        <ButtonTypeMaterial>
          <TextButton>Plasticos</TextButton>
        </ButtonTypeMaterial>
      </div>
      <div>
        <ButtonTypeMaterial>
          <TextButton>Carton</TextButton>
        </ButtonTypeMaterial>
      </div>
    </Carousel>
  );
};
