import React from "react";
import styled from "styled-components";
import icons from "../../utils/icons";
import { respondTo } from "../../utils/respondTo";

import Prices from "./prices";

const ServicesStyled = styled.div`
  grid-column: full-start / full-end;
  h1 {
    text-align: center;
  }
  .hero {
    display: flex;
    ${respondTo.mobileSmall` 
      flex-direction:column;
    `}
  }

  .left-hero {
    padding: 10rem 15rem;

    background: #fafafa;
    width: 50%;

    ${respondTo.laptop`
         padding: 3rem 10rem;
         
     `}

    ${respondTo.tablet`
        padding: 3rem 5rem;
     `}
     ${respondTo.mobileSmall` 
      width: 100%;
    `}
    h2 {
      padding-bottom: 2rem;
      font-size: 3.4rem;
      text-align: center;

      /* color: ${(props) => props.theme.colorPrimary}; */
      font-weight: 500;
      ${respondTo.mobileSmall` 
      
        text-align:center;        
    `}
    }
    p {
      font-size: 2rem;
      ${respondTo.tablet`
      font-size: 1.6rem;
      `}
    }
    &__benefits-list {
      list-style: square;
      /* inside; */
      /* 
      li {
        &::marker {
          width: 2px;
          font-size: 0.2rem;
          height: 2px;
        }
      } */
      /* font-size: 10px; */
      /* list-style: none; */
      padding: 2rem;
    }
  }

  .right-hero {
    width: 50%;
    ${respondTo.mobileSmall` 
      width: 100%;
    `}
    /* height: calc(100vh -15rem); */
    position: relative;
    &__image-container {
      position: absolute;
      left: -5rem;
      top: 10rem;
      width: 80rem;
      height: 45rem;
      img {
        width: 100%;
        height: 100%;
      }

      ${respondTo.desktopSmall` 
        width: 70rem;
        height: 45rem;
    `}

      ${respondTo.laptop` 
        width: 60rem;
        height: 35rem;
    `}

    ${respondTo.laptopSmall` 
        width: 55rem;
        height: 30rem;
    `}
      ${respondTo.tablet`
         width: 45rem;
        height: 25rem;
        left: -2rem
     `}
     ${respondTo.tabletMini`
         width: 40rem;
        height: 20rem;
        left: -2rem
     `}
     ${respondTo.mobile`
         display:none;
     `}
    }

    &__list {
      margin-top: 65%;
      padding: 0 10rem;
      font-size: 2.2rem;
      ${respondTo.tablet`
       padding: 0 5rem;
     `}

      ${respondTo.mobile`
       margin-top: 20%;
       font-size: 1.8rem;
     `}

    ${respondTo.mobileSmall` 
        margin-top: 2rem;
        text-align:center;        
    `}

      h3 {
        font-size: 3rem;
        font-weight: 300;
      }

      ul {
        list-style: circle;
        padding-left: 2.2rem;
        ${respondTo.mobileSmall` 
        list-style: none;
        `}
        li {
        }
        span {
          color: ${(props) => props.theme.colorPrimary};
          font-weight: bold;
        }
      }
    }
  }

  .price-list {
    padding: 0 15%;

    ${respondTo.laptop` 
        padding: 0 10%;
    `}
    ${respondTo.tablet`
        padding: 0 5%;
    `}

    &__title {
      padding: 2rem 0;
      text-align: center;
      font-size: 5rem;
      font-weight: 300;
    }

    &__offers {
      display: flex;
      ${respondTo.tabletMini`
      flex-direction: column;
    `}
    }
    &__offer {
      width: 33%;
      padding: 5rem;
      text-align: center;
      border: 1px solid #ccc;
      transition: all 0.3s;

      ${respondTo.tabletMini`
        width: 100%;
        margin-bottom: 2rem;
        margin-right: 0;
    `}
      &:not(:last-of-type) {
        margin-right: 1rem;
      }

      &:nth-child(2) {
        border: 1px solid ${(props) => props.theme.colorPrimary};
      }

      .title {
        text-transform: uppercase;
        font-size: 2.5rem;
      }
      .price {
        color: ${(props) => props.theme.colorPrimary};
        font-size: 4rem;
      }

      .list {
        li {
          padding-bottom: 1.5rem;
          font-size: 1.8rem;
        }
      }

      button {
        padding: 2rem 2.5rem;
        border: 2px solid ${(props) => props.theme.colorPrimary};
        font-size: 2rem;
        background: none;
        border-radius: 35px;
        text-transform: uppercase;
        transition: all 0.3s;
        background: ${(props) => props.theme.colorPrimary};
        color: #fff;

        &:hover {
          transform: translateY(-2px);
        }
      }

      &:hover {
        background: #eee;
      }
    }
  }

  .cleaning-process {
    margin-top: 10rem;
    padding: 0 10%;

    &__title {
      text-align: center;
      padding-bottom: 5rem;
      font-size: 5rem;
      font-weight: 300;
      ${respondTo.mobilePortrait`
        padding-bottom: 2rem;
     `}
    }

    &__container {
      display: grid;
      grid-template-columns: 1fr 1fr;

      /* ${respondTo.laptop` 
         grid-template-columns: 35rem  minmax(15rem, 1fr);
         grid-gap: 5rem;
    `}
    ${respondTo.mobileSmallest` 
         grid-template-columns: 10rem  minmax(15rem, 1fr);
         grid-gap: 5rem;
    `}

      ${respondTo.mobilePortrait`
        flex-direction: column;
        grid-gap: 2rem;
     `} */
    }
    &__item {
      /* width: 50%; */
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(40rem, 1fr));
      margin-bottom: 5rem;
      grid-gap: 2rem;

      /* &-image {
        display: flex;
      } */
      &-title {
        font-size: 2.5rem;
        color: ${(props) => props.theme.colorPrimary};
        text-transform: uppercase;
        word-break: break-all;
      }
      &-number {
        font-size: 20rem;
        margin-right: 2rem;
        color: ${(props) => props.theme.colorPrimary};
        ${respondTo.mobilePortrait`
          font-size: 15rem;
          margin-right: 0;
        `}
      }

      img {
        width: 100%;
      }
    }
  }
`;

const Services = () => {
  return (
    <ServicesStyled>
      {/* <h1>Naše Storitve</h1> */}
      <div className="hero">
        <div className="left-hero">
          <h2>Zakaj izbrati Aladinko?</h2>
          <p>
            Praonica Aladinko d.o.o je profesionalno opremljena praonica tepiha
            u Mariboru, a po svojoj veličini i profesionalnom pristupu može
            udvoljiti svim vašim zahtjevima za:
            <ul className="left-hero__benefits-list">
              <li>
                Pranje i čišćenje tepiha koristeći najmodernije tehnologije
                pranja.
              </li>
              <li>Brezplačni prevzem ter dostava v roku 48ur.</li>
              <li>
                Najcenejši storitve v Mariboru, ker je celotni proces pranje
                avtomatiziran.
              </li>
              <li>Vrhunsko pranje tepiha sa dugom dlakom</li>
              <li>
                Pakiranje preproge v zaščitnu foliju. 100% suvi prijatnog
                mirisa.
              </li>
              <li>
                Zapleten postopek, ki je sestavljen iz 7 različnih korakov za
                zagotovitev najvišje kakovosti
              </li>
              <li>
                Z uporabo naših storitev lahko osvežite vaš dom, in preprečite
                nastenek bolezni, raznih alergij ter ostalih škodlivih učinkov
              </li>
            </ul>
          </p>
        </div>

        <div className="right-hero">
          <div className="right-hero__image-container">
            <img src="/man-cleaning.jpg" />
          </div>

          <div className="right-hero__list">
            <h3>V čem je vaša korist?</h3>

            <ul>
              <li>
                Naredite <span>trajen</span> prvi vtis
              </li>
              <li>
                <span> Izboljšajte </span> kakovost zraka v zaprtih prostorih
              </li>
              {/* <li>
                <span>Reduce</span> staff sick time
              </li> */}
              <li>
                <span> Prihranite </span> denar
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="price-list">
        <h2 className="price-list__title">Cenik</h2>
        <Prices />
        {/* 
        <div className="price-list__offers">
          <div className="price-list__offer">
            <h3 className="title">Osnovno</h3>
            <h2 className="price">4 € m2</h2>
            <ul className="list">
              <li>Tanke preproge</li>
              <li>Tresenje preproge</li>
              <li>Kemično pranje</li>
              <li>Centrifuga z čista voda</li>
              <li>Usisuvanje</li>
              <li>Zapakiranje v specijalni najlon</li>
            </ul>
            <button>Preberi več</button>
          </div>
          <div className="price-list__offer">
            <h3 className="title">Osnovno</h3>
            <h2 className="price">4 € m2</h2>
            <ul className="list">
              <li>Tanke preproge</li>
              <li>Tresenje preproge</li>
              <li>Kemično pranje</li>
              <li>Centrifuga z čista voda</li>
              <li>Usisuvanje</li>
              <li>Zapakiranje v specijalni najlon</li>
            </ul>
            <button>Preberi več</button>
          </div>
          <div className="price-list__offer">
            <h3 className="title">Osnovno</h3>
            <h2 className="price">4 € m2</h2>
            <ul className="list">
              <li>Tanke preproge</li>
              <li>Tresenje preproge</li>
              <li>Kemično pranje</li>
              <li>Centrifuga z čista voda</li>
              <li>Usisuvanje</li>
              <li>Zapakiranje v specijalni najlon</li>
            </ul>
            <button>Preberi več</button>
          </div>
        </div> */}
      </div>

      <section className="cleaning-process">
        <h2 className="cleaning-process__title">
          Kako poteka naš pralni process
        </h2>
        <div className="cleaning-process__item">
          <img src="/second-step.gif" />

          <div>
            <h4 className="cleaning-process__item-title">
              1. Slikanje tepiha ( sa oštećenjima i izlivenim bojama )
            </h4>
            <p>
              Pre bilo koje radnje, tepisi sa oštećenjima se slikaju i
              arhiviraju u bazu klijenata. Pre bilo koje radnje, tepisi sa
              oštećenjima se slikaju i arhiviraju u bazu klijenata.
            </p>
          </div>
        </div>
        <div className="cleaning-process__item">
          <img src="/second-step.gif" />

          <div>
            <h4 className="cleaning-process__item-title">
              2. Merenje Dimenzija (m<sup>2</sup>)
            </h4>
            <p>
              Pre bilo koje radnje, tepisi sa oštećenjima se slikaju i
              arhiviraju u bazu klijenata. Pre bilo koje radnje, tepisi sa
              oštećenjima se slikaju i arhiviraju u bazu klijenata.
            </p>
          </div>
        </div>
        <div className="cleaning-process__item">
          <img src="/second-step.gif" />

          <div>
            <h4 className="cleaning-process__item-title">
              3. Tresenje preprog v posebnem stroju, ki odstrani 80%
              prahu/umazanje.
            </h4>
            <p>
              Pre bilo koje radnje, tepisi sa oštećenjima se slikaju i
              arhiviraju u bazu klijenata. Pre bilo koje radnje, tepisi sa
              oštećenjima se slikaju i arhiviraju u bazu klijenata.
            </p>
          </div>
        </div>
        <div className="cleaning-process__item">
          <img src="/second-step.gif" />

          <div>
            <h4 className="cleaning-process__item-title">
              4. Pranje preprog v avtomatskem pralnem stroju za preproge.
            </h4>
            <p>
              Pre bilo koje radnje, tepisi sa oštećenjima se slikaju i
              arhiviraju u bazu klijenata. Pre bilo koje radnje, tepisi sa
              oštećenjima se slikaju i arhiviraju u bazu klijenata.
            </p>
          </div>
        </div>
        <div className="cleaning-process__item">
          <img src="/second-step.gif" />

          <div>
            <h4 className="cleaning-process__item-title">
              5. Ožemanje preprog v centrifuge.
            </h4>
            <p>
              Pre bilo koje radnje, tepisi sa oštećenjima se slikaju i
              arhiviraju u bazu klijenata. Pre bilo koje radnje, tepisi sa
              oštećenjima se slikaju i arhiviraju u bazu klijenata.
            </p>
          </div>
        </div>
        <div className="cleaning-process__item">
          <img src="/second-step.gif" />

          <div>
            <h4 className="cleaning-process__item-title">
              6. Sušenje u komorama
            </h4>
            <p>
              Pre bilo koje radnje, tepisi sa oštećenjima se slikaju i
              arhiviraju u bazu klijenata. Pre bilo koje radnje, tepisi sa
              oštećenjima se slikaju i arhiviraju u bazu klijenata.
            </p>
          </div>
        </div>
        <div className="cleaning-process__item">
          <img src="/second-step.gif" />

          <div>
            <h4 className="cleaning-process__item-title">
              7. Končno krtačenje, sesanje in pakiranje preprog.
            </h4>
            <p>
              Pre bilo koje radnje, tepisi sa oštećenjima se slikaju i
              arhiviraju u bazu klijenata. Pre bilo koje radnje, tepisi sa
              oštećenjima se slikaju i arhiviraju u bazu klijenata.
            </p>
          </div>
        </div>
      </section>
    </ServicesStyled>
  );
};

export default Services;
