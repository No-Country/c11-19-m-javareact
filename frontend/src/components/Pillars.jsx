import { HexagonPillar } from './HexagonPillar'
import CommunityOkIcon from './icons/CommunityOkIcon'
import RecycleIcon from './icons/RecycleIcon'
import CircularEconomyIcon from './icons/CircularEconomyIcon'
import styled from 'styled-components'

const PillarSection = styled.div`
  display: flex;
  justify-content: space-around;
`

function Pillars() {
  return (
    <>
      <div>
        <PillarSection>
          <HexagonPillar Icon={<CommunityOkIcon />} text='Colaboración' />
          <HexagonPillar Icon={<RecycleIcon />} text='Reutilización' />
          <HexagonPillar Icon={<CircularEconomyIcon />} text='Economía Circular' />
        </PillarSection>
      </div>
    </>
  )
}

export default Pillars
