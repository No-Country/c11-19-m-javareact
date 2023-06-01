import { useEffect, useState } from "react";
import styled, { css } from "styled-components";

const ContenedorTitleSelect = styled.div`
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: column;
  height: 82px;
  // align-items: left;
  // padding: 8px 16px;
  // gap: 8px;
  order: ${({ orden }) => orden};
  z-index: 20;
`;

const TituloG = styled.p`
  height: 24px;
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

const ContenedorSelector = styled.div`
  box-sizing: border-box;

  /* Auto layout */
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 8px 16px;
  gap: 8px;

  width: 264px;
  background-color: #f3f3f3;

  /* Gray 2 */

  border: 0.5px solid #8ea4a4;
  border-radius: 30px;

  /* Inside auto layout */

  flex: none;
  order: 4;
  align-self: stretch;
  flex-grow: 0;

  max-height: 44px;
  transition: max-height 0.4s ease-in-out;

  ${({ estaDesplegada }) =>
    estaDesplegada &&
    css`
      max-height: 224px;
    `}
`;

const ContenedorPlaceholder = styled.div`
  position: relative;
  // width: 243px;
  border-bottom: 0px solid #8ea4a4;
  transition: border-bottom 0.3s ease;
  ${({ estaDesplegada }) =>
    estaDesplegada &&
    css`
      border-bottom: 0.3px solid #8ea4a4;
    `};
`;

const Label = styled.label`
  position: absolute;
  top: 6px;
  right: 0px;
`;

const Titulo = styled.p`
  // bottom-border: 0.01px solid black;
  height: 32px;
  font-family: "Mukta";
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  color: #374444
  /* identical to box height, or 150% */

  letter-spacing: 0.38px;

  /* Gray 4 */
`;

const ContenedorOpciones = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 6.5px;
  align-items: center;
  max-height: 0;
  overflow-y: scroll;
  transition: max-height 0.4s ease-in-out;
  &::-webkit-scrollbar-thumb {
    background-color: #8ea4a4;
    invert: none;
    // display: none;
  }

  ${({ estaDesplegada }) =>
    estaDesplegada &&
    css`
      max-height: 224px;
    `}
`;
const Item = styled.li`
  font-family: "Mukta";
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
`;

function Selector({ placeholder, titulo, opciones, orden, seleccionado }) {
  /*  Para utilizar correctamente este selector, primero definir en el componente padre la propiedad seleccionado e igualarlo a una funcion que establezca una propiedad.
    Por ejemplo: seleccionado={ObtenerUbicacion}
    Un ejemplo de la funcion en el componente padre:
     const ObtenerUbicacion = (ubicacion) => {setUbicacion(ubicacion);
  }; */

  const [valorSeleccionado, setValorSeleccionado] = useState(placeholder);
  const [estaDesplegada, setEstaDesplegada] = useState(false);

  function handleItemClick(opcion) {
    setValorSeleccionado(opcion);
    setEstaDesplegada(false);
  }

  useEffect(() => {
    seleccionado(valorSeleccionado);
  }, [valorSeleccionado]);

  function desplegarLista() {
    setEstaDesplegada(true);
    if (estaDesplegada === true) {
      setEstaDesplegada(false);
    }
  }

  return (
    <>
      <ContenedorTitleSelect orden={orden}>
        <TituloG>{titulo}</TituloG>
        <ContenedorSelector estaDesplegada={estaDesplegada} id="selector">
          {/* <TituloG></TituloG> */}
          <ContenedorPlaceholder
            onClick={desplegarLista}
            estaDesplegada={estaDesplegada}
          >
            <Titulo>{valorSeleccionado}</Titulo>
            <Label htmlFor="selector">
              {!estaDesplegada && (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_677_37277)">
                    <rect
                      x="0.375"
                      y="0.375"
                      width="15.25"
                      height="15.25"
                      rx="7.625"
                      stroke="#8EA4A4"
                      strokeWidth="0.75"
                    />
                    <path
                      d="M11 6.99805L8 9.99805"
                      stroke="#8EA4A4"
                      strokeWidth="0.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.94586 9.99982L5 7.05396"
                      stroke="#8EA4A4"
                      strokeWidth="0.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_677_37277">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              )}
              {estaDesplegada && (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_677_37275)">
                    <rect
                      x="0.375"
                      y="0.375"
                      width="15.25"
                      height="15.25"
                      rx="7.625"
                      stroke="#8EA4A4"
                      strokeWidth="0.75"
                    />
                    <path
                      d="M5 9L8 6"
                      stroke="#8EA4A4"
                      strokeWidth="0.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.05414 5.99823L11 8.94409"
                      stroke="#8EA4A4"
                      strokeWidth="0.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_677_37275">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              )}
            </Label>
          </ContenedorPlaceholder>

          <ContenedorOpciones estaDesplegada={estaDesplegada}>
            {opciones.map((opcion, i) => (
              <Item
                key={i}
                value={opcion}
                onClick={() => handleItemClick(opcion)}
              >
                {opcion}
              </Item>
            ))}
          </ContenedorOpciones>
        </ContenedorSelector>
      </ContenedorTitleSelect>
    </>
  );
}

export default Selector;
