import { createGlobalStyle } from 'styled-components';

import font from '../assets/fonts/frenchfries.ttf';
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/800.css";

const Typography = createGlobalStyle`
  @font-face {
    font-family: FrenchFries;
    src: url(${font});
  }

@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,400;0,600;0,800;1,400;1,600;1,800&display=swap");

html {
  font-family: 'Nunito Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: var(--black);
}

h1,
h2 {
  font-family: FrenchFries;
}

${'' /* body {
  font-family: "Nunito Sans";
} */}
`;

export default Typography;
