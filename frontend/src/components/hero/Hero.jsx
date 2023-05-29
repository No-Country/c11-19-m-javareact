// import values from '.';
import styled from 'styled-components'
import { HeroBackground } from './HeroBackground'

const HeroStyled = styled.article`
  display: grid;
`

const HeroText = styled.p`
  font-size: 1.25rem;
  font-weight: 800;
  padding: 1rem;
`

const Hero = () => {
  return (
    <HeroStyled>
      <div>
        <HeroBackground />
      </div>
      <HeroText>¡Bienvenidx a UPCIRCLE, la plataforma donde la creatividad y la sostenibilidad se unen para transformar el mundo de la producción y el diseño!</HeroText>
    </HeroStyled>
  )
}

export { Hero }
