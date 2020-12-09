import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";

// import { Link } from "gatsby-plugin-modal-routing";

import Discount from "../assets/images/discount.svg";
import SEO from "../components/SEO";
import Services from "../components/Services";
import Slideshow from "../components/Slideshow";
import Image from "../components/Image";

// import { HeroStyles, SectionStyles } from "../styles/HomePage";
import respondTo from "../utils/respondTo";

const HomeStyled = styled.main`
  /* color: blue; */
  /* grid-column: full-start / full-end; */

  .testimonials {
    padding: 0 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* min-height: 500px; */
  }

  .comment-container {
    /* background: blue;
    ba
    opacity: 0.5; */
    height: 200px;
  }
  width: 100%;
  .video {
    display: grid;
    grid-template-columns: 1fr 1fr;

    ${respondTo.tabletMini` 
      grid-template-columns: 1fr;
  `}

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
          // font-size: 1.6rem;
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
  .promo-video {
    padding: 4rem 4rem;
    text-align: center;
    ${respondTo.mobilePortrait` 
      padding:2rem 0;
    `}/* h2 {
      padding: 4rem;
    } */
  }
`;

const HeroStyled = styled.div`
  padding: 0 10%;
  height: calc(100vh - 100px);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${respondTo.tabletMini` 
      
      height: 80vh;
    `}

  color: #fff;
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

      &__regular-price {
        width: fit-content;
        font-size: 5rem;
        position: relative;
        ${respondTo.mobile` 
        font-size: 3rem;
        
        text-align: center;
        margin-right: 0;
      `}

        &::before {
          content: "";
          position: absolute;
          width: 8rem;
          height: 0.5rem;
          background-color: var(--red);
          /* border-radius: 2px; */
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
      }
      &__title {
        text-transform: uppercase;
        font-style: unset;
        font-size: 3.5rem;
        line-height: 6.5rem;
        /* width: 40rem; */
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
  .left-panel {
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 2rem;
    z-index: 10;
    ${respondTo.tablet` 
      display:none;
     `} /* color: */ h1 {
      /* color: ${(props) => props.theme.lightgrey1}; */
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
    /* background-color: var(--primary); */
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

const HomePage = () => {
  return (
    <>
      <SEO title={"Aladinko"} />
      <HomeStyled>
        <div id="fb-root"></div>

        <HeroStyled>
          <div className="left-panel">
            <h1>Čiste preproge</h1>
            <h1>Profesionalna storitev</h1>
            <h1>Poštena cena</h1>
          </div>
          <Slideshow className="slideshow" />

          <div className="hero__promotion-price">
            <h2 className="hero__promotion-price__regular-price">
              6€ po &#13217;
            </h2>
            <h2 className="hero__promotion-price__title">
              PROMOCIJSKA CENA OD <br />
              <span>3€</span> po &#13217;
            </h2>
            <img className="discount-icon" src={Discount} />
            <p className="hero__promotion-price-notice">Velja do 15.10.2020</p>
          </div>
        </HeroStyled>

        <section className="video">
          <div className="promo-video">
            <h2>Poglejte si naš proces pranja</h2>
            <ReactPlayer
              url="https://youtu.be/TiZB6gRWTWc"
              // url=""
              width="100%"
              controls
              // playing
            />
          </div>
          <article className="video__description">
            <h2>Zagotovitev 100% kakovost</h2>
            <p>
              Kot je razvidno iz posnetka, vaš preprog gre cež 6 različih
              korakov, da bi zagotovili čiste preproge. Stroje ki jih mi
              uporabljamo so se uporabljajo v vseh profesionalnih pralnic
              preproge.
            </p>
            <br />
            <p>
              Mi smo edini v Mariboru ki uporabljajo takšen tip stroje, v
              procesu pranja preproge. Podrobnejši opis vsak korak v našem
              procesu najdete
              {/* <Link href="/#cleaning-process"> */}
              <a onClick={() => scrollToElement("cleaning-process")}>tukaj.</a>
              {/* </Link> */}
            </p>
          </article>
        </section>
        <Services />

        <section className="testimonials">
          <h2 className="title">Komentare zadovolnjih strank</h2>
          {/* {commentIds.map((id) => ( */}
          {/* {comment && (
            <div className="comment-container">
              <div
                className="fb-comment-embed"
                data-href={`https://www.facebook.com/aladinkopreproge/posts/122760006250971?comment_id=${comment}`}
                data-width="500"
              ></div>
            </div>
          )}
          ))} */}
        </section>
      </HomeStyled>
    </>
  );
};

export default HomePage;
