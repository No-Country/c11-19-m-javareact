import styled from 'styled-components'
import Boton from '../Boton'

const FormRolTitle = styled.h5`
  font-size: 1.25rem;
  text-align: center;
`

const RadioButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-bottom: 20px;
`

const RadioButtonLabel = styled.label`
  margin-right: 10px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

const ErrorMessage = styled.p`
  color: red;
  margin: 5px 0;
`

const UserRolSelector = ({ form, handleOnChange, handleSubmit }) => {
  return (
    <>
      <FormRolTitle className='form-titulo'>¿Cuál es tu rol?</FormRolTitle>
      <RadioButtonContainer>
        <p>Los ecoproveedores son empresas comprometidas con el cuidado del medioambiente, que publican sus materiales de desecho industrial, para que sean reutilizados por diseñadores, artistas y pequeños emprendedores con el fin de fomentar la economía circular.</p>
        <RadioButtonLabel>
          <input type='radio' name='userType' value='ecocreador' checked={form.userType === 'ecocreador'} onChange={handleOnChange} />
          EcoCreador
        </RadioButtonLabel>
        Los ecocreadores les dan una segunda oportunidad a objetos que otros consideran basura. Son verdaderos artistas, que utilizan su creatividad para convertir materiales de desecho en algo hermoso y útil.
        <RadioButtonLabel>
          <input type='radio' name='userType' value='ecoproveedor' checked={form.userType === 'ecoproveedor'} onChange={handleOnChange} />
          EcoProveedor
        </RadioButtonLabel>
      </RadioButtonContainer>
      {form.error && <ErrorMessage>{form.error}</ErrorMessage>}
      <Boton disabled={!form.tipoUsuario} onClick={handleSubmit}>
        Continuar
      </Boton>
    </>
  )
}

export { UserRolSelector }
