import Boton from '../Boton'
import { Input } from '../Input'
import { BotonGoogle } from '../BotonGoogle'
import { useAuth } from '../../hooks/auth/useAuth'
import styled from 'styled-components'

const FormTitle = styled.h5`
  width: 16.5rem;
  text-align: center;
  color: var(--gray-3);
  font: var(--heading-small);
  padding-bottom: 8px;
  @media screen and (min-width: 48.0625rem) {
    width: 442px;
  }
`

const Registered = styled.p`
margin-top: 0.3125rem;
text-align: center;
color: var(--gray-4);
  & a {
    color: var(--orange-2);
    text-decoration: underline;
  }
`

const GlobalRegisterForm = ({ form, handleOnChange, handleSubmit }) => {
  const { signUp, signInWithGoogle } = useAuth()

  const handleSignInWithGoogle = async (e) => {
    e.preventDefault()
    try {
      const { user } = await signInWithGoogle()
      console.log(user)
    } catch (error) {
      console.log(error)
    }
  }

  const handleRegister = async (e) => {
    e.preventDefault()
    try {
      const { user } = await signUp(form.email, form.password)
      console.log(user)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <FormTitle>Ingresa a Upcircle y sé parte del cambio</FormTitle>
      <BotonGoogle onClick={handleSignInWithGoogle}>Ingresa con Google</BotonGoogle>
      <Input label='Email' name='email' type='email' value={form.email} onChange={handleOnChange} placeHolder='tucorreo@ejemplo.com' />
      <Input label='Contraseña' name='password' type='password' value={form.password} onChange={handleOnChange} placeHolder='**********' />
      <Input label='Confirma tu contraseña' name='confirmPassword' type='password' value={form.confirmPassword} onChange={handleOnChange} placeHolder='**********' />

      <Boton disabled={!form.email || !form.password || !form.confirmPassword} onClick={handleRegister}>
        Registrarse
      </Boton>
      <Registered>¿Ya estás registradx? <a href='#login'>Click acá</a></Registered>
    </>
  )
}

export { GlobalRegisterForm }
