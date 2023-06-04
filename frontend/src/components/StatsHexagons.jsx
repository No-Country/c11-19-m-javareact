import styled from 'styled-components';
import Hexagon from './icons/Hexagon';
import hexagonMobileBg from '../assets/img/hexagon-mobile-bg.svg'
import hexagonBg from '../assets/img/hexagon-desktop-bg.svg'

const StatsBackground = styled.div`
  background-image: url(${hexagonMobileBg});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  width: 100%;
  height:500px;
  @media screen and (min-width: 769px) {
    background-image: url(${hexagonBg});
    background-size: cover;
    background-position: center top;
    height:100%;
  }
`;

const HexagonSectionStyled = styled.article`
  position: relative;
  width: 100%;
  height: 500px;
  @media screen and (min-width: 769px) {
    height: 100vh;
  }
`;

const HexagonContainer = styled.div`
  position: absolute;
  top: 37%;
  left: 35%;
  transform: translate(-50%, -50%);
`;

const HexagonStyled = styled.div`
  transform: scale(1.75); 
  text-align: center;
  filter: drop-shadow(0px 4px 16px rgba(0, 0, 0, 0.16));
  @media screen and (min-width: 769px) {
  transform: scale(2.5);
  display: flex;
  align-items: center;
  }
`;

const HexagonText = styled.p`
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #F3F3F3;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.38px;
  z-index: 3;
  @media screen and (min-width: 769px) {
  font-size: 26px; 
  line-height: 30px;
  }
`;

const StatsHexagons = () => {
  return (
    <HexagonSectionStyled>
<StatsBackground />
      <HexagonContainer>
        <HexagonStyled> <Hexagon fill='#4D686D' /> </HexagonStyled>
        <HexagonText>+ 2mil ecocreadores</HexagonText>
      </HexagonContainer>
      <HexagonContainer style={{ top: '63%', left: '65%' }}>
        <HexagonStyled> <Hexagon fill='#4D686D' /> </HexagonStyled>
        <HexagonText>+ 10mil reciclados</HexagonText>
      </HexagonContainer>
    </HexagonSectionStyled>
  );
};

export { StatsHexagons };
