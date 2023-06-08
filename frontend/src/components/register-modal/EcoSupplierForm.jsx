import { Input } from '../Input'
import Boton from '../Boton'

const EcoSupplierForm = ({ form, handleOnChange }) => {
  const handleSubmit = () => {
    console.log(form)
  }

  return (
    <div>
      <h6 className='form-titulo'>Completá tus datos para empezar a transformar el mundo como</h6>
      <h4 className='form-titulo-verde'>Ecoproveedor</h4>
      <Input label='Nombres' type='text' name='name' value={form.name} onChange={handleOnChange} placeHolder='Tu nombre completo ' />
      <Input label='Apellidos' type='text' name='lastName' value={form.lastName} onChange={handleOnChange} placeHolder='Tu apellido' />
      <Input label='Razón social' type='text' name='legalName' value={form.legalName} onChange={handleOnChange} placeHolder='Razón social' />
      <Input label='CUIT' type='number' name='cuit' value={form.cuit} onChange={handleOnChange} placeHolder='Tu CUIT' />
      <Boton onClick={handleSubmit}>Guardar</Boton>
    </div>
  )
}

export { EcoSupplierForm }
