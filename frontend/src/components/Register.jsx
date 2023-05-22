import { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useAuth } from '../hooks/auth/useAuth'

function Register() {
  const [formData, setformData] = useState({
    username: '',
    email: '',
    password: ''
  })

  const { signUp } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { user } = await signUp(formData)
      console.log(user)
    } catch (error) {
      console.log(error)
    }
  }

  const handleInputChange = (e) => {
    setformData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label>
          Correo electrónico
          <input onChange={handleInputChange} type='email' name='email' value={formData.email} id='email' placeholder='example@gmail.com' />
        </label>

        <label>
          Nombre de usuario
          <input onChange={handleInputChange} name='username' value={formData.username} type='text' id='username' placeholder='username' />
        </label>

        <label>
          Contraseña
          <input onChange={handleInputChange} name='password' value={formData.password} type='password' id='password' placeholder='password' />
        </label>

        <button type='submit'>Registrarse</button>

        <div>
          Registrarse con:
          <label>
            {/* svg o img de pagina */}
            <button>Google</button>
          </label>
          <label>
            {/* svg o img de pagina */}
            <button>Facebook</button>
          </label>
        </div>
      </form>
    </section>
  )
}

export default Register
