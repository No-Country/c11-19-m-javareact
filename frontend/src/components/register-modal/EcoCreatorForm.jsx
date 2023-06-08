import { Input } from '../Input'
import { UploadProfileImage } from './UploadProfileImage'
import { useState } from 'react'
import Boton from '../Boton'

const EcoCreatorForm = ({ form, handleOnChange }) => {
  const [imgUrl, setImgUrl] = useState('')

  const handleChangeImage = (imgURL) => {
    setImgUrl(imgURL[0])
    handleOnChange('', imgUrl)
  }

  const handleSubmit = () => {
    console.log(form)
  }

  return (
    <div>
      <h6 className='form-titulo'>Completá tus datos para empezar a transformar el mundo como</h6>
      <h4 className='form-titulo-verde'>EcoCreador</h4>
      <Input label='Nombres' type='text' name='name' value={form.name} onChange={handleOnChange} placeHolder='Tu nombre completo ' />
      <Input label='Apellidos' type='text' name='lastName' value={form.lastName} onChange={handleOnChange} placeHolder='Tu apellido' />
      <Input label='Ocupación' type='text' name='occupation' value={form.occupation} onChange={handleOnChange} placeHolder='Tu ocupación' />
      <UploadProfileImage imgValor={handleChangeImage} />
      <Boton onClick={handleSubmit}>Guardar</Boton>
    </div>
  )
}

export { EcoCreatorForm }
