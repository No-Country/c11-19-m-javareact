import styled from 'styled-components'
import { Layout } from '../routes/Layout'
import ImgPerfil from '../assets/img/PortadaPerfil.png'
import ImgBackground from '../assets/img/Group.png'
import BackArrow from '../assets/img/flecha.png'
import ImgLupa from '../assets/img/lupa.png'
import React from 'react'

import ProductSlider from '../components/ProductSlider'
import ButtonSlider from '../components/ButtonSlider'

const FondoPagina = styled.div`
  background-image: url(${ImgBackground});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  height: 60%;
  width: 100%;
`

const TextInfoUser = styled.h1`
  color: var(--text-title);
  font-family: var(--family-two);
  padding: 2px 18px;
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.38px;
`
const SearchInput = styled.input`
  background-color: white;
  height: 70%;
  width: 85%;
  outline: none;

`

const TextSliderProduct = styled.h2`
  font-size: 1rem;
  padding: 3px 18px;
  margin-top: 22px;
`

const TextSearchProduct = styled.h3`
  font-size: 1rem;
  padding: 3px 18px;
`
const BackArrowContainer = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
`

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  width: 60%;
  height: 25px;
  border-radius: 15px;
  padding: 2px 11px;
  margin: 6px 18px;
  box-shadow: 1px 2px 8px;
`

const ImgLupaSearch = styled.img`
  width: 20px;
  height: 20px;
  padding: 2px;
`

const UsuarioPerfilFoto = styled.img`
  width: 100%;
  height: 60vh;
`

const ButtonFilterContainer = styled.div`
  /* display: flex; */
  flex-direction: row;
  justify-content: space-around;
  margin-top: 22px;
  padding: 0px 15px;
`

const ContainerSlaider = styled.div`
  padding: 0px 15px;
  margin-top: 3px;
  width: 100%;
  margin-top: 22px;
`

function InfoUser() {
  return (
    <Layout>
      <FondoPagina>
        <BackArrowContainer>
          <img src={BackArrow} alt='Back arrow' />
        </BackArrowContainer>

        <UsuarioPerfilFoto src={ImgPerfil} alt='Foto de perfi' />
        <TextInfoUser>Hola, Valentina</TextInfoUser>
        <TextSearchProduct>¿Qué vas a crear hoy?</TextSearchProduct>

        <SearchContainer>
          <SearchInput placeholder='Buscar' />
          <ImgLupaSearch src={ImgLupa} alt='lupa' />
        </SearchContainer>

        <ButtonFilterContainer>
          <ButtonSlider />
        </ButtonFilterContainer>

        <TextSliderProduct>Favoritos</TextSliderProduct>
        <ContainerSlaider>
          <ProductSlider />
        </ContainerSlaider>
        <TextSliderProduct>Recomendados para ti</TextSliderProduct>
        <ContainerSlaider>
          <ProductSlider />
        </ContainerSlaider>
      </FondoPagina>
    </Layout>
  )
}

export { InfoUser }
