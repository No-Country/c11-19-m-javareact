import styled, { keyframes } from "styled-components";
import { useState } from "react";

// Define the SVG paths for the two images
const path1 =
  "M93.708,34.263c0,-13.143 -10.486,-23.794 -23.424,-23.794c-7.492,-0 -14.156,3.573 -18.435,9.122c-4.295,-5.549 -10.942,-9.122 -18.434,-9.122c-12.939,-0 -23.424,10.651 -23.424,23.794c-0,6.958 2.942,13.212 7.61,17.559l-0.203,-0l34.265,34.807l33.301,-33.828c5.328,-4.364 8.744,-11.047 8.744,-18.538Z";
const path2 =
  "M30.3594 4.03232C25.8526 4.06477 21.6419 0.799226 13.5612 3.43195C13.5612 3.43195 6.15789 6.1174 2.96942 16.9038C2.96942 16.9038 14.052 19.7435 19.573 16.7416C26.9154 13.2813 30.331 4.03638 30.3594 4.03232Z M31.6778 1.72812C27.1709 1.76057 22.9602 -1.50497 14.8795 1.12775C14.8795 1.12775 7.47625 3.8132 4.28778 14.5996C4.28778 14.5996 15.3704 17.4393 20.8914 14.4374C28.2338 10.9771 31.6494 1.73218 31.6778 1.72812Z M23.8689 5.54932C23.8689 5.54932 7.05438 7.26119 0.0892334 20.1003";

// Define the styled components for the SVG icons and the animation
const IconWrapper = styled.div`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const SvgIcon = styled.svg`
  width: 100%;
  height: 100%;
  fill: #000;
  transition: transform 0.2s ease-in-out;
`;

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const TransformIcon = styled(SvgIcon)`
  transform: rotate(0deg);
  animation: ${rotateAnimation} 0.7s ease-in;
`;

// Define the React component that uses the styled components and the animation
const IconAnimation = () => {
  const [transformed, setTransformed] = useState(false);

  const handleClick = () => {
    setTransformed(!transformed);
  };

  return (
    <IconWrapper onClick={handleClick}>
      {transformed ? (
        <TransformIcon
          viewBox="0 0 32 30"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <path
            d={path2}
            style={{
              fill: "#7FD1AE",
              fillRule: "nonzero",
              stroke: "#374444",
              strokeWidth: "1px"
            }}
          />
        </TransformIcon>
      ) : (
        <SvgIcon
          viewBox="0 0 105 98"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <path d={path1} style={{ fill: "#f3f3f3", fillRule: "nonzero" }} />
          <clipPath id="_clip1">
            <rect x="8.317" y="9.154" width="86.945" height="80.224" />
          </clipPath>
          <g clipPath="url(#_clip1)" />
          <path
            d={path1}
            style={{
              fill: "none",
              fillRule: "nonzero",
              strokeMiterlimit: 10,
              stroke: "#374444",
              strokeWidth: "2.08px",
            }}
          />
        </SvgIcon>
      )}
    </IconWrapper>
  );
};

export default IconAnimation;
