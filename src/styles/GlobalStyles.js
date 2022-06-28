import { createGlobalStyle } from "styled-components";
// import pageTurner from "../assets/images/hero-back.svg";

import respondTo from "../utils/respondTo";

const GlobalStyles = createGlobalStyle`
  :root {
    /* colorPrimary: "",
  red: "#FF5964",
  lightgrey1: "#E1E1E1",
  , */
    --primary: #2090c0;
    --red: #FF5964;
    --lightgrey1: #E1E1E1,
    --darkgrey1: #383838,
    --white: #fff;
    --grey: #efefef;
    
    --secondary: #FFA700;
  }
  
  html {
    
    
    /* background-size:  100vw 100vh; */
    background-attachment: fixed;
    font-size: 10px;
    box-sizing: border-box;

    scroll-behavior: smooth;
    font-family: "Open Sans", sans-serif;
  }

  * {
    box-sizing: border-box;
  }
  body {
    font-size: 1.8rem;
    box-sizing: border-box;
    background: #fff;
    font-family: "Open Sans", sans-serif;
  }

  fieldset {
    border-color: rgba(0,0,0,0.1);
    border-width: 1px;
  }

  button {
    outline: none;
    background: var(--secondary);
    color: white;
    border: 0;
    padding: 1rem 2.5rem;
    border-radius: 2px;
    width: fit-content;
    text-transform: uppercase;
    cursor: pointer;
    --cast: 2px;
    /* box-shadow: var(--cast) var(--cast) 0 var(--grey); */
    text-shadow: 0.5px 0.5px 0 rgba(0,0,0,0.2);
    transition: all 0.2s;
    &:hover {
      --cast: 4px;
    }
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
    scrollbar-color: var(--primary) var(--white);
  }
  body::-webkit-scrollbar-track {
    background: var(--white);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--primary) ;
    border-radius: 6px;
    border: 3px solid var(--white);
  }

  /* hr {
    border: 0;
    height: 8px;
    background-size: 1500px;
  } */

  img {
    max-width: 100%;
  }

  .tilt {
    transform: rotate(-2deg);
    position: relative;
    display: inline-block;
  }

  ul {
    list-style: none;
    padding: 0;
    margin; 0;
  }


  .ReactModal__Overlay {
    opacity: 0;
    transition: opacity 500ms ease-out;
    z-index: 1000;
    
    
    margin: 0 auto;

    ${respondTo.laptopSmall`
        height: fit-content;
    `}

  }

  .ReactModal__Overlay--after-open {
    opacity: 1;
  
  }

  .ReactModal__Overlay--before-close {
    opacity: 0;
  }
  
  .ReactModal__Content {
    transform: translateY(50px);
    transition: transform 500ms ease-out;
    /* height: 80vh; */
    width: 60vw;
    
    ${respondTo.laptop`
      width: 65vw;
    `}
    ${respondTo.tabletMini`
      width: 80vw;
    `}
    overflow: scroll;
    height: min-content;
    margin: 0 auto;
    
  }

  .ReactModal__Content--after-open {
    transform: translateY(0);
  }

  .ReactModal__Content--before-close {
    transform: translateY(50px);
}


`;

export default GlobalStyles;
