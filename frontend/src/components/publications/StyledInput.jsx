import { useState } from "react";

import styled from "styled-components";

// Input regular
const Contenedor = styled.div`
  order: ${({ orden }) => orden};
  width: 264px;
  height: 82px;
  position: relative;

  /* Inside auto layout */

  flex: none;
  flex-grow: 0;
`;
const ContenedorInput = styled.div`
  position: relative;
`;
const TituloI = styled.p`
  /* Material */

  width: 58px;
  height: 24px;
  left: 0px;
  top: 0px;

  /* Paragraph l */

  font-family: "Mukta";
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  letter-spacing: 0.38px;

  /* Gray 2 */

  color: #8ea4a4;
`;
const Input = styled.input`
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px;
  gap: 62px;

  width: 264px;
  height: 44px;
  left: 0px;
  top: 36px;

  /* Gray 2 */

  border: 0.5px solid #8ea4a4;
  border-radius: 30px;
`;
const IndicacionContenedor = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  // gap: 4px;

  width: 264px;
  height: 22px;
`;
const Alert = styled.p`
  width: 231px;
  height: 22px;

  /* Paragraph m bold */

  font-family: "Mukta";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 22px;
  /* identical to box height, or 183% */

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.38px;

  /* RedAlert */

  color: #ff453a;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;

  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const Beneficio = styled.p`
  width: 264px;
  height: 22px;

  /* Paragraph m bold */

  font-family: "Mukta";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 22px;
  /* identical to box height, or 183% */

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.38px;

  /* RedAlert */

  color: #30d158;

  /* Inside auto layout */

  // flex: none;
  // order: 0;
  // flex-grow: 0;

  display: flex;
  flex-direction: row;
  justify-content: center;
`;

function StyledInput({ name, type, titulo, placeholder, orden, input }) {
  const [regexOk, setRegexOk] = useState(" ");
  const [valueIn, setValueIn] = useState(" ");
  const [benefcio, setBeneficio] = useState("");
  const [offLimit, setoffLimit] = useState(false);

  let value = "";

  function handleChange(e) {
    value = e.target.value;
    let regex = "";

    if (name === "titulo") {
      regex = /^[a-zA-Z\s]*$/;
    } else if (name === "descripcion") {
      regex = /^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ \-(),":.]+$/;
    } else if (name === "cantidad") {
      regex = /^[0-9.]+$/;
    }

    if (value === "") {
      setValueIn(false);
    } else if (!regex.test(value)) {
      setRegexOk(false);
    } else {
      setRegexOk(true);
      setValueIn(true);
    }

    if (value !== "") {
      setValueIn(true);
    }

    if (value === "") {
      setRegexOk(true);
    }

    if (value.length >= 50) {
      setoffLimit(true);
    }
    if (value.length < 50) {
      setoffLimit(false);
    }

    // Calcular beneficio
    const puntosTotales = value * 10;
    setBeneficio(puntosTotales);
  }

  // function erase(e) {
  //   console.log(e.target.value);
  // }

  return (
    <>
      {(name === "titulo" || name === "descripcion" || name === "cantidad") && (
        <Contenedor orden={orden}>
          <TituloI>{titulo}</TituloI>

          <ContenedorInput>
            <Input
              type={type}
              placeholder={placeholder}
              onChange={handleChange}
              name={name}
              input={(e) => (input = e.target.value)}
            />

            {!regexOk &&
              (name === "titulo" || name === "descripcion") &&
              !offLimit && (
                <IndicacionContenedor>
                  <Alert>No ingresar caracteres especiales</Alert>
                </IndicacionContenedor>
                // eslint-disable-next-line indent
              )}
            {(name === "titulo" || name === "descripcion") &&
              offLimit === true && (
                <IndicacionContenedor>
                  <Alert>Superaste el límite de caracteres</Alert>
                </IndicacionContenedor>
                // eslint-disable-next-line indent
              )}

            {!regexOk && name === "cantidad" && (
              <IndicacionContenedor>
                <Alert>Solo se permiten números</Alert>
              </IndicacionContenedor>
            )}
            {regexOk && name === "cantidad" && valueIn && valueIn !== " " && (
              <IndicacionContenedor>
                <Beneficio>Sumarás {benefcio} puntos</Beneficio>
              </IndicacionContenedor>
            )}
            {name === "cantidad" && valueIn === " " && (
              <IndicacionContenedor>
                <Beneficio>¡Sumarás 10 puntos por cada kg que dones!</Beneficio>
              </IndicacionContenedor>
            )}
            {!valueIn && (
              <IndicacionContenedor>
                <Alert>No debe quedar el campo vacío</Alert>
              </IndicacionContenedor>
            )}
          </ContenedorInput>
        </Contenedor>
      )}
    </>
  );
}
export default StyledInput;
