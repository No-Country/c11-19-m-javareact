import styled from 'styled-components'
import { EcoSupplierCard } from '../components/EcoSupplierCard'
import { SupplierProfilePhoto } from '../components/SupplierProfilePhoto'
import { Layout } from '../routes/Layout'
import { useAuth } from '../hooks/auth/useAuth'
import { useState } from 'react'
import Publication from '../components/publications/ModalPublication'

const PublicationWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`

const MainStyled = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 2rem;
  padding: clamp(1.25rem, 1.5vw, 3rem);
`

const ProfileBannerContainer = styled.div`
  width: 100%;
  background-image: url('./public/img/supplier/supplier-background.svg');
  display: grid;
  place-content: center;
`

const NewMaterialStyled = styled.button`
  background-color: #f8a53a;
  padding: 0.4rem 1rem;
  border-radius: 1rem;

  &:hover {
    cursor: pointer;
  }
`

const MaterialsTitleStyled = styled.h3`
  align-self: flex-start;
`

const MaterialGridSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(6.25rem, 10rem));
  column-gap: 1rem;
  width: 100%;
`

const EcoSupplierProfile = () => {
  const [show, setShow] = useState(false)
  const { userInfo } = useAuth()

  function handleClick() {
    setShow(true)
  }
  return (
    <Layout>
      {userInfo && (
        <MainStyled>
          <ProfileBannerContainer>
            <SupplierProfilePhoto />
          </ProfileBannerContainer>
          <article>
            <h2>¡Hola, {userInfo.firstName}!</h2>
            <h3>¿Que materiales quieres compartir hoy?</h3>
          </article>
          <NewMaterialStyled onClick={handleClick}>nuevo material</NewMaterialStyled>
          <MaterialsTitleStyled>Materiales publicados</MaterialsTitleStyled>
          <MaterialGridSection>
            <EcoSupplierCard imageUrl='https://res.cloudinary.com/drc41imav/image/upload/v1685985954/UpCircle/mtw7ttuojwmwhcy9xsjf.jpg' title='Telas' stock='36 Kilos' material='Algodon' location='Avellaneda' />
            <EcoSupplierCard imageUrl='https://res.cloudinary.com/drc41imav/image/upload/v1685985954/UpCircle/mtw7ttuojwmwhcy9xsjf.jpg' title='Telas' stock='36 Kilos' material='Algodon' location='Avellaneda' />
          </MaterialGridSection>
        </MainStyled>
      )}
      {show && (
        <PublicationWrapper>
          <Publication />
          Publication
        </PublicationWrapper>
      )}
    </Layout>
  )
}

export { EcoSupplierProfile }
