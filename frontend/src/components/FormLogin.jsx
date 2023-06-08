import styled from 'styled-components'
import { useState } from 'react'
import { Input } from '../components/Input'
import { BotonGoogle } from '../components/BotonGoogle'
import { useAuth } from '../hooks/auth/useAuth'
import hexagonMobileBg from '../assets/img/hexagon-mobile-bg.svg'
import hexagonBg from '../assets/img/hexagon-desktop-bg.svg'
import Boton from './Boton'

const BgForm = styled.div`
  background-image: url(${hexagonMobileBg});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  width: 100%;
  height: 500px;
  @media screen and (min-width: 48.0625rem) {
    background-image: url(${hexagonBg});
    background-size: cover;
    background-position: center top;
    height: 100%;
  }
`

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  text-align: center;
  margin: 0 auto;
  font-weight: 800;
  margin-top: 3.125rem;
  padding-top: 3.125rem;
  padding: 3rem 1.5rem 2rem 1.5rem;
  width: 19.5rem;
  border-radius: 0.5rem;
  box-shadow: 0rem 0.25rem 1rem rgba(0, 0, 0, 0.16);
  background-color: var(--white);
  @media screen and (min-width: 48.0625rem) {
    padding: 3.125rem 7.1875rem 3.125rem 7.1875rem;
    width: 42rem;
  }
`
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
    <BgForm>
      <FormContainer onSubmit={handleSubmit}>
        <FormTitle>Ingresa a Upcircle</FormTitle>
        <BotonGoogle>Ingresa con Google</BotonGoogle>
        <Input label='Email' name='email' type='email' value={form.email} onChange={handleOnChange} placeHolder='XXXXXXXXXXXXXXXXXXXX' />
        <Input label='Contraseña' name='password' type='password' value={form.password} onChange={handleOnChange} placeHolder='**********' />
        <Boton>Ingresar</Boton>
      </FormContainer>
    </BgForm>
  )
}

export { FormLogin }
