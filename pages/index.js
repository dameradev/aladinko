// import Head from 'next/head'

import styled from "styled-components";
import { Button } from "@material-ui/core";
import icons from "../utils/icons";

const HomeStyled = styled.main`
  /* color: blue; */
  grid-column: full-start / full-end;
`;
const HeroStyled = styled.div`
  padding: 0 10%;
  height: 80vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .hero {
    &__button {
      margin-top: 2rem;
      font-size: 2.5rem;
      padding: 1.25rem 2rem;
    }

    &__right-panel {
      h1 {
        text-transform: uppercase;
        font-style: unset;
        font-size: 5rem;

        span {
          color: ${(props) => props.theme.colorPrimary};
          font-size: 10rem;
          display: inline-block;
          transform: translateY(1rem);
        }
      }
      margin-bottom: 5rem;
    }
  }
  h1 {
    color: ${(props) => props.theme.lightgrey1};
    line-height: 6.5rem;
    font-style: italic;
    font-weight: 500;
    font-size: 4.5rem;
  }
  h3 {
    color: #fff;
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
      background-color: rgba(0, 0, 0, 0.7);
    }

    &__content {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
`;

export default function Home() {
  return (
    <HomeStyled>
      <HeroStyled>
        <div className="bg-video">
          <video className="bg-video__content" autoPlay muted loop>
            <source src="/video3.mp4" type="video/mp4" />
            {/* <source src="img/video.webm" type="video/webm" /> */}
            Your browser is not supported!
          </video>
        </div>

        {/* We clean. A lot.
Clean Home.
Professional Service.
Fair Price. */}

        <div className="left-panel">
          {/* <h3>Mehanično pranje preprog</h3> */}
          <h1>Čiste preproge.</h1>
          <h1>Profesionalna storitev.</h1>
          <h1>Poštena cena.</h1>
          {/* <h3>Promotivni 2€ po &#13217;</h3> */}
          <Button className="hero__button" variant="contained" color="primary">
            Preberi več
          </Button>
        </div>

        <div className="hero__right-panel">
          <h1>
            PROMOTIVNI <span>2€</span> po &#13217;
          </h1>
        </div>
      </HeroStyled>
      <IconsSection>
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
      </IconsSection>

      <QuoteSection>
        <h1>"Dom je sreča. Čist dom pa je sreča na kvadrat"</h1>
        <p>
          This quote is our inspiration and that’s why we provide you carpet
          cleaning NYC services which are not only good for you but also
          increase hygiene and health of your space. Here, you will sense a
          flawless and spotless cleaning of your home. We pay personal attention
          to all small or large things that have great importance in your life.
          So, give us a chance and get a glorious home at flat prices.
        </p>
      </QuoteSection>
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

  background-image: url(${require("../public/quote.jpg")}) ;
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
