const verifyInput = (type, value) => {
  /* @param type — type of input to be verify */
  /* @param value — Input value to be verified */

  if (type === 'email') {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const isEmpty = value.trim() === ''
    const isValidate = regex.test(value)

    if (isEmpty) {
      return 'Por favor, ingresa un correo electrónico'
    }
    if (!isValidate) {
      return 'Por favor, ingresa un correo electrónico válido'
    } else {
      return ''
    }
  }

  if (type === 'number') {
    const regex = /^\d*$/
    const isEmpty = value.trim() === ''
    const isValidate = regex.test(value)

    if (isEmpty) {
      return 'Por favor, ingresa tu CUIT'
    }
    if (!isValidate) {
      return 'Por favor, ingresa un CUIT válido'
    } else {
      return ''
    }
  }
  if (type === 'password') {
    const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[-+_!@#$%^&*.,?]).{8,}$/
    const isEmpty = value.trim() === ''
    const isValidate = regex.test(value)

    if (isEmpty) {
      return 'Debes ingresar una contraseña'
    }
    if (!isValidate) {
      return 'La contraseña debe tener al menos una letra minúscula, un número, un carácter especial y al menos 8 caracteres.'
    } else {
      return ''
    }
  }
}

export { verifyInput }
