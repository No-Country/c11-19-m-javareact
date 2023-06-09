import { useState } from 'react'
import { Input } from '../Input'
import { UploadProfileImage } from './UploadProfileImage'
import Boton from '../Boton'
import styled from 'styled-components'
import { registerEcosupplier } from '../../services/api/user/instances'
import { useAuth } from '../../hooks/auth/useAuth'

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

const EcoSupplierForm = ({ form, handleOnChange }) => {
  const [imgUrl, setImgUrl] = useState('')
  const { userInfo, updateUserInfo } = useAuth()

  const handleChangeImage = (imgURL) => {
    setImgUrl(imgURL[0])
  }

  const ecoSupplierModel = {
    firstName: form.name,
    lastName: form.lastName,
    companyName: form.legalName,
    cuit: form.cuit,
    email: form.email,
    logoImage: imgUrl
  }

  const handleSubmit = () => {
    // handleOnChange('', img)

    registerEcosupplier
      .post('', ecoSupplierModel)
      .then((response) => updateUserInfo(response.data))
      .catch((error) => console.log(error))
  }

  return (
    <div>
      <FormTitulo>Completá tus datos para empezar a transformar el mundo como</FormTitulo>
      <FormTituloVerde>Ecoproveedor</FormTituloVerde>
      <Input label='Nombres' type='text' name='name' value={form.name} onChange={handleOnChange} placeHolder='Tu nombre completo ' />
      <Input label='Apellidos' type='text' name='lastName' value={form.lastName} onChange={handleOnChange} placeHolder='Tu apellido' />
      <Input label='Razón social' type='text' name='legalName' value={form.legalName} onChange={handleOnChange} placeHolder='Razón social' />
      <Input label='CUIT' type='number' name='cuit' value={form.cuit} onChange={handleOnChange} placeHolder='Tu CUIT' />
      <UploadProfileImage imgValor={handleChangeImage} />
      <Boton onClick={handleSubmit}>Guardar</Boton>
    </div>
  )
}

export { EcoSupplierForm }
