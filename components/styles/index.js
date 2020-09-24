import { respondTo } from "../../utils/respondTo";
import styled from "styled-components";

export const HeroStyled = styled.div`
  padding: 0 10%;
  height: calc(100vh - 130px);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${respondTo.tablet` 
      flex-direction: column;
      justify-content: center;
  `}

  .hero {
    &__button {
      margin-top: 2rem;
      font-size: 2.5rem;
      padding: 1.25rem 2rem;
    }

    &__promotion-price {
      position: relative;
      padding: 5rem;

      ${respondTo.tablet` 
        margin-bottom: 2rem;
      `}
      text-align: center;
      color: ${(props) => props.theme.darkgrey1};
      &__regular-price {
        ${respondTo.mobile` 
        font-size: 3rem;
        max-width: 200px !important;
      `}

        font-size: 5rem;
        position: relative;
        &::before {
          content: "";
          position: absolute;
          width: 8rem;
          height: 0.5rem;
          background-color: ${(props) => props.theme.red};
          /* border-radius: 2px; */
          top: 4.5rem;
          left: 9.5rem;
          transform: rotate(45deg);
        }
        &::after {
          content: "";
          position: absolute;
          width: 8rem;
          height: 0.5rem;
          background-color: ${(props) => props.theme.red};
          /* border-radius: 2px; */
          top: 4.5rem;
          left: 9.5rem;
          transform: rotate(-45deg);
        }
      }
      &__title {
        text-transform: uppercase;
        font-style: unset;
        font-size: 3.5rem;
        line-height: 6.5rem;
        /* width: 40rem; */

        span {
          color: ${(props) => props.theme.colorSecondary};
          font-size: 10rem;

          /* transform: translateX(-1rem); */
          display: inline-block;
          transform: translateY(2rem);
        }
      }

      &-notice {
        position: absolute;
        bottom: 0.5rem;
        right: 2rem;
        font-style: italic;
        opacity: 0.7;
      }

      &::before {
        content: "";
        background: #fff;
        padding: 4rem;
        opacity: 0.5;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        border-radius: 1rem;
        z-index: -1;
        ${respondTo.mobile` 
        font-size: 3rem;
        max-width: 100%;
      `}
      }
    }
  }
  .left-panel {
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 2rem;

    ${respondTo.tablet` 
      display:none;
     `}
    /* color: */
    h1 {
      color: ${(props) => props.theme.lightgrey1};
      line-height: 6.5rem;
      font-style: italic;
      font-weight: 500;
      font-size: 4.5rem;
    }
  }
  h3 {
    color: #fff;
  }

  .hero__button {
    background-color: ${(props) => props.theme.colorPrimary};
  }

  /* STYLES FOR VIDEO */
  .bg-video {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
    background: black;
    /* opacity: 0.5; */

    /* background: url(${require("../../public/baby-dog.jpg")}) no-repeat; */
    background-size: cover;
    background-position-y: bottom;
    overflow: hidden;

    &::before {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      content: "";
      /* background-color: rgba(94, 190, 215, 0.7); */
      /* opacity: 0.5; */
      background-color: rgba(0, 0, 0, 0.4);
    }

    &__content {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
`;
