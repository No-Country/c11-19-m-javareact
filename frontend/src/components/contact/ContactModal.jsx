import styled from "styled-components";
import SvgPerfilImagen from "./SvgPerfilImagen";
import Elipse from "./Elipse";
import CloseButton from "./CloseButton";
import Background from "./BackgroundSvg";

const ContenedorContact = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 569px;
  min-width: 312px;
  max-width: 460px;

  background: #f3f3f3;
`;

const BotonCerrarContenedor = styled.div`
  position: absolute;
  width: 16px;
  height: 16px;
  left: 280px;
  top: 16px;
`;

const ContenedorBackgroundImagen = styled.div`
  //   display: flex;
  //   height: 30%;
  //   width: 100%;
  //   background-size: 100%;
  //   background-repeat: no-repeat;
  //   background-color: gray;
`;
const BackgroundImagen = styled(Background)``;

const ContenedorPerfilLogoYPuntos = styled.div`
  position: absolute;
  left: 78px;
  top: 59px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const PerfilLogo = styled(SvgPerfilImagen)``;

const ContenedorElipseYPuntos = styled.div`
  position: absolute;
  top: 125px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  width: 80px;
  gap: 5px;
`;
const NumeroPuntos = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.38px;

  /* Orange 1 */

  color: #f8a53a;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.38px;

  /* Orange 1 */

  color: #f8a53a;
`;
const EcoPuntos = styled.p`
  font-family: "Mukta";
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 16px;
  /* identical to box height, or 133% */

  letter-spacing: 0.38px;

  /* Orange 2 */

  color: #f69110;
`;
const DatosContenedor = styled.div`
  position: absolute;
  bottom: 103px;
  display: flex;
  flex-direction: column;
  margin-left: 24px;
  gap: 15px;
`;
const TituloDatos = styled.p`
  font-family: "Mukta";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  letter-spacing: 0.38px;

  color: #5b7171;
`;
const DescripcionDatos = styled.ul`
  font-family: "Mukta";
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  /* or 150% */

  display: flex;
  flex-direction: column;
  letter-spacing: 0.38px;

  /* Gray 4 */

  color: #374444;
`;
const UltimoTexto = styled.p`
  position: absolute;
  display: flex;
  align-items: center;
  juustify-content: center;
  width: 264px;
  height: 16px;
  left: 24px;
  top: 494px;

  /* Paragraph m */

  font-family: "Mukta";
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 16px;

  letter-spacing: 0.38px;

  color: #5b7171;
`;

function ContactModal({ datos }) {
  const datosHardcodeados = {
    logoImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRGBbYnG3Zy66buhHfsQrltCXju7m0Hj5JMaFS-bt9tG5fDtyUSqzQruB5WJC9uLG6EgM&usqp=CAU"
  };
  return (
    <>
      <ContenedorContact>
        <BotonCerrarContenedor>
          <CloseButton />
        </BotonCerrarContenedor>

        <ContenedorBackgroundImagen>
          <BackgroundImagen />
        </ContenedorBackgroundImagen>

        <ContenedorPerfilLogoYPuntos>
          <PerfilLogo img={datosHardcodeados.logoImage} />
          <ContenedorElipseYPuntos>
            <Elipse />
            <NumeroPuntos>10,5mil {datosHardcodeados.points}</NumeroPuntos>
            <EcoPuntos>ecopuntos</EcoPuntos>
          </ContenedorElipseYPuntos>
        </ContenedorPerfilLogoYPuntos>

        <DatosContenedor>
          <TituloDatos>Datos de contacto</TituloDatos>
          <DescripcionDatos>
            <li>
              Razon social: Pampa Leather. {datosHardcodeados.companyName}{" "}
            </li>
            <li>Cuit: 30-50401884-5 {datosHardcodeados.cuit}</li>
            <li>
              Contacto: Mariana Ramirez{datosHardcodeados.firstName}{" "}
              {datosHardcodeados.lastName}
            </li>
            <li>Email: mramirez@pampaleather.com {datosHardcodeados.email} </li>
          </DescripcionDatos>
        </DatosContenedor>

        <UltimoTexto>
          ¡Estas a un paso de reciclar un nuevo material!
        </UltimoTexto>

      </ContenedorContact>
    </>
  );
}

export default ContactModal;
