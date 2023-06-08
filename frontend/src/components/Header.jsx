import styled from 'styled-components'
import SwitchHome from './SwitchHome'
import { Link } from 'react-router-dom'

const HeaderStyled = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #374444;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  height: 5rem;

  @media (min-width: 48rem) {
    height: 9.75rem;
  }
  @media (min-width: 48.0625rem) {
    height: 9.75rem;
  }
`

const HeaderRedirect = styled(Link)`
  cursor: pointer;
`

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
`

const Logo = styled.img`
  width: 152px;

  @media (min-width: 48rem) {
    width: 18.75rem;
  }
  @media (min-width: 64rem) {
    width: 25rem;
  }
`

const Header = () => {
  return (
    <HeaderStyled>
      <HeaderContainer>
        <HeaderRedirect to='/'>
          <Logo src='https://res.cloudinary.com/drc41imav/image/upload/v1685219349/UpCircle/LogoD_azrawy.svg' alt='Logo' />
        </HeaderRedirect>
        <SwitchHome />
      </HeaderContainer>
    </HeaderStyled>
  )
}

export { Header }
