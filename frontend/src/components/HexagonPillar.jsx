import styled from 'styled-components'
import Hexagon from './icons/Hexagon'

const HexagonPillarStyled = styled.div`
  display: grid;
  grid-template-areas:
    'hexagonal'
    'text';
  place-items: center;
  filter: drop-shadow(0px 4px 16px rgba(0, 0, 0, 0.16));
  
  & > svg {
    grid-area: hexagonal;
    width: 85px;
    height: 98px;
  }
  & svg:nth-child(2) {
    padding: 20px;
  }
  @media screen and (min-width: 769px) {
  
  & > svg {
    width: 210px;
    height: 242px;
  }
  & svg:nth-child(2) {
    padding: 40px !important;
  }
  }
`
const Text = styled.p`
  grid-area: text;
  margin-top: 10px;
  font: var(--heading-xxsmall);
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.38px;
  color: #5b7171;
  @media screen and (min-width: 769px) {
  font: var(--headline-medium)
  }
`

function HexagonPillar({ Icon, text }) {
  return (
    <HexagonPillarStyled>
      <Hexagon fill='#F3F3F3' />
      {Icon}
      <Text>{text}</Text>
    </HexagonPillarStyled>
  )
}

export { HexagonPillar }
