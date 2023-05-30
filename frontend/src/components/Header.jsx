import styled from 'styled-components'
import SwitchHome from './SwitchHome'

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 0;
  background: #374444;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const Logo = styled.img`
  height: 40px;
  max-width: 150px;
  max-height: 40px;
  max-width: 140px;
`

const Header = () => {
  return (
    <HeaderStyled>
      <Logo src='https://res.cloudinary.com/drc41imav/image/upload/v1685219349/UpCircle/LogoD_azrawy.svg' alt='Logo' />
      <SwitchHome />
    </HeaderStyled>
  )
}

export { Header }
