function Register() {
  // Cambiar los estilos porque con el color de fondo no se distingue nada

  function submitHandler(e) {
    e.preventDefault();
    console.log("boton de registro");
  }

  return (
    <>
      <form>
        <label>
          Correo electrónico
          <input type="email" id="email" placeholder="example@gmail.com" />
        </label>

        <label>
          Nombre de usuario
          <input type="text" id="username" placeholder="username" />
        </label>

        <label>
          Contraseña
          <input type="password" id="password" placeholder="password" />
        </label>

        <label>
          Confirmar contraseña
          <input
            type="password"
            id="passwordRepeat"
            placeholder="confirm password"
          />
        </label>

        <button type="submit" onClick={submitHandler}>
          Registrarse
        </button>

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
    </>
  );
}

export default Register;
