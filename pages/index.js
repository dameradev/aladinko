// import Head from 'next/head'

import styled from "styled-components";
import { Button } from "@material-ui/core";
import icons from "../utils/icons";
import { HeroStyled } from "../components/styles/index";

import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import ReactPlayer from "react-player";
import FacebookPlayer from "react-facebook-player";
import { FacebookProvider, Like, EmbeddedPost } from "react-facebook";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const HomeStyled = styled.main`
  /* color: blue; */
  grid-column: full-start / full-end;

  .fb-video {
    height: 10rem;
    width: 10rem;
  }
`;

const images = [
  { url: "baby-dog.jpg" },
  { url: "quote.jpg" },
  // { url: "man-cleaining.jpg" },
];

export default function Home() {
  return (
    <HomeStyled>
      <div id="fb-root"></div>
      <script
        async
        defer
        crossorigin="anonymous"
        src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v8.0&appId=207395400191664&autoLogAppEvents=1"
        nonce="YBpv6AFg"
      ></script>
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
          play={false}
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

      <div>
        <FacebookProvider appId="207395400191664">
          <EmbeddedPost
            href="https://www.facebook.com/aladinkopreproge/posts/107898137737158"
            width="500"
          />
        </FacebookProvider>
      </div>
      <div>
        {/* <ReactPlayer
          className="facebook"
          url="https://www.facebook.com/aladinkopreproge/posts/107898137737158"
          // url=""
          controls
          playing
        /> */}
        <div
          class="fb-video"
          data-href="https://www.facebook.com/aladinkopreproge/posts/107898137737158"
          data-show-text="true"
          data-width=""
        ></div>
      </div>

      {/* <IconsSection>
        <ul>
          <li>
            <h3>Dostava/Prevzem</h3>
            <i>{icons.Truck}</i>
          </li>
          <li>
            <h3>Kakovostna Storitev</h3>
            <i>{icons.Quality}</i>
          </li>
          <li>
            <h3>Konec za 1 dan</h3>
            <i>{icons.FastService}</i>
          </li>
          <li>
            <h3>Strojno Pranje</h3>
            <i>{icons.MachineWashing}</i>
          </li>
        </ul>
      </IconsSection> */}

      {/* <QuoteSection>
        <h1>"Dom je sreča. Čist dom pa je sreča na kvadrat"</h1>
        <p>
          This quote is our inspiration and that’s why we provide you carpet
          cleaning NYC services which are not only good for you but also
          increase hygiene and health of your space. Here, you will sense a
          flawless and spotless cleaning of your home. We pay personal attention
          to all small or large things that have great importance in your life.
          So, give us a chance and get a glorious home at flat prices.
        </p>
      </QuoteSection> */}
    </HomeStyled>
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
