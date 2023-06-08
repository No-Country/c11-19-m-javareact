import styled from 'styled-components'

const CardContainer = styled.article`
  display: grid;
  gap: 0.8rem;
`

const ImageBackground = styled.picture`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 8rem;
  border-radius: 1rem;
  color: #fff;
`
const DeleteButton = styled.button`
  align-self: flex-end;
  padding: 0.5rem;
  font-size: 1.6rem;
  font-weight: 200;

  &:hover {
    cursor: pointer;
  }
`

const TitleStyled = styled.h3`
  align-self: flex-start;
  padding: 0.4rem;
  font-weight: bold;
`
const CardContent = styled.div`
  font-size: 0.8rem;
`

const EcoSupplierCard = ({ title, imageUrl, stock, material, location }) => {
  return (
    <CardContainer>
      <ImageBackground imageUrl={imageUrl}>
        <DeleteButton>x</DeleteButton>
        <TitleStyled>{title}</TitleStyled>
      </ImageBackground>
      <CardContent>
        <h4>Disponible: {stock}</h4>
        <p>Material: {material}</p>
        <p>Ubucacion: {location}</p>
      </CardContent>
    </CardContainer>
  )
}

export { EcoSupplierCard }
