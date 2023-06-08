import styled from 'styled-components'
import { useState } from 'react'
import { Input } from '../components/Input'
import { BotonGoogle } from '../components/BotonGoogle'
import { useAuth } from '../hooks/auth/useAuth'
import Boton from './Boton'

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  text-align: center;
`
const FormLogin = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const handleOnChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(form)
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <h5 class='form-titulo'>Ingresa a Upcircle</h5>
      <BotonGoogle>Ingresa con Google</BotonGoogle>
      <Input label='Email' name='email' type='email' value={form.email} onChange={handleOnChange} placeHolder='XXXXXXXXXXXXXXXXXXXX' />
      <Input label='Contraseña' name='password' type='password' value={form.password} onChange={handleOnChange} placeHolder='**********' />
      <Boton>Ingresar</Boton>
    </FormContainer>
  )
}

export { FormLogin }
