import styled from "styled-components";
import respondTo from "../utils/respondTo";

export const HeroStyled = styled.div`
  padding: 0 10%;
  height: calc(100vh - 100px);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  color: #fff;

  ${respondTo.tabletMini` 
        height: 60vh;
  `}

  ${respondTo.tablet` 
      flex-direction: column;
      justify-content: center;
  `}

  ${respondTo.mobile` 
      padding: 0 5%;
  `}
  .slideshow {
    position: static;
  }
  .left-panel {
    display: flex;
    flex-direction: column;
    z-index: 10;

    ${respondTo.tablet` 
      display:none;
    `}

    h1 {
      line-height: 6.5rem;
      font-style: italic;
      font-weight: 500;
      font-size: 3.5rem;
    }
  }

  .hero {
    &__promotion-price {
      position: relative;
      padding: 2rem;
      display: flex;
      flex-direction: column;
      color: var(--white);
      ${respondTo.tablet` 
        margin-bottom: 2rem;
      `};

      &::before {
        content: "";
        background: #000;
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
        text-transform: uppercase;
        font-style: unset;
        font-size: 3rem;
        line-height: 6.5rem;
        color: var(--white);
        z-index: 10;

        ${respondTo.mobile` 
            font-size:2rem;
          `}

        span {
          color: var(--primary);
          font-size: 8rem;
          display: inline-block;
          transform: translateY(2rem);
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

  .video {
    display: grid;
    grid-template-columns: 1fr 1fr;

    ${respondTo.tabletMini` 
      grid-template-columns: 1fr;
  `}
    .promo-video {
      padding: 4rem 4rem;
      text-align: center;
      ${respondTo.mobilePortrait` 
      padding:2rem 0;
    `}
    }

    h2 {
      padding: 2rem 0;
    }
    &__description {
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
        font-size: 2rem;
        text-align: justify;
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
    padding: 0 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .comment-container {
    height: 20rem;
    padding: 2rem 0;
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;
