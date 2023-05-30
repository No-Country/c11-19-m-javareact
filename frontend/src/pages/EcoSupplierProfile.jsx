import styled from 'styled-components'

const MainStyled = styled.main`
  display: grid;
  justify-content: center;
  row-gap: 2rem;
`

const EcoSupplierProfile = () => {
  return (
    <MainStyled>
      <div>icon goes here</div>
      <article>
        <h2>¡Hola, la costeleria!</h2>
        <h3>¿Que materiales quieres compartir hoy?</h3>
        <button>nuevo material</button>
      </article>
      <section>
        <h3>card aqui</h3>
      </section>
    </MainStyled>
  )
}

export { EcoSupplierProfile }
