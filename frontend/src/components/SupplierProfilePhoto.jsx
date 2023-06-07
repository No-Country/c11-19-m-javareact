import styled from 'styled-components'

const Hexagon = styled.div`
  width: 6.25rem;
  height: 10.825rem;
  background-color: #f2f2f2;
  position: relative;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
`

const HexagonContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

const HexagonText = styled.span`
  font-size: 1rem;
`

const HexagonComponent = ({ text }) => (
  <Hexagon>
    <HexagonContent>
      <HexagonText>{text}</HexagonText>
    </HexagonContent>
  </Hexagon>
)

const SupplierProfilePhoto = ({ photoURL }) => {
  return (
    <Hexagon>
      <HexagonContent>
        <HexagonText>xd</HexagonText>
      </HexagonContent>
    </Hexagon>
  )
}
export { SupplierProfilePhoto }
