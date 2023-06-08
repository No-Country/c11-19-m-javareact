// import values from '.';
import styled from 'styled-components'
import Hexagon from '../icons/Hexagon'

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

const Hexagon5 = styled.div`
  position: relative;
  grid-area: hexagon-5;
  justify-self: end;
  width: 6.875rem;
  color: white;
`
const HexagonStyled = styled(Hexagon)`
  position: absolute;
  z-index: 1;
`
const Hexagon5Text = styled.div`
  position: absolute;
  z-index: 1;
  display: flex;
  flex-direction: column;
  text-align: center;
  top: 20%;
  left: 25%;

  & h4 {
    font-weight: 900;
    line-height: 1.1875rem;
  }
  & span {
    font-weight: 700;
    font-size: 0.75rem;
    line-height: 1.375rem;
  }
`

const HeroText = styled.p`
  font-size: 1.25rem;
  line-height: 1.5rem;
  font-weight: 900;
  padding: 1rem;
  color: #5b7171;
`

const Hero = () => {
  return (
    <HeroStyled>
      <HeroHexagonsContainer>
        <Hexagon1 src='https://res.cloudinary.com/drc41imav/image/upload/v1686162463/UpCircle/hero/unin7idlucvegsy3i0bl.png' alt='' />
        <Hexagon2 src='https://res.cloudinary.com/drc41imav/image/upload/v1686162463/UpCircle/hero/klx6bgwcmn5zyidbevxo.png' alt='' />
        <Hexagon3 src='https://res.cloudinary.com/drc41imav/image/upload/v1686162463/UpCircle/hero/e9zaw6jvjukipdte2mxk.png' alt='' />
        <Hexagon4 src='https://res.cloudinary.com/drc41imav/image/upload/v1686162463/UpCircle/hero/y0dmhgtytnfkednbqjm1.png' alt='' />
        <Hexagon5>
          <HexagonStyled fill='#37444' />
          <Hexagon5Text>
            <h4>10Mil</h4>
            <h4>Kilos</h4>
            <span>reciclados!</span>
          </Hexagon5Text>
        </Hexagon5>
      </HeroHexagonsContainer>
      <HeroText>¡Bienvenidx a UPCIRCLE, la plataforma donde la creatividad y la sostenibilidad se unen para transformar el mundo de la producción y el diseño!</HeroText>
    </HeroStyled>
  )
}

export { Hero }
