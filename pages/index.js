import { useEffect, useState } from "react"; // import Head from 'next/head'
import Link from "next/link";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import icons from "../utils/icons";
import { HeroStyled } from "../components/styles/index";

import { respondTo } from "../utils/respondTo";

import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import ReactPlayer from "react-player";

import { FacebookProvider, Comments } from "react-facebook";

import Services from "../components/Services";
import SEO from "../components/SEO";
import useFacebook from "../utils/useFacebook";

const AutoplaySlider = withAutoplay(AwesomeSlider);

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
          font-size: 1.6rem;
        `}

        a {
          padding-left: 0.8rem;
          font-size: 2.2rem;
          color: ${(props) => props.theme.colorPrimary};
        }
      }
    }
  }
  .promo-video {
    padding: 4rem 2rem;
    text-align: center;
    /* h2 {
      padding: 4rem;
    } */
  }
`;

const images = [
  { url: "baby-dog.jpg" },
  { url: "quote.jpg" },
  // { url: "man-cleaining.jpg" },
];

const commentIds = [
  "124222499438055",
  "122917736235198",
  "122883026238669",
  "122871602906478",
  "122780256248946",
];

const scrollToElement = (id) => {
  const element = document.getElementById(id);
  window.scrollTo({
    top: element.getBoundingClientRect().top + window.scrollY - 100,
  });
};
let commentIndex = 0;
export default function Home() {
  const [comment, setComment] = useState("124222499438055");

  const loadFbLoginApi = () => {
    window.fbAsyncInit = function () {
      FB.init({
        appId: 207395400191664,
        cookie: true, // enable cookies to allow the server to access
        // the session
        xfbml: true, // parse social plugins on this page
        version: "v2.5", // use version 2.1
      });
    };

    console.log("Loading fb api");
    // Load the SDK asynchronously
    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  };

  useEffect(() => {
    loadFbLoginApi();
    window.FB.XFBML.parse();

    const interval = setInterval(() => {
      commentIds.forEach((commentId, index) => {
        if (commentId === comment) {
          commentIndex = index;
        }
      });

      if (commentIds.length - 1 > commentIndex) {
        setComment(commentIds[commentIndex + 1]);
      } else {
        setComment(commentIds[0]);
      }

      window.FB.XFBML.parse();
    }, 5000);

    return () => clearInterval(interval);
  });

  return (
    <>
      <SEO title={"Aladinko"} />
      <HomeStyled>
        <div id="fb-root"></div>

        <HeroStyled>
          <div className="bg-video">
            {/* <video className="bg-video__content" autoPlay muted loop>
            <source src="/video3.mp4" type="video/mp4" />
            {/* <source src="img/video.webm" type="video/webm" /> */}
            {/* Your browser is not supported! */}
            {/* </video>  */}
            {/* <img src="images/" /> */}
          </div>

          <AutoplaySlider
            // animation="cubeAnimation"
            className="bg-video"
            interval={10000}
            play={true}
            cancelOnInteraction={false}
          >
            <div data-src="baby-dog.jpg" />
            <div data-src="quote.jpg" />
          </AutoplaySlider>
          {/* <SimpleImageSlider width={896} height={504} images={images} /> */}
          <div className="left-panel">
            {/* <h3>Mehanično pranje preprog</h3> */}
            <h1>Čiste preproge</h1>
            <h1>Profesionalna storitev</h1>
            <h1>Poštena cena</h1>
            {/* <h3>Promotivni 2€ po &#13217;</h3> */}
            {/* <Button className="hero__button" variant="contained" color="primary">
            Preberi več
          </Button> */}
          </div>

          <div className="hero__promotion-price">
            <h2 className="hero__promotion-price__regular-price">
              6€ po &#13217;
            </h2>
            <h2 className="hero__promotion-price__title">
              PROMOCIJSKA CENA OD <br />
              <span>3€</span> po &#13217;
            </h2>
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
          {comment && (
            <div className="comment-container">
              <div
                className="fb-comment-embed"
                data-href={`https://www.facebook.com/aladinkopreproge/posts/122760006250971?comment_id=${comment}`}
                data-width="500"
              ></div>
            </div>
          )}
          {/* ))} */}
        </section>
      </HomeStyled>
    </>
  );
  // return <h1> dame</h1>;
}

// import quote from "../public/quote";
const QuoteSection = styled.div`
  margin: 15rem 0;
  padding: 10rem 10%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  position: relative;

  background-image: url(${require("../public/quote.jpg")});
  background-size: cover;
  background-position: bottom;
  /* bac */
  /* background-image: url("../public/quote.jpg"); */
  /* background-image: url(${quote}); */
  h1 {
    font-size: 5rem;
    /* font-weight: 300; */
    z-index: 100;
    margin-bottom: 5rem;
  }
  p {
    font-size: 1.6rem;
    width: 50%;
    z-index: 100;
  }

  &::before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    content: "";
    /* background-color: rgba(94, 190, 215, 0.7); */
    /* opacity: 0.5; */
    z-index: 0;
    background-color: rgba(0, 0, 0, 0.2);
  }
`;
const IconsSection = styled.div`
  margin: 10rem 0;
  padding: 0 10%;

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(50rem, 1fr));
    grid-gap: 2rem;
    li {
      display: flex;
      align-items: center;
      flex-direction: column;
      h3 {
        font-size: 3.2rem;
        font-weight: 300;
      }
      svg {
        width: 17rem;
        height: 17rem;
      }
    }
  }
  /* background: ${(props) => props.theme.darkgrey1}; */
`;
