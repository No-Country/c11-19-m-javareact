import styled from "styled-components";

const Contenedor = styled.div`
  position: relative;
`;
const ContenedorElipse = styled.div`
  display: flex;
  width: 36px;
`;
const ContenedorFlecha = styled.div`
  display: flex;
  width: 15px;
  position: absolute;
  top: 0.5px;
  left: 21.5px;
`;

function Elipse() {
  return (
    <>
      <Contenedor>
        <ContenedorElipse>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
          >
            <path
              d="M32.2682 8.15054C29.9355 4.79563 26.5116 2.35333 22.5801 1.23979C18.6486 0.126257 14.4525 0.410378 10.707 2.04375C6.96146 3.67712 3.89814 6.55867 2.039 10.1974C0.17985 13.8362 -0.36009 18.007 0.511174 21.9992C1.38244 25.9915 3.611 29.5581 6.81714 32.0914C10.0233 34.6247 14.0086 35.968 18.0941 35.8923C22.1796 35.8166 26.1125 34.3267 29.2226 31.6764C32.3327 29.0261 34.4277 25.3793 35.1505 21.3576L27.322 19.9506C26.9247 22.1612 25.7732 24.1657 24.0637 25.6224C22.3542 27.0792 20.1924 27.8981 17.9468 27.9397C15.7012 27.9813 13.5106 27.243 11.7483 25.8505C9.98601 24.4581 8.76106 22.4977 8.28216 20.3033C7.80326 18.1089 8.10005 15.8164 9.12195 13.8163C10.1438 11.8162 11.8276 10.2324 13.8864 9.33456C15.9452 8.43676 18.2516 8.28059 20.4126 8.89266C22.5736 9.50472 24.4555 10.8472 25.7377 12.6912L32.2682 8.15054Z"
              fill="#F8A53A"
            />
          </svg>
        </ContenedorElipse>
        <ContenedorFlecha>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="15"
            viewBox="0 0 12 15"
            fill="none"
          >
            <path
              d="M11.1673 10.324L0.778448 14.0162L5.32632 0.972907L11.1673 10.324Z"
              fill="#F8A53A"
            />
          </svg>
        </ContenedorFlecha>
      </Contenedor>
    </>
  );
}

export default Elipse;
