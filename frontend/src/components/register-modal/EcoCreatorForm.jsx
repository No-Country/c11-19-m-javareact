import { Input } from '../Input'
import { UploadProfileImage } from './UploadProfileImage'
import { useState } from 'react'
import Boton from '../Boton'
import styled from 'styled-components'

const FormTitulo = styled.h6`
  text-align: center;
  color: var(--gray-3);
  font: var(--heading-small);
`

const FormTituloVerde = styled.h4`
  text-align: center;
  color: var(--green-3);
  font: var(--headline-large);
`

const EcoCreatorForm = ({ form, handleOnChange }) => {
  const [imgUrl, setImgUrl] = useState('')

  const handleChangeImage = (imgURL) => {
    setImgUrl(imgURL[0])
  }

  const handleSubmit = () => {
    handleOnChange('', imgUrl)
    console.log(form)
  }

  return (
    <div>
      <FormTitulo>Completá tus datos para empezar a transformar el mundo como</FormTitulo>
      <FormTituloVerde>EcoCreador</FormTituloVerde>
      <Input label='Nombres' type='text' name='name' value={form.name} onChange={handleOnChange} placeHolder='Tu nombre completo ' />
      <Input label='Apellidos' type='text' name='lastName' value={form.lastName} onChange={handleOnChange} placeHolder='Tu apellido' />
      <Input label='Ocupación' type='text' name='occupation' value={form.occupation} onChange={handleOnChange} placeHolder='Tu ocupación' />
      <UploadProfileImage imgValor={handleChangeImage} />
      <Boton onClick={handleSubmit}>Guardar</Boton>
    </div>
  )
}

export { EcoCreatorForm }
