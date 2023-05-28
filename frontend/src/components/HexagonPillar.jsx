import styled from 'styled-components'
import Hexagon from './icons/Hexagon'

const HexagonPillarStyled = styled.div`
  display: grid;
  grid-template-areas:
    'hexagonal'
    'text';
  place-items: center;
  filter: drop-shadow(0px 4px 16px rgba(0, 0, 0, 0.16));
  width: 85px;
  & > svg {
    grid-area: hexagonal;
  }
`
const Text = styled.p`
  grid-area: text;
  margin-top: 10px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 900;
  font-size: 10px;
  line-height: 12px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.38px;
  color: #5b7171;
`

function HexagonPillar({ Icon, text }) {
  return (
    <HexagonPillarStyled>
      <Hexagon />
      {Icon}
      <Text>{text}</Text>
    </HexagonPillarStyled>
  )
}

export { HexagonPillar }
