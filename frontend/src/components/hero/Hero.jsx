// import values from '.';
import styled from 'styled-components'

const HeroStyled = styled.article`
  display: grid;
`

const HeroHexagonsContainer = styled.div`
  width: 100vw;
  padding-top: 3.5rem;
  padding-bottom: 1.5rem;
  background-image: url('./public/hero/hero-background.svg');
  background-repeat: no-repeat;
  background-size: cover;
  display: grid;
  row-gap: 1rem;
  grid-template-areas:
    'hexagon-1 . hexagon-2'
    'hexagon-3 hexagon-4 hexagon-5';

  & img {
    width: 6.0625rem;
  }
`

const Hexagon1 = styled.img`
  grid-area: hexagon-1;
  justify-self: end;
`
const Hexagon2 = styled.img`
  grid-area: hexagon-2;
  justify-self: end;
`
const Hexagon3 = styled.img`
  grid-area: hexagon-3;
`
const Hexagon4 = styled.img`
  grid-area: hexagon-4;
  align-self: end;
  justify-self: center;
`
const Hexagon5 = styled.img`
  grid-area: hexagon-5;
  justify-self: end;
`

const HeroText = styled.p`
  font-size: 1.25rem;
  font-weight: 800;
  padding: 1rem;
`

const Hero = () => {
  return (
    <HeroStyled>
      <HeroHexagonsContainer>
        <Hexagon1 src='https://res.cloudinary.com/drc41imav/image/upload/v1686162463/UpCircle/hero/unin7idlucvegsy3i0bl.png' alt='' />
        <Hexagon2 src='https://res.cloudinary.com/drc41imav/image/upload/v1686162463/UpCircle/hero/klx6bgwcmn5zyidbevxo.png' alt='' />
        <Hexagon3 src='https://res.cloudinary.com/drc41imav/image/upload/v1686162463/UpCircle/hero/e9zaw6jvjukipdte2mxk.png' alt='' />
        <Hexagon4 src='https://res.cloudinary.com/drc41imav/image/upload/v1686162463/UpCircle/hero/y0dmhgtytnfkednbqjm1.png' alt='' />
        <Hexagon5 src='https://res.cloudinary.com/drc41imav/image/upload/v1686162463/UpCircle/hero/y0dmhgtytnfkednbqjm1.png' alt='' />
      </HeroHexagonsContainer>
      <HeroText>¡Bienvenidx a UPCIRCLE, la plataforma donde la creatividad y la sostenibilidad se unen para transformar el mundo de la producción y el diseño!</HeroText>
    </HeroStyled>
  )
}

export { Hero }
