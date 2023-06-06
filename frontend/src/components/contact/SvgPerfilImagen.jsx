import styled from "styled-components";
const Imagen = styled.image`
  min-width: 495px;
  min-height: 495px;
`;

function SvgPerfilImagen({ img }) {
  return (
    <svg
      width="155"
      height="174"
      viewBox="0 0 155 174"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g filter="url(#filter0_d_1285_27459)">
        <path
          d="M19.9676 121.384C17.5106 119.95 16 117.319 16 114.475L16 51.5255C16 48.6808 17.5107 46.05 19.9676 44.6161L73.5303 13.356C76.0243 11.9004 79.1092 11.9019 81.6018 13.3598L135.039 44.6149C137.492 46.0498 139 48.6784 139 51.5204L139 114.48C139 117.322 137.492 119.95 135.039 121.385L81.6018 152.64C79.1092 154.098 76.0243 154.1 73.5303 152.644L19.9676 121.384Z"
          fill="url(#pattern0)"
          shapeRendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_1285_27459"
          x="0"
          y="0.265137"
          width="155"
          height="173.47"
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
            result="effect1_dropShadow_1285_27459"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1285_27459"
            result="shape"
          />
        </filter>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_1285_27459"
            transform="matrix(0.00234146 0 0 0.002 -0.0853662 0)"
          />
        </pattern>
        <text x="0" y="0" textAnchor="middle" dominantBaseline="middle">
          <Imagen
            id="image0_1285_27459"
            width="495"
            height="495"
            xlinkHref={img}
          />
        </text>
      </defs>
    </svg>
  );
}

export default SvgPerfilImagen;
