import styled from "styled-components";

const Card = styled.div`
border-radius: 10px;
overflow: hidden;
color: #f3f3f3; 
position: relative;
width: 300px;
height: 300px;
cursor: pointer;
  h4 {
    font-size: 16px;
    font-family: var(--family-two);
font-style: normal;
font-weight: 900;
font-size: 20px;
line-height: 24px;
}
`;

const FavoriteIcon = styled.div`
  z-index: 10;
  position: absolute;
  width: 24px;
  height: 24px;
  top: 16px;
  right: 16px;
  background-color: #f3f3f3;
  transition: border-radius 1s ease;
  &:hover {
    border-radius: 50px;
  }
`
const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #374444;
  opacity: 0.5;
  transition: opacity 0.3s ease-in-out;
  &:hover {
    opacity: 0;
  }
`;

const CardText = styled.div`
position: absolute;
left: 0;
bottom: 0;
width: 100%;
height: 40%;
`

function CardCatalog() {
  return (
    <>
      <Card>
        <FavoriteIcon />
        <Overlay />
        <img src="https://placekitten.com/300/300" alt="materiales" />
        <CardText>
          <h4>Botellas</h4>
          <h5>Disponible: 14 kilos <br /> Material: PET</h5>
        </CardText>
      </Card>
    </>
  );
}

export default CardCatalog;
