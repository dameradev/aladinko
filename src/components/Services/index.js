import React from "react";
import styled from "styled-components";

import Image from "../Image";

import respondTo from "../../utils/respondTo";

import Prices from "./prices";

const ServicesStyled = styled.div`
  grid-column: full-start / full-end;
  h1 {
    text-align: center;
  }
  .hero {
    display: flex;
    ${respondTo.tabletMini` 
      flex-direction:column;
    `}
  }

  .left-hero {
    padding: 5rem 5%;

    background: #fafafa;
    width: 50%;

    /* ${respondTo.laptop`
         padding: 3rem 10rem;
         
     `} */

    /* ${respondTo.tablet`
        padding: 3rem 5rem;
     `} */
    ${respondTo.tabletMini` 
      width: 100%;
    `}
    h2 {
      padding-bottom: 2rem;
      font-size: 3.4rem;
      text-align: center;

      /* color: var(--primary); */
      font-weight: 500;
      ${respondTo.tabletMini` 
      
        text-align:center;        
    `}
    }
    p {
      font-size: 2rem;
      ${respondTo.laptopSmall`
        font-size: 1.8rem;
      `}
      ${respondTo.tablet`
        font-size: 1.6rem;
      `}
    }
    &__benefits-list {
      list-style: square;
      padding: 2rem;
      li {
        &:not(:last-of-type) {
          margin-bottom: 1rem;
        }
      }
    }
  }

  .right-hero {
    width: 50%;
    ${respondTo.tabletMini` 
      width: 100%;
    `}
    &__list {
      padding: 2rem;
      display: none;
      ${respondTo.laptop` 
          display: block;
      `}
      ${respondTo.tabletMini` 
          text-align: center;
      `}
      ul {
        li {
          span {
            color: var(--primary);
            font-weight: bold;
          }
          &:not(:last-of-type) {
            margin-bottom: 1rem;
          }
        }
      }
    }
  }

  .price-list {
    padding: 0 10%;

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
        border: 1px solid var(--primary);
      }

      .title {
        text-transform: uppercase;
        font-size: 2.5rem;
      }
      .price {
        color: var(--primary);
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
        border: 2px solid var(--primary);
        font-size: 2rem;
        background: none;
        border-radius: 35px;
        text-transform: uppercase;
        transition: all 0.3s;
        background: var(--primary);
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
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 2rem;
    margin-top: 10rem;
    padding: 0 10%;
    ${respondTo.mobileSmall`
        grid-template-columns: 1fr;
        display: block;
     `}
    ${respondTo.mobilePortrait`
       margin-top: 3rem;
     `}

    &__title {
      grid-column: 1/3;
      text-align: center;
      padding-bottom: 5rem;

      font-size: 5rem;
      font-weight: 300;
      ${respondTo.mobilePortrait`
        padding-bottom: 2rem;
        font-size: 3rem;
     `}
    }

    &__container {
      display: grid;
      grid-template-columns: 1fr 1fr;

      /* justify-items: center; */

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
      grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
      margin-bottom: 5rem;
      grid-gap: 2rem;

      /* &-image {
        display: flex;
      } */
      &-title {
        font-size: 2rem;
        line-height: 3.2rem;
        color: var(--primary);
        text-transform: uppercase;
        word-break: break-all;

        ${respondTo.mobilePortrait`
          font-size: 1.8rem;
          // margin-right: 0;
        `}
      }
      &-number {
        font-size: 20rem;
        margin-right: 2rem;
        color: var(--primary);
        ${respondTo.mobilePortrait`
          font-size: 15rem;
          margin-right: 0;
        `}
      }

      img {
        width: 100%;
        height: 20rem;
      }
    }
  }

  .warning-message {
    grid-column: 1/3;
    font-style: italic;
    font-size: 2rem;
    font-weight: 500;
    color: var(--primary);
  }
`;

const Services = () => {
  return (
    <ServicesStyled id="services">
      {/* <h1>Naše Storitve</h1> */}
      <div className="hero">
        <div className="left-hero">
          <h2>Zakaj izbrati Aladinko?</h2>
          <p>
            Čistilnica Aladinko d.o.o je profesionalno za pranje preproge v
            Mariboru, po svoji velikosti in profesionalnem pristop pa lahko
            izpolnjujejo vse vaše zahteve za:
            <ul className="left-hero__benefits-list">
              <li>
                Pranje in čiščenje preprog z uporabo najsodobnejših tehnologij
                pranje.
              </li>
              {/* <li>Brezplačni prevzem ter dostava v roku 48ur.</li> */}
              <li>
                Najcenejši storitve v Mariboru, ker je celotni proces pranje
                avtomatiziran.
              </li>
              <li>Vrhunsko pranje preprog z dolgimi lasmi</li>
              <li>
                Pakiranje preproge v zaščitnu foliju. 100% suhi z prijeten vonj.
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
            <Image src="washing.png" />
            <div className="right-hero__list">
              <h3>V čem je vaša korist?</h3>

              <ul>
                <li>
                  Naredite <span>trajen</span> prvi vtis
                </li>
                <li>
                  <span> Izboljšajte </span> kakovost zraka v zaprtih prostorih
                </li>

                <li>
                  <span> Prihranite </span> denar
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div id="price-list" className="price-list">
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

      <section id="cleaning-process" className="cleaning-process">
        <h2 className="cleaning-process__title">
          Kako poteka naš pralni process
        </h2>

        <div className="cleaning-process__item">
          <Image src="delivery.png" />

          <div>
            <h4 className="cleaning-process__item-title">
              1. Prevzem in vrednotenje
            </h4>
            <p>
              Za vsa naročila nad 6m2 na območju maribor, pridemo mi iskat. Po
              prejemu preproge osebje pralnice oceni stopnjo umazanosti in
              določi način obdelave tkanine.
            </p>
          </div>
        </div>
        <div className="cleaning-process__item">
          <Image src="carpet-photo.png" />
          <div>
            <h4 className="cleaning-process__item-title">
              2. Slikanje tepiha ( sa oštećenjima i izlivenim bojama )
            </h4>
            <p>
              Pred kakršnim koli dejanjem se preproge s poškodbami fotografirajo
              in arhivirajo v odjemalski bazi podatkov.
            </p>
          </div>
        </div>
        {/* <div className="cleaning-process__item">
          <img src="https://res.cloudinary.com/dvvbls283/image/upload/v1600947575/t6kc9ygwts6zesleiojh.jpg" />

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
        </div> */}
        <div className="cleaning-process__item">
          <Image src="dusting.png" />

          <div>
            <h4 className="cleaning-process__item-title">
              3. Tresenje preprog v posebnem stroju, ki odstrani 80%
              prahu/umazanje.
            </h4>
            <p>
              Prvi korak pri globinskem čiščenju preprog je strojno
              odstranjevanje vsa groba umazanija, prah in las s suhe preproge za
              izboljšanje kakovosti pranja.
            </p>
          </div>
        </div>
        <div className="cleaning-process__item">
          <Image src="washing.png" />

          <div>
            <h4 className="cleaning-process__item-title">
              4. Pranje preprog v avtomatskem pralnem stroju za preproge.
            </h4>
            <p>
              Preproga je namočena v vodi za boljše razkrojevanje nečistoč in
              pripravo za pranje so madeži obdelani z ustreznimi sredstvi in
              ​​mehki se nanese s čopiči in krožnimi gibi detergent, ki prodre
              do votka preproge.
            </p>
          </div>
        </div>
        <div className="cleaning-process__item">
          <Image src="centrifuge.png" />

          <div>
            <h4 className="cleaning-process__item-title">
              5. Ožemanje preprog v centrifuge.
            </h4>
            <p>
              Izpiranje preprog je strogo nadzorovan postopek, ki spremlja
              čistočo voda, ki prihaja iz stroja. Ko je voda čista, se dotok
              ustavi in ​​začne se postopek centrifugiranja. Centrifuga preproge
              ne posuši odteče na zelo nizek odstotek vlažnosti, do 5%
              vlažnosti.
            </p>
          </div>
        </div>
        <div className="cleaning-process__item">
          <Image src="drying.png" />

          <div>
            <h4 className="cleaning-process__item-title">
              6. Sušenje u komorama
            </h4>
            <p>
              V sušilni komori preproge sušimo pri optimalni temperaturi z
              strojno razvlaževanje. Preproga se posuši v nekaj ure, hkrati pa
              preprog je zaščiten pred negativnimi zunanjimi in atmosferskimi
              vplivi vplivi, kot so sonce, veter, dež in prah.
            </p>
          </div>
        </div>
        <div className="cleaning-process__item">
          <Image src="vacuming.png" />

          <div>
            <h4 className="cleaning-process__item-title">
              7. Končno krtačenje, sesanje, pakiranje in dostava preprog.
            </h4>
            <p>
              Suha preproga je še enkrat posesana, kar odpravi kakršno koli
              ostanki prahu in umazanije. Oprane in posušene preproge so zavite
              folije, da ohranijo svojo čistost in svežino. Preprog je opran in
              pripravljen za dostavo ali prevzem.
            </p>
          </div>
        </div>
        <p className="warning-message">
          Opmonik: Za brezplačni prevzem/dostavo je potrebno naročilo od minimum
          6m<sup>2</sup> v občini Maribor in Starše. Izven Maribor je potreben
          predhoden dogovor.
        </p>
      </section>
    </ServicesStyled>
  );
};

export default Services;
