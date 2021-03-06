import { createGlobalStyle } from "styled-components";

// import font from "../assets/fonts/J";
// import fontItalic from "../assets/fonts/JosefinSans-Italic.tff";
// import fontLight from "../assets/fonts/JosefinSans-Light.tff";
// import fontRegular from "../assets/fonts/JosefinSans-Regular.tff";
// import fontSemiBold from "../assets/fonts/JosefinSans-SemiBold.tff";
// import fontThin from "../assets/fonts/JosefinSans-Thin.tff";

const Typography = createGlobalStyle`
  

  /* @font-face {
    font-family: 'Josefin Sans';
    src: url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,300;0,600;1,300&display=swap'); 
  }
  @font-face {
    font-family: 'Nunito';
    src:  url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,600;1,300&display=swap');
  } */
  html {
    font-family: 'Josefin Sans', sans-serif;
    /* font-family: Josefin Sans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; */
    color: var(--black);
  }
  p, li {
    letter-spacing: 0.5px;
  }
  h1,h2,h3,h4,h5,h6 {
    /* font-weight: normal; */
    margin: 0;
    /* letter-spacing: 0.2rem; */
  }
  a {
    color: var(--black);
    text-decoration: none;
    
  }
  mark, .mark {
    background: var(--yellow);
    padding: 0 2px 2px 2px;
    margin: 0;
    display: inline;
    line-height: 1;
  }

  .center {
    text-align: center;
  }

  .tilt {
    transform: rotate(-2deg);
  }
`;

export default Typography;
