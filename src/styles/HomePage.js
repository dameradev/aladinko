import styled from "styled-components";
import respondTo from "../utils/respondTo";

export const HeroStyled = styled.div`
  padding: 0 10%;
  height: calc(100vh);
  overflow:hidden;
  
  position: relative;
  display: flex;
  justify-content: start;
  align-items: center;
  /* display: flex;
  align-items: center; */
  /* align-items: center;
  justify-content: space-between; */

  max-width: 100vw;
  ${respondTo.tabletMini`
    padding: 0 4rem;
  `}

  .vacation {
    line-height: 4rem;
    font-size: 3.2rem;
    font-weight: 600;
    color: #fff;
  }
  .wrapper {
    
    z-index: 10;
    color: #fff !important;
    max-width: 80%;

    ${respondTo.tabletMini`
      max-width: 100%;
      max-width: 100vw;
    `}

    .desc {
      color: var(--primary);
    }
    
    h1 {
      font-size: 4.8rem;
      z-index: 10000;
      color: #fff !important;
      font-weight: bold;
      text-transform: capitalize;
      ${respondTo.tabletMini`
        font-size: 3.2rem;
      `}
    }

    .btn-container {
      margin-top: 2rem;
      display: flex;
      gap: 2rem;
    }
    .btn {
      background: var(--secondary);
      padding: 1.5rem 3rem;
      padding-top: 1.6rem;
      border-radius: 9999px;
      &-primary {
        background: var(--primary);
      }
    }

  }
  color: #fff;

  .container {
    margin-top: 10rem;
    height: inherit;
    max-width: 100vw;

    display: flex;
    align-items: center;
    justify-content: space-between;
    /* display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr)); */
    justify-content: center;
    gap: 5rem;
    ${respondTo.tabletMini` 
        height: 80vh;
  `}

    ${respondTo.mobile` 
      padding: 0 5%;
      text-align: center;
      gap: 0;
  `}
    ${respondTo.tablet` 
      flex-direction: column;
      justify-content: center;
  `}
  }

  .opening-again {
    text-align: center;
    max-width: 100vw;
    margin-top: 2rem;
    width: 30rem;
    position: relative;
    padding: 2rem;
    color: #fff;
    ${respondTo.mobile` 
      margin-top:0;
    `}
  }

  .slideshow {
    position: static;
    max-width: 100vw;
  }
  .left-panel {
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    z-index: 10;

    ${respondTo.tablet` 
      // display:none;
    `}

    h1 {
      max-width: 100vw;
      line-height: 6.5rem;
      font-style: italic;
      font-weight: 500;
      font-size: 3.5rem;
      position: relative;

      &:before {
        position: absolute;
        content: "";
        width: 1rem;
        height: 1rem;
        background: #fff;
        top: 2.5rem;
        left: -2rem;

        ${respondTo.tablet` 
          display:none;
        `}
      }
      &:nth-child(odd) {
        ${respondTo.tablet` 
          display:none;
        `}
      }
    }
  }

  .hero {

    &__promotion-price {
      position: relative;
      max-width: 20rem;
      padding: 2rem;
      display: flex;
      flex-direction: column;
      color: var(--white);
      ${respondTo.tablet` 
        margin-bottom: 2rem;
      `};

      &::before {
        content: "";
        /* background: #000; */
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0.8;
      }

      .discount-icon {
        position: absolute;
        width: 8rem;
        right: -4rem;
        top: -4rem;
        ${respondTo.mobile` 
          width: 6rem;
          right: -3rem;
          top: -3rem;
        `}
      }

      &__regular-price {
        width: fit-content;
        font-size: 5rem;
        position: relative;

        ${respondTo.mobile` 
            font-size: 3rem;
            text-align: center;
            margin-right: 0;
        `}
        /* RED LINES */
        &::before {
          content: "";
          position: absolute;
          width: 8rem;
          height: 0.5rem;
          background-color: var(--red);
          top: 2rem;
          left: -0.5rem;
          transform: rotate(45deg);

          ${respondTo.mobile` 
            top: 1.5rem;
            width: 5rem;
            
          `}
        }
        &::after {
          content: "";
          position: absolute;
          width: 8rem;
          height: 0.5rem;
          background-color: var(--red);
          /* border-radius: 2px; */
          top: 2rem;
          left: -0.5rem;
          transform: rotate(-45deg);
          ${respondTo.mobile` 
            top: 1.5rem;
            width: 5rem;
          `}
        }
        /* RED LINES */
      }
      &__title {
        /* text-transform: uppercase; */
        font-style: unset;
        font-size: 3rem;
        /* line-height: 6.5rem; */
        color: var(--white);
        z-index: 10;

        ${respondTo.mobile` 
            font-size:2rem;
          `}

        span {
          color: var(--red);
          font-size: 4rem;
          /* display: inline-block; */
          /* transform: translateY(2rem); */
        }
      }

      &-notice {
        position: absolute;
        bottom: -5rem;
        right: 2rem;
        font-style: italic;
        opacity: 0.7;
      }
    }
  }
`;

export const HomeStyled = styled.main`
  width: 100%;
  max-width: 100vw;
  overflow:hidden;
  

  a.text-underline {
    text-decoration: underline !important;
  }
  .main-desc {
    max-width: 100vw;
    padding: 2rem;
    text-align: center;
    font-size: 2.4rem;
    font-weight: 100;
    font-style: italic;
    font-family: sans-serif;
  }
  .video {
    max-width: 100vw;
    display: grid;
    grid-template-columns: 1fr 1fr;

    ${respondTo.tabletMini` 
      grid-template-columns: 1fr;
  `}
    .promo-video {
      padding: 4rem 5%;
      text-align: center;
      ${respondTo.mobilePortrait` 
      padding:2rem 0;
    `}
    }

    h2 {
      padding: 2rem 0;
    }
    
    &__description {
      max-width: 100vw;
      padding: 4rem 2rem;
      text-align: center;

      ${respondTo.laptop` 
        padding: 4rem 0;
      `}
      ${respondTo.tabletMini` 
        padding: 2rem 0;
        font-size: 1.6rem;
      `}
      p {
        font-size: 1.8rem;
        text-align: left;
        padding: 0 8rem;
        ${respondTo.tablet` 
          padding: 0 4rem;
        `}
        ${respondTo.mobilePortrait` 
          // padding: 0 4rem;
          font-size: 1.6rem;
        `}

        a {
          padding-left: 0.8rem;
          font-size: 2.2rem;
          color: var(--primary);
        }
      }
    }
  }

  .testimonials {
    max-width: 100vw;
    padding: 0 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .comment-container {
    max-width: 100vw;
    height: 20rem;
    padding: 2rem 0;
    max-width: 60rem;
    display: flex;
    justify-content: center;
  }
`;
