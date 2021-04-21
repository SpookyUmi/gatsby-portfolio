import { createGlobalStyle } from 'styled-components';
//import bg from '../assets/images/bg.svg';
//import stripes from '../assets/images/stripes.svg';

const GlobalStyles = createGlobalStyle`
  :root {
    --purple: #e45075;
    --black: #2E2E2E;
    --darker: #1f2023;
    --yellow: #ffc600;
    --white: #fff;
    --grey: #efefef;
    --transition: color 0.3s;
  }
  html {
    ${'' /* background-image: url(${bg});
    background-size: 450px;
    background-attachment: fixed;
    font-size: 10px; */}
  }

  fieldset {
    border-color: rgba(0,0,0,0.1);
    border-width: 1px;
  }

  button {
    background: var(--purple);
    color: white;
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
    border: 0;
    padding: 0.6rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      box-shadow: 0 10px 20px hsla(345, 73%, 60%, 0.527);
      background-color: hsl(345, 64%, 55%);
    }
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: opacity 0.3s;
  }

  a:hover {
    opacity: 0.7;
  }

  .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  }

  /* Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 12px;
  }
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--purple) var(--white);
  }
  body::-webkit-scrollbar-track {
    background: var(--white);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--purple) ;
    border-radius: 6px;
    border: 3px solid var(--white);
  }

  hr {
    border: 0;
    height: 8px;
    ${'' /* background-image: url(${stripes}); */}
    background-size: 1500px;
  }

  img {
    max-width: 100%;
  }

  .tilt {
    transform: rotate(-2deg);
    position: relative;
    display: inline-block;
  }

  @media only screen and (min-width: 768px) {
  #gatsby-focus-wrapper {
    display: flex;
  }
}

`;

export default GlobalStyles;
