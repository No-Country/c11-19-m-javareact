import styled from "styled-components";
import IconAnimation from "./IconAnimation";

const Card = styled.div`
border-radius: 10px;
overflow: hidden;
color: #f3f3f3; 
position: relative;
width: 180px;
height: 190px;
cursor: pointer;
transition: width 0.3s ease, height 0.3s ease;
  h4 {
    margin-left: 16px;
    font-family: var(--family-two);
font-style: normal;
font-weight: 900;
font-size: 20px;
line-height: 24px;
}
  h5 {
    font-size: 12px;
    margin-left: 16px;
    line-height: 15px;
  }
  &:hover {
    width: 190px;
    height: 200px;
  }
`;

const FavoriteIcon = styled.div`
  z-index: 10;
  position: absolute;
  top: 16px;
  right: 16px;
  
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
height: 36%;
overflow: hidden;
`

function CardCatalog() {
  return (
    <>
      <Card>

        <FavoriteIcon>
          <IconAnimation />
        </FavoriteIcon>
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
