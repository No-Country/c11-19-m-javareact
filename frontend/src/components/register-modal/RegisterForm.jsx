import { useState } from 'react'
import styled from 'styled-components'
import { UserRolSelector } from './UserRolSelector'
import { GlobalRegisterForm } from './GlobalRegisterForm'
import { EcoCreatorForm } from './EcoCreatorForm'
import hexagonMobileBg from '../../assets/img/hexagon-mobile-bg.svg'
import hexagonBg from '../../assets/img/hexagon-desktop-bg.svg'
// import Boton from './Boton'

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
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
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
    <BgForm>
      <FormContainer>
        {form.step === 1 && <UserRolSelector handleOnChange={handleOnChange} form={form} handleSubmit={handleSubmit} />}
        {form.step === 2 && <GlobalRegisterForm handleOnChange={handleOnChange} form={form} handleSubmit={handleSubmit} />}
        {form.step === 3 && <>{form.userType === 'ecocreador' && <EcoCreatorForm handleOnChange={handleOnChange} form={form} />}</>}
      </FormContainer>
    </BgForm>
  )
}

export { RegisterForm }
