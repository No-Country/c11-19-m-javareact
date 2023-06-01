import { register } from "swiper/element/bundle";
import styled from "styled-components";
// register Swiper custom elements
register();
// Import Swiper styles
// import 'swiper/swiper.min.css';

const ButtonTypeMaterial = styled.button`
  border-radius: 17px;
  border: 2px solid var(--color-border);
  font-size: 12px;
  padding: 5px 11px;
`;
const TextButton = styled.h2`
  font-family: var(--family-two);
  font-size: 1rem;
  padding: 3px 18px;
`;

export default () => {
  return (
    <swiper-container
      slides-per-view="4"
      speed="300"
      loop="False"
      css-mode="true"
    >
      <swiper-slide>
        <ButtonTypeMaterial>
          <TextButton>Todos</TextButton>
        </ButtonTypeMaterial>
      </swiper-slide>
      <swiper-slide>
        <ButtonTypeMaterial>
          <TextButton>Telas</TextButton>
        </ButtonTypeMaterial>
      </swiper-slide>
      <swiper-slide>
        <ButtonTypeMaterial>
          <TextButton>Metales</TextButton>
        </ButtonTypeMaterial>
      </swiper-slide>
      <swiper-slide>
        <ButtonTypeMaterial>
          <TextButton>Plasticos</TextButton>
        </ButtonTypeMaterial>
      </swiper-slide>
      <swiper-slide>
        <ButtonTypeMaterial>
          <TextButton>Carton</TextButton>
        </ButtonTypeMaterial>
      </swiper-slide>
    </swiper-container>
  );
};
