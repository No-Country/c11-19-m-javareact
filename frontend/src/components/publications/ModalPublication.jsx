import styled from "styled-components";
import PostButton from "./PostButton";
import Selector from "./Selector";
import { useState } from "react";
import StyledInput from "./StyledInput";
import ImgSelector from "./ImgSelector";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 40px 24px 14px;
  gap: 8px;

  position: absolute;
  width: 312px;
  // height: 640px;
  // overflow: auto;
  left: calc(50% - 312px / 2);
  top: calc(50% - 696px / 2);

  /* White */

  background: #f3f3f3;
  box-shadow: 4px 4px 30px rgba(84, 84, 84, 0.1);
  border-radius: 8px;
`;

const Cerrar = styled.svg`
  width: 10px;
  height: 10px;
  position: absolute;
  top: 22px;
  right: 24px;
  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const StyledH2 = styled.h2`
  width: 264px;
  height: 30px;

  /* Headline m */

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 900;
  font-size: 25px;
  line-height: 30px;
  /* identical to box height, or 120% */

  text-align: center;
  letter-spacing: 0.38px;

  /* Green 3 */

  color: #99c2a2;

  /* Inside auto layout */

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`;

const StyledSubTitleP = styled.p`
  width: 264px;
  height: 16px;

  /* Pragraph s */

  font-family: "Mukta";
  font-style: normal;
  font-weight: 300;
  font-size: 10px;
  line-height: 16px;
  /* identical to box height, or 160% */

  text-align: center;
  letter-spacing: 0.38px;

  /* Gray 3 */

  color: #5b7171;

  /* Inside auto layout */

  flex: none;
  order: 2;
  align-self: stretch;
  flex-grow: 0;
`;

function Publication() {
  const [ImgURL, setImgURL] = useState("");
  const [ubicacion, setUbicacion] = useState("");
  const [material, setMaterial] = useState("");

  const opcionesUbicacion = [
    "Almirante Brown",
    "Avellaneda",
    "Berazategui",
    "Berisso",
    "Brandsen",
    "Campana",
    "Cañuelas",
    "Ensenada",
    "Escobar",
    "Esteban Echeverría",
    "Exaltación de la Cruz",
    "Ezeiza",
    "Florencio Varela",
    "General Las Heras",
    "General Rodriguez",
    "General San Martin",
    "Hurlingham",
    "Ituzaingó",
    "José C. Paz",
    "La Matanza",
    "Lanús",
    "La Plata",
    "Lomas de Zamora",
    "Luján",
    "Marcos Paz",
    "Malvinas Argentinas",
    "Moreno",
    "Merlo",
    "Morón",
    "Pilar",
    "Presidente Perón",
    "Quilmes",
    "San Fernando",
    "San Isidro",
    "San Miguel",
    "San Vicente",
    "Tigre",
    "Tres de Febrero",
    "Vicente López",
    "Zárate",
  ];
  const opcionesMaterial = ["Telas", "Metales", "Plásticos", "Cartón", "Otros"];

  // Funciones para obtener valor de componente Imagen e "Input selector" (El input selector no es una etiqueta form, sino una lista UL con funciones para obtener los datos seleccionados.)

  const obtenerImg = (imgURL) => {
    setImgURL(imgURL[0]);
  };
  const obtenerUbicacion = (ubicacion) => {
    setUbicacion(ubicacion);
  };
  const obtenerMaterial = (material) => {
    setMaterial(material);
  };

  // Funcion para boton cerrar
  function cerrarVentana() {
    // Redireccionar
    console.log("Agregar redireccion a la funcion de cerrarVentana");
  }

  // Funcion para el submit

  function submitHandler(event) {
    event.preventDefault();
    const regex = /^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ \-(),":.]+$/;

    const data = Object.fromEntries(new FormData(event.target));
    data.image = ImgURL;
    data.location = ubicacion;
    data.material = material;
    JSON.stringify(data);
    console.log(data);

    if (
      data.description !== "" &&
      data.description.length < 50 &&
      regex.test(data.description) &&
      data.kilograms !== "" &&
      !isNaN(data.kilograms) &&
      data.image !== undefined &&
      data.location !== "Ubicación del material" &&
      data.material !== "Tipo de meterial"
    ) {
      console.log(
        "Si ves esto es porque se cargaron todos los datos con éxito"
      );
      console.log("Insertar EndPoint POST en esta Funcion");
      console.log(
        "Despues de confirmar el envio correcto del POST, Informar publicacion correcta y agregar redirección"
      );
    }
  }

  return (
    <>
      <StyledForm onSubmit={submitHandler}>
        <Cerrar
          onClick={cerrarVentana}
          width={14}
          height={14}
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 1L1 13"
            stroke="#5B7171"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13 13L1 1"
            stroke="#5B7171"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Cerrar>

        <StyledH2> Nueva Donación </StyledH2>
        <StyledSubTitleP> Un pequeño gesto. Un gran impacto. </StyledSubTitleP>
        <Selector
          titulo="Material"
          placeholder="Tipo de material"
          opciones={opcionesMaterial}
          seleccionado={obtenerMaterial}
          orden="2"
        />
        <StyledInput
          name="description"
          type="text"
          titulo="Descripción"
          orden="3"
          placeholder="Ej: Algodon"
        />
        <StyledInput
          name="kilograms"
          type="text"
          titulo="Cantidad"
          orden="4"
          placeholder="Cantidad en kilogramo"
        />
        <Selector
          titulo="location"
          placeholder="Ubicación del material"
          opciones={opcionesUbicacion}
          orden="5"
          seleccionado={obtenerUbicacion}
        />
        <ImgSelector imgValor={obtenerImg} orden="6" />
        <PostButton orden="7" />
      </StyledForm>
    </>
  );
}

export default Publication;
