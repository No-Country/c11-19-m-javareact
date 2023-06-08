// import styled from 'styled-components'
import { Layout } from '../routes/Layout'
import { Hero } from '../components/hero/Hero'
import Pillars from '../components/Pillars'
import styled from 'styled-components'
import { StatsHexagons } from '../components/StatsHexagons'

const MainStyled = styled.main`
  display: grid;
  gap: 3.5rem;
  @media screen and (min-width: 48.0625rem) {
    gap: 7.5rem;
  }
`

function Home() {
  return (
    <Layout>
      <MainStyled>
        <Hero />
        <Pillars />
        <StatsHexagons />
      </MainStyled>
    </Layout>
  )
}

export default Home
