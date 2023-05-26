import Boton from '../Boton'
import { Input } from '../Input'
import { BotonGoogle } from '../BotonGoogle'
import { useAuth } from '../../hooks/auth/useAuth'

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
      <h5 className='form-titulo'>Ingresa a Upcircle y sé parte del cambio</h5>
      <BotonGoogle onClick={handleSignInWithGoogle}>Registro con Google</BotonGoogle>
      <Input label='Emial' name='email' type='email' value={form.email} onChange={handleOnChange} placeHolder='tucorreo@ejemplo.com' />
      <Input label='Contraseña' name='password' type='password' value={form.password} onChange={handleOnChange} placeHolder='**********' />
      <Input label='Confirma tu contraseña' name='confirmPassword' type='password' value={form.confirmPassword} onChange={handleOnChange} placeHolder='**********' />

      <Boton disabled={!form.email || !form.password || !form.confirmPassword} onClick={handleRegister}>
        Registrarse
      </Boton>
      <p className='registered'>
        ¿Ya estás registradx? <a href='#login'>Click acá</a>
      </p>
    </>
  )
}

export { GlobalRegisterForm }
