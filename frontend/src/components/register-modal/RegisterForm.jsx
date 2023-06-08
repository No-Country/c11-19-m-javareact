import { useState } from 'react'
import styled from 'styled-components'
import { UserRolSelector } from './UserRolSelector'
import { GlobalRegisterForm } from './GlobalRegisterForm'
import { EcoCreatorForm } from './EcoCreatorForm'
// import Boton from './Boton'

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  font-weight: 800;
  padding-top: 50px;
  width: 18.5rem;
  @media screen and (min-width: 48.0625rem) {
    width: 29.375rem;
  }
`

const RegisterForm = () => {
  const [form, setForm] = useState({
    // Step 1
    userType: '',
    // Step 2
    email: '',
    password: '',
    confirmPassword: '',
    // step 3 for eco creator  and eco supplier
    name: '',
    lastName: '',
    // step 3 for eco creator only
    occupation: '',
    // step 3 for eco supplier only
    cuitNumber: '',
    rememberMe: false,
    cuit: 0,
    step: 1
  })

  const handleSubmit = (e) => {
    if (form.step === 1) {
      setForm((prevForm) => ({ ...prevForm, step: 2 }))
    } else if (form.step === 2) {
      setForm((prevForm) => ({ ...prevForm, step: 3 }))
    } else if (form.step === 3) {
      setForm((prevForm) => ({ ...prevForm, step: 4 }))
    } else if (form.step === 4) {
      setForm((prevForm) => ({ ...prevForm, step: 5 }))
    }
  }

  const handleRememberMeChange = (e) => {
    const checked = e.target.checked
    setForm((prevForm) => ({
      ...prevForm,
      rememberMe: checked
    }))
  }

  const handleOnChange = (ev) => {
    // const { name, value, type, checked } = ev.target
    setForm((prevForm) => {
      return {
        ...prevForm,
        [ev.target.name]: ev.target.value
      }
    })
  }

  console.log(form)

  return (
    <FormContainer>
      {form.step === 1 && <UserRolSelector handleOnChange={handleOnChange} form={form} handleSubmit={handleSubmit} />}
      {form.step === 2 && <GlobalRegisterForm handleOnChange={handleOnChange} form={form} handleSubmit={handleSubmit} />}
      {form.step === 3 && <>{form.userType === 'ecocreador' && <EcoCreatorForm handleOnChange={handleOnChange} form={form} />}</>}
    </FormContainer>
  )
}

export { RegisterForm }
