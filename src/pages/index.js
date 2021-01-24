import React from "react";
import ReactPlayer from "react-player";

import Discount from "../assets/images/discount.svg";
import SEO from "../components/SEO";
import Services from "../components/Services";
import Slideshow from "../components/Slideshow";

import { HomeStyled, HeroStyled } from "../styles/HomePage";

import scrollToElement from "../utils/scrollToElement";
import { useState } from "react";
import { useEffect } from "react";

const commentIds = [
  "124222499438055",
  "122917736235198",
  "122883026238669",
  "122871602906478",
  "122780256248946",
];

let commentIndex = 0;
const HomePage = () => {
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
    if (window.FB) window.FB.XFBML.parse();

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
    }, 6000);

    return () => clearInterval(interval);
  });

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
              <span>4€</span> po &#13217;
            </h2>
            <img
              className="discount-icon"
              src={Discount}
              alt="Akcija pranje preproge"
            />
            <p className="hero__promotion-price-notice">Velja do 01.03.2021</p>
          </div>
          <h2 className="opening-again">Pononvno odpiramo 01.02.2021</h2>
        </HeroStyled>

        <section className="main-desc">
          <p>
            Pralnica Aladinko ponuja profesionalno storitev pranja preprog v
            Mariboru in s svojim pristopom zagotovlja vrhunsko pranje vaših
            preprog.
          </p>
          <p>
            Z uporabo naših storitev dobite osvežitev v svojih domovih, lahko
            preprečite pojav nekaterih alergij in zmanjšate prisotnost
            škodljivih bakterij, virusov v vaših domovih.
          </p>
        </section>
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

          {/* <article>
            <h1></h1>
          </article> */}
          <div>
            <article className="video__description">
              <h2>Zagotovitev 100% kakovost</h2>
              <p>
                Kot je prikazano na video posnetku, vaše preproge opravijo šest
                različnih korakov, da zagotovijo popolnoma čiste preproge.
              </p>
              <br />
              <p>
                Uporabljamo profesionalno avtomatsko opremo za pranje preprog in
                ekološka čistila za preproge. Podrobnejši opis - vsak korak v
                našem procesu najdete
                {/* <Link href="/#cleaning-process"> */}
                <a
                  className="video__description-link"
                  onClick={() => scrollToElement("cleaning-process")}
                >
                  tukaj.
                </a>
                {/* </Link> */}
              </p>
            </article>
          </div>
        </section>
        <Services />

        <section className="testimonials">
          <h2 className="title">Komentare zadovolnjih strank</h2>

          {comment && (
            <div className="comment-container">
              <div
                className="fb-comment-embed"
                data-href={`https://www.facebook.com/aladinkopreproge/posts/122760006250971?comment_id=${comment}`}
                data-width="500"
              ></div>
            </div>
          )}
        </section>
      </HomeStyled>
    </>
  );
};

export default HomePage;
