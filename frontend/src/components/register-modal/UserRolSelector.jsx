import styled from 'styled-components'
import Boton from '../Boton'

const FormRoleContainer = styled.div`
  width: 16.3125rem;
  text-align: center;
  font: var(--headline-xxs);
`
const FormRolTitle = styled.h5`
  font-size: 1.25rem;
  text-align: center;
  font: var(--heading-small);
  color: var(--gray-3);
  margin-bottom: 1rem;
`

const RadioButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-bottom: 1.25rem;
`

const RadioButtonLabel = styled.label`
  margin-right: 0.625rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font: var(--paragraph-l-bold);
  color: var(--gray-3);
`

const ErrorMessage = styled.p`
  color: red;
  margin: 0.3125rem 0;
`
const EcoProviderText = styled.p`
  color: var(--orange-1);
  text-align: left;
`
const EcoCreatorText = styled.p`
  color: var(--green-2);
  text-align: left;
`
const UserRolSelector = ({ form, handleOnChange, handleSubmit }) => {
  return (
    <>
      <FormRoleContainer>
        <FormRolTitle className='form-titulo'>¿Cuál es tu rol?</FormRolTitle>
        <RadioButtonContainer>
          <EcoProviderText>Los ecoproveedores son empresas comprometidas con el cuidado del medioambiente, que publican sus materiales de desecho industrial, para que sean reutilizados por diseñadores, artistas y pequeños emprendedores con el fin de fomentar la economía circular.</EcoProviderText>
          <RadioButtonLabel>
            <input type='radio' name='userType' value='ecocreador' checked={form.userType === 'ecocreador'} onChange={handleOnChange} />
            Soy EcoCreador
          </RadioButtonLabel>
          <EcoCreatorText>Los ecocreadores les dan una segunda oportunidad a objetos que otros consideran basura. Son verdaderos artistas, que utilizan su creatividad para convertir materiales de desecho en algo hermoso y útil.</EcoCreatorText>
          <RadioButtonLabel>
            <input type='radio' name='userType' value='ecoproveedor' checked={form.userType === 'ecoproveedor'} onChange={handleOnChange} />
            Soy EcoProveedor
          </RadioButtonLabel>
        </RadioButtonContainer>
        {form.error && <ErrorMessage>{form.error}</ErrorMessage>}
        <Boton disabled={!form.tipoUsuario} onClick={handleSubmit}>
          Continuar
        </Boton>
      </FormRoleContainer>
    </>
  )
}

export { UserRolSelector }
