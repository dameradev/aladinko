import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";

import Discount from "../assets/images/discount.svg";
import SEO from "../components/SEO";
import Services from "../components/Services";
import Slideshow from "../components/Slideshow";

import logo from "../assets/images/logo.svg";
import { HomeStyled, HeroStyled } from "../styles/HomePage";

import scrollToElement from "../utils/scrollToElement";
import { Link } from 'gatsby';

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
      let js;
      const fjs = d.getElementsByTagName(s)[0];
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
      <SEO title="Aladinko" image={logo} />
      <HomeStyled>
        <div id="fb-root" />

        <HeroStyled>
          <Slideshow className="slideshow" />
          <div className='wrapper '>
            {/* <p className='desc'>Pralnica Aladinko ponuja</p> */}
            <h1>Profesionalna storitev pranje preprog</h1>
            <p>
            Z uporabo naših storitev dobite osvežitev v svojih domovih, lahko preprečite pojav nekaterih alergij in zmanjšate prisotnost škodljivih bakterij, virusov v vaših domovih.
            </p>
            <div className='btn-container'>
              <a className='btn' href="tel:+38664163381">POKLIČITE</a>
              <a className='btn btn-primary' href="tel:+38664163381">PONUDBE</a>
            </div>
          </div>
        </HeroStyled>

        <section className="main-desc">
          <p>
            Pralnica Aladinko ponuja profesionalno storitev pranja preprog v
            Ljubljane, Maribora in Celja, ter s svojim pristopom zagotovlja
            vrhunsko pranje vaših preprog.
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
              />
            </div>
          )}
        </section>
      </HomeStyled>
    </>
  );
};

export default HomePage;
