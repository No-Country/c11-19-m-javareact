import styled from 'styled-components'
import { EcoSupplierCard } from '../components/EcoSupplierCard'
import { SupplierProfilePhoto } from '../components/SupplierProfilePhoto'
import { Layout } from '../routes/Layout'
import { useAuth } from '../hooks/auth/useAuth'

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

const MateriasGridSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(6.25rem, 10rem));
  column-gap: 1rem;
  width: 100%;
`

const EcoSupplierProfile = () => {
  const { userInfo } = useAuth()

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
          <NewMaterialStyled>nuevo material</NewMaterialStyled>
          <MaterialsTitleStyled>Materiales publicados</MaterialsTitleStyled>
          <MateriasGridSection>
            <EcoSupplierCard imageUrl='https://res.cloudinary.com/drc41imav/image/upload/v1685985954/UpCircle/mtw7ttuojwmwhcy9xsjf.jpg' title='Telas' stock='36 Kilos' material='Algodon' location='Avellaneda' />
            <EcoSupplierCard imageUrl='https://res.cloudinary.com/drc41imav/image/upload/v1685985954/UpCircle/mtw7ttuojwmwhcy9xsjf.jpg' title='Telas' stock='36 Kilos' material='Algodon' location='Avellaneda' />
          </MateriasGridSection>
        </MainStyled>
      )}

      {/*       <MainStyled>
        <ProfileBannerContainer>
          <SupplierProfilePhoto />
        </ProfileBannerContainer>
        <article>
          <h2>¡Hola, la costeleria!</h2>
          <h3>¿Que materiales quieres compartir hoy?</h3>
        </article>
        <NewMaterialStyled>nuevo material</NewMaterialStyled>
        <MaterialsTitleStyled>Materiales publicados</MaterialsTitleStyled>
        <MateriasGridSection>
          <EcoSupplierCard imageUrl='https://res.cloudinary.com/drc41imav/image/upload/v1685985954/UpCircle/mtw7ttuojwmwhcy9xsjf.jpg' title='Telas' stock='36 Kilos' material='Algodon' location='Avellaneda' />
          <EcoSupplierCard imageUrl='https://res.cloudinary.com/drc41imav/image/upload/v1685985954/UpCircle/mtw7ttuojwmwhcy9xsjf.jpg' title='Telas' stock='36 Kilos' material='Algodon' location='Avellaneda' />
        </MateriasGridSection>
      </MainStyled> */}
    </Layout>
  )
}

export { EcoSupplierProfile }
