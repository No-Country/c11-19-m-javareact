import styled from "styled-components";

const CardContainer = styled.div`
  position: relative;
  display: flex;
  min-width: 210px;
  max-width: 400px;
  width: 100%;
  aspect-ratio: 1/1;
  flex-direction: column;
  background-image: url(${({ ImageUrl }) => ImageUrl});
  background-color: #374444;
  background-blend-mode: soft-light;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 15px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
const TextContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 7px;
  bottom: 10%;
  left: 11%;
`;
const Title = styled.p`
  font-family: "Montserrat";
  color: #f3f3f3;
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  align-items: center;
  letter-spacing: 0.38px;
`;

const SubtitleContainer = styled.div`
  font-family: "Montserrat";
  color: #f3f3f3;
  font-style: normal;
  font-weight: 900;
  font-size: 12px;
  line-height: 15px;
  align-items: center;
  letter-spacing: 0.38px;
`;

const Subtitle = styled.p``;

function ProductCard({ ImageUrl }) {
  return (
    <CardContainer ImageUrl={ImageUrl}>
      <TextContainer>
        <Title>Botellas</Title>
        <SubtitleContainer>
          <Subtitle>Disponible: 14 kilos</Subtitle>
          <Subtitle>Material: PET</Subtitle>
        </SubtitleContainer>
      </TextContainer>
    </CardContainer>
  );
}

export default ProductCard;
