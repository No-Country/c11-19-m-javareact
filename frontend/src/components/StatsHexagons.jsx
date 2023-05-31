import styled from 'styled-components';
import { HeroBackground } from './hero/HeroBackground';
import Hexagon from './icons/Hexagon';

const HeroStyled = styled.article`
  position: relative;
  width: 100%;
  height: 100vh;
`;

const HeroBackgroundFixed = styled(HeroBackground)`

  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
`;

const HexagonContainer = styled.div`
  position: absolute;
  top: 17%;
  left: 35%;
  transform: translate(-50%, -50%);
`;

const HexagonStyled = styled.div`
  width: 150px;
  transform: scale(1.75); 
  z-index: 2;
  filter: drop-shadow(0px 4px 16px rgba(0, 0, 0, 0.16));
`;

const HexagonText = styled.p`
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
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.38px;
  z-index: 3;
`;

const StatsHexagons = () => {
  return (
    <HeroStyled>
      <HeroBackgroundFixed />
      <HexagonContainer>
        <HexagonStyled> <Hexagon fill='#4D686D' /> </HexagonStyled>
        <HexagonText>+ 2mil ecocreadores</HexagonText>
      </HexagonContainer>
      <HexagonContainer style={{ top: '33%', left: '65%' }}>
        <HexagonStyled> <Hexagon fill='#4D686D' /> </HexagonStyled>
        <HexagonText>+ 10mil reciclados</HexagonText>
      </HexagonContainer>
    </HeroStyled>
  );
};

export { StatsHexagons };
