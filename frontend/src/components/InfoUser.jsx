import styled from "styled-components";
import ImgPerfil from "../assets/img/PortadaPerfil.png";
import ImgBackground from "../assets/img/Group.png";
import BackArrow from "../assets/img/flecha.png";
import ImgLupa from "../assets/img/lupa.png";

import ProductSlider from "./ProductSlider";
import ButtonSlider from "./ButtonSlider";

const FondoPagina = styled.div`
  background-image: url(${ImgBackground});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  height: 435px;
  width: 100%;
`;

const TextInfoUser = styled.h1`
  color: var(--text-title);
  font-family: var(--family-two);
  padding: 2px 18px;
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.38px;
`;
const SearchInput = styled.input`
  background-color: white;
  height: 70%;
  width: 85%;
`;

const TextSearchProduct = styled.h3`
  font-size: 1rem;
  padding: 3px 18px;
`;
const BackArrowContainer = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  width: 60%;
  height: 22px;
  border-radius: 15px;
  padding: 2px 11px;
  margin: 6px 18px;
  box-shadow: 1px 2px 8px;
`;

const ImgLupaSearch = styled.img`
  width: 15%;
  height: 22px;
  padding: 2px;
`;

const UsuaroPerfilFoto = styled.img`
  width: 100%;
  height: 200px;
`;

const ButtonFilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 15px;
`;

const ContainerSlaider = styled.div`
  margin-top: 3px;
  width: 100%;
`

function InfoUser() {
  return (
    <FondoPagina>
      <BackArrowContainer>
        <img src={BackArrow} alt="Back arrow" />
      </BackArrowContainer>

      <UsuaroPerfilFoto src={ImgPerfil} alt="Foto de perfi" />
      <TextInfoUser>Hola, Andrea</TextInfoUser>
      <TextSearchProduct>¿Qué vas a crear hoy?</TextSearchProduct>

      <SearchContainer>
        <SearchInput placeholder="Buscar" />
        <ImgLupaSearch src={ImgLupa} alt="lupa" />
      </SearchContainer>

      <ButtonFilterContainer>
        <ButtonSlider />
      </ButtonFilterContainer>

      <h2>Favoritos</h2>
      <ContainerSlaider>
        <ProductSlider />
      </ContainerSlaider>
      <ContainerSlaider>
        <h2>Recomendados para ti</h2>
        <ProductSlider />
      </ContainerSlaider>
    </FondoPagina>
  );
}

export { InfoUser };
