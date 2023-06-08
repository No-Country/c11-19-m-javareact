import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    // COLORS
    --text-one: #1c2029;
    --text-two: #ffffff;
    --text-three: #717172;
    --green-1: #b8e7d3;
    --green-2: #7FD1AE;
    --green-3: #99C2A2;
    --green-4: #4D686D;
    --orange-1: #F8A53A;
    --orange-2:#F69110;
    --white: #F3F3F3;
    --gray-1: #C7D1D1;
    --gray-2: #8EA4A4;
    --gray-3: #5b7171;
    --gray-4: #374444;
    --red-alert: #ff453a;
    --yellow-alert: #ffd60a;
    --green-alert: #30d158;

    // BACKGROUNDS
    --background-one: #e0e1e9;
    --background-two: #ebbbbb;
    --background-three: #fdfdff;
    // TYPOGRAPHY
    --family-one: 'Mukta', sans-serif;
    --family-two: 'Montserrat', sans-serif;

    // TYPOGRAPHY SIZE (font property):
    --heading-xxlarge: normal normal 900 49px/58px 'Montserrat', sans-serif;
    --heading-xlarge: normal normal 900 39px/47px 'Montserrat', sans-serif;
    --headline-large: normal normal 900 31px/38px 'Montserrat', sans-serif;
    --headline-medium: normal normal 900 25px/30px 'Montserrat', sans-serif;
    --headline-xxs: normal normal 900 12px/14px 'Montserrat', sans-serif;
    --heading-small: normal normal 900 20px/24px 'Montserrat', sans-serif;
    --heading-xsmall: normal normal 900 16px/19px 'Montserrat', sans-serif;
    --heading-xxsmall: normal normal 900 10px/12px 'Montserrat', sans-serif;
    
    --paragraph-l-bold: normal normal 700 16px/24px 'Mukta', sans-serif;
    --paragraph-m-bold: normal normal 700 12px/22px 'Mukta', sans-serif;
    --paragraph-s-bold: normal normal 700 10px/16px 'Mukta', sans-serif;
    --paragraph-l: normal normal 300 16px/24px 'Mukta', sans-serif;
    --paragraph-m: normal normal 300 12px/22px 'Mukta', sans-serif;
    --paragraph-s: normal normal 300 10px/16px 'Mukta', sans-serif;
  }

  * {
    &::-webkit-scrollbar {
      width: 0.25rem;
      background-color: var(--background-one);
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--text-one);
      border-radius: 3rem;
    }

  &,
  &::before,
  &::after {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    vertical-align: baseline;
  }

  &::before,
  &::after {
    display: block;
  }
  }

  ::-moz-selection {
    background-color: var(--text-one);
    color: var(--background-one);
  }

  ::selection {
    background-color: var(--text-one);
    color: var(--background-one);
  }

  body {
    background-color: var(--background-one);
    max-width: 220rem;
    margin: 0 auto;
  }

  #root {
    min-height: 100vh;
    color: var(--text-one);
    font-size: 100%;
    font-family: var(--family-one);
    background-color: var(--background-one);
    ${'' /* display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr; */}
  }

  img,
  picture,
  video,
  iframe,
  figure {
    max-width: 100%;
    width: 100%;
    display: block;
    object-fit: cover;
    object-position: center center;
  }

  a {
    display: block;
    color: inherit;
    font-size: inherit;
    text-decoration: none;
  }

  p a {
    display: inline;
  }

  li {
    list-style-type: none;
  }

  html {
    scroll-behavior: smooth;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  span,
  a,
  strong,
  blockquote,
  i,
  b,
  u,
  em {
    color: inherit;
    font-size: inherit;
    font-weight: inherit;
    font-style: inherit;
    text-decoration: none;
  }

  form,
  input,
  textarea,
  select,
  button,
  label {
    color: inherit;
    display: block;
    font-size: inherit;
    font-family: inherit;
    background-color: transparent;
  }

  svg {
    width: 100%;
    display: block;
  }
`

export { GlobalStyles }
