import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    // COLORS
    --text-one: #1c2029;
    --text-two: #ffffff;
    --text-three: #717172;
    // BACKGROUNDS
    --background-one: #e0e1e9;
    --background-two: #ebbbbb;
    --background-three: #fdfdff;
    // TYPOGRAPHY
    --family-one: 'Mukta', sans-serif;
    --family-two: 'Montserrat', sans-serif;
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
