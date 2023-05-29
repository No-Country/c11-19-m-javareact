import styled from 'styled-components'

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 24px;
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
      <ul>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#'>Register</a>
        </li>
        <li>
          <a href='#'>Login</a>
        </li>
      </ul>
    </HeaderStyled>
  )
}

export { Header }
