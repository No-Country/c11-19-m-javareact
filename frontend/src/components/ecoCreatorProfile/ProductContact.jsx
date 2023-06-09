import styled from "styled-components";

const Container = styled.div`
  margin: 0.625rem;
  height: 16.0625rem;
  width: 9.5rem;
  display: flex;
  flex-direction: column;
  /* align-items: flex-start; */
  padding: 0rem;
  gap: 1rem;
  transition: all 0.2s ease-in-out;

  :hover {
    scale: 1.02;
  }
`;
const ImgContainer = styled.div`
  position: relative;
  width: 9.5rem;
  height: 9.5rem;
  background-color: #4c8eb2;

  box-shadow: 0rem 0.25rem 1rem rgba(0, 0, 0, 0.16);
  border-radius: 0.625rem;
  & img {
    aspect-ratio: 1/1;
    border-radius: 0.625rem;
  }
`;
const Titulo = styled.div`
  position: absolute;
  left: 9.87%;
  right: 59.21%;
  top: 78.29%;
  bottom: 8.55%;

  /* Headline xs */

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height, or 120% */

  display: flex;
  align-items: center;
  letter-spacing: 0.38px;

  /* White */

  color: #f3f3f3;

  /* Drop Shadow 16 */

  text-shadow: 0px 4px 16px rgba(0, 0, 0, 0.16);
`;
const TextContainer = styled.div`
  width: 9.0625rem;
  height: 3rem;

  /* Paragraph m */

  font-family: "Mukta";
  font-style: normal;
  font-weight: 300;
  font-size: 0.75rem;
  line-height: 1rem;
  /* or 133% */

  display: flex;
  flex-direction: column;
  /* align-items: center; */
  letter-spacing: 0.0238rem;

  /* Gray 3 */

  color: #5b7171;
`;
const ContactContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.625rem;
  gap: 0.625rem;

  width: 9.5rem;
  height: 1.5625rem;

  /* Orange 1 */

  background: #f8a53a;
  cursor: pointer;
  /* Drop Shadow 16 */

  box-shadow: 0rem 0.25rem 1rem rgba(0, 0, 0, 0.16);
  border-radius: 1.875rem;
  transition: all 0.2s ease-in-out;

  & p {
    width: 2.9375rem;
    height: 1rem;

    /* Paragraph s bold */

    font-family: "Mukta";
    font-style: normal;
    font-weight: 700;
    font-size: 0.625rem;
    line-height: 1rem;
    /* identical to box height, or 160% */

    display: flex;
    align-items: center;
    letter-spacing: 0.0238rem;

    /* White */

    color: #f3f3f3;
  }

  :hover {
    scale: 1.05;
  }
`;

function ProductContact({ datos, onOpen, id, onClicks }) {
  const handleClick = () => {
    onClicks(id);
  };

  return (
    <>
      {datos !== "" && (
        <Container>
          <ImgContainer>
            <img src={datos.image} />
            <Titulo>
              {datos.material === "Plasticos" && <p>Plásticos</p>}
              {datos.material === "Carton" && <p>Cartón</p>}
              {datos.material !== "Plasticos" &&
                datos.material !== "Carton" && <p>{datos.material}</p>}
            </Titulo>
          </ImgContainer>
          <TextContainer>
            <p>Disponible: {datos.kilograms} kilos</p>
            <p>Material: {datos.description.substring(0, 15)}... </p>
            <p>Ubicación: {datos.location} </p>
          </TextContainer>
          <ContactContainer onClick={handleClick}>
            <p>Contacto</p>
          </ContactContainer>
        </Container>
      )}
    </>
  );
}

export default ProductContact;
