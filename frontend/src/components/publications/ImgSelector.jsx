import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
// import Upload from "./Upload";

const StyledCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 90px 10px 80px;
  gap: 10px;

  width: 264px;
  height: 55px;

  /* Drop Shadow 16 */

  filter: drop-shadow(0px 4px 16px rgba(0, 0, 0, 0.16));
  border-radius: 30px;

  /* Inside auto layout */

  flex: none;
  order: ${({ orden }) => orden};
  flex-grow: 0;
`;
const StyledImgContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  // padding: 10px 90px 10px 80px;
  // gap: 10px;

  // width: 264px;
  // height: 55px;

  /* Inside auto layout */

  margin: 0 auto;
  order: ${({ orden }) => orden};
  flex-grow: 0;
`;
const StyledImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 30px;
  margin: 0 0 14px 0;
`;
// const ContenedorSvg = styled.div`
//   left: 13.33%;
//   right: 13.33%;
//   top: 7%;
//   bottom: 6.67%;
//   width: 35px;
//   height: 35px;
// `;
const Svg = styled.svg`
  // left: 13.33%;
  // right: 13.33%;
  // top: 7%;
  // bottom: 6.67%;
  // width: 35px;
  // height: 35px;
  // object-fit: contain;
  width: 100%;
`;
const StyledCardFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  // padding: 10px 90px 10px 80px;
  gap: 10px;

  width: 264px;
  height: 55px;

  /* Inside auto layout */

  flex: none;
  order: 8;
  flex-grow: 0;
`;
const StyledInput = styled.input`
  display: none;
`;

function ImgSelector({ imgValor, orden }) {
  const [preview, setPreview] = useState([]);
  const [showArray, setShowArray] = useState(false);

  useEffect(() => {
    imgValor(preview);
  }, [preview]);

  const CLOUDINARY_URL =
    "https://api.cloudinary.com/v1_1/drc41imav/image/upload";
  const CLOUDINARY_UPLOAD_PRESET = "UpCircle";

  async function onChangeHandler(e) {
    const file = e.target.files[0];

    if (showArray === true) {
      console.log("No se puede subir más de una foto");
    }

    if (!showArray) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

      const res = await axios.post(CLOUDINARY_URL, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setPreview([res.data.url]);
      setShowArray(true);
    }
  }

  return (
    <>
      {showArray && (
        <StyledImgContainer orden={orden}>
          {preview.map((ImgURL, i) => (
            <StyledImg src={ImgURL} key={i} />
          ))}
        </StyledImgContainer>
      )}
      {!showArray && (
        <StyledCard orden={orden}>
          <StyledCardFooter>
            <>
              <label htmlFor="upload">
                <Svg
                  width="59"
                  height="63"
                  viewBox="0 0 59 63"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_546_44324)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M30.242 12.758C30.0451 12.5614 29.7782 12.4509 29.5 12.4509C29.2217 12.4509 28.9549 12.5614 28.758 12.758L21.758 19.758C21.6548 19.8541 21.5721 19.9701 21.5147 20.0989C21.4573 20.2276 21.4265 20.3667 21.424 20.5077C21.4215 20.6487 21.4474 20.7887 21.5002 20.9194C21.553 21.0502 21.6316 21.169 21.7313 21.2687C21.831 21.3684 21.9498 21.447 22.0806 21.4998C22.2113 21.5526 22.3513 21.5785 22.4923 21.576C22.6333 21.5735 22.7723 21.5427 22.9011 21.4853C23.0299 21.4279 23.1459 21.3452 23.242 21.242L28.45 16.034V32.1667C28.45 32.4451 28.5606 32.7122 28.7575 32.9091C28.9544 33.106 29.2215 33.2167 29.5 33.2167C29.7785 33.2167 30.0455 33.106 30.2425 32.9091C30.4394 32.7122 30.55 32.4451 30.55 32.1667V16.034L35.758 21.242C35.8541 21.3452 35.97 21.4279 36.0988 21.4853C36.2276 21.5427 36.3667 21.5735 36.5077 21.576C36.6486 21.5785 36.7887 21.5526 36.9194 21.4998C37.0502 21.447 37.1689 21.3684 37.2686 21.2687C37.3684 21.169 37.447 21.0502 37.4998 20.9194C37.5526 20.7887 37.5785 20.6487 37.576 20.5077C37.5735 20.3667 37.5427 20.2276 37.4853 20.0989C37.4279 19.9701 37.3452 19.8541 37.242 19.758L30.242 12.758ZM17.8333 33.3333C18.1427 33.3333 18.4395 33.4563 18.6583 33.675C18.8771 33.8938 19 34.1906 19 34.5V38C19 39.2927 20.0407 40.3333 21.324 40.3333H37.669C37.9753 40.3333 38.2786 40.273 38.5616 40.1557C38.8445 40.0384 39.1016 39.8665 39.3181 39.6498C39.5346 39.4331 39.7062 39.1758 39.8232 38.8928C39.9402 38.6097 40.0003 38.3063 40 38V34.5C40 34.1906 40.1229 33.8938 40.3417 33.675C40.5605 33.4563 40.8572 33.3333 41.1667 33.3333C41.4761 33.3333 41.7728 33.4563 41.9916 33.675C42.2104 33.8938 42.3333 34.1906 42.3333 34.5V38C42.3333 39.2373 41.842 40.4239 40.9673 41.299C40.0927 42.1741 38.9063 42.6661 37.669 42.6667H21.324C20.7117 42.6664 20.1054 42.5454 19.5399 42.3106C18.9744 42.0759 18.4607 41.732 18.0281 41.2986C17.5956 40.8652 17.2527 40.3508 17.0191 39.7848C16.7855 39.2188 16.6657 38.6123 16.6667 38V34.5C16.6667 34.1906 16.7896 33.8938 17.0084 33.675C17.2272 33.4563 17.5239 33.3333 17.8333 33.3333Z"
                      fill="#99C2A2"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_546_44324"
                      x="-4"
                      y="-2"
                      width="67"
                      height="67"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="8" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_546_44324"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_546_44324"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </Svg>
              </label>

              <label htmlFor="upload">
                <p>Carga una foto</p>
              </label>
            </>

            <StyledInput type="file" id="upload" onChange={onChangeHandler} />
          </StyledCardFooter>
        </StyledCard>
      )}
    </>
  );
}

export default ImgSelector;
