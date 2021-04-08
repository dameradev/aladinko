import React from 'react';
import styled from 'styled-components';

import Image from '../Image';

import respondTo from '../../utils/respondTo';

import Prices from './prices';

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
      font-size: 1.8rem;
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
    &__image-container {
      ${respondTo.tabletMini`
        // display: none;
      `}
    }
    &__list {
      padding: 2rem;
      display: none;
      ${respondTo.laptop` 
          display: block;
      `}
      ${respondTo.tabletMini` 
          display:none;
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

  .germs {
    margin: 5rem 0;
    padding: 0 5%;
    display: flex;
    justify-content: space-between;
    width: 100%;

    .gatsby-image-wrapper {
      min-width: 60rem;
      max-height: 40rem;
      margin-right: 5rem;
    }

    ${respondTo.tablet`
      flex-direction: column;

      .services-desc {
        margin-top: 5rem;
      }

      .gatsby-image-wrapper {

        min-width: unset;
        width: 100%;
      }

    `}
  }

  .services-desc {
    /* padding: 2rem; */
    p {
      &:first-of-type {
        margin-top: 0;
      }
    }
  }

  .price-list {
    padding: 0 5%;

    /* ${respondTo.laptop` 
        padding: 0 5%;
    `}
    ${respondTo.tablet`
        padding: 0 5%;
    `} */

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
        font-size: 1.8rem;
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
    padding: 0 5%;
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
        font-size: 1.8rem;
        line-height: 3.2rem;
        color: var(--primary);
        text-transform: uppercase;
        word-break: break-word;

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
    font-size: 2.4rem;
    font-weight: 500;
    color: var(--red);
  }
`;

const Services = () => (
  <ServicesStyled id="services">
    {/* <h1>Naše Storitve</h1> */}
    <div className="hero">
      <div className="left-hero">
        <h2>Zakaj izbrati Aladinko?</h2>
        {/* <p> */}
        {/* Čistilnica Aladinko d.o.o je profesionalno za pranje preproge v
          Mariboru, po svoji velikosti in profesionalnem pristop pa lahko
          izpolnjujejo vse vaše zahteve za: */}
        <p>
          Ste med tistimi, ki si svojega toplega doma ne predstavljajo brez
          velike lepe preproge? Ali veste, da je praktično nemogoče ustvariti to
          toplo vzdušje v domu brez teh čudovitih tal.
        </p>
        <p>
          Strinjate se, da otroška soba ni otroška, ​​če ni preproge, po kateri
          bi otrok lahko razpršil svoje igrače in brezskrbno užival v svoji
          igri.
        </p>
        <p>
          Vendar je treba spomniti, da preproga, kljub vsem prednostim, ima
          nekaj pomanjkljivosti
        </p>
        <p>
          Ali veste, kakšno je povprečno število bakterij v hišni preprogi na
          površini 10x10 cm
        </p>
        <p>
          Na majhni površini, kot je ta, je 300000 bakterij, kar je približno
          1000-krat več kot na straniščni školjki.
        </p>
        <p>
          Kako potem lahko brezskrbno pustite otroka, da se plazi preprogi? Zelo
          enostavno - <b>ker imamo rešitev.</b>
        </p>
        {/* <ul className="left-hero__benefits-list"> */}
        {/* <li>
              Pranje in čiščenje preprog z uporabo najsodobnejših tehnologij
              pranje.
            </li>
            {/* <li>Brezplačni prevzem ter dostava v roku 48ur.</li> */}
        {/* <li>
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
            </li> */}
        {/* </ul> */}
        {/* </p> */}
      </div>

      <div className="right-hero">
        <div className="right-hero__image-container">
          <Image src="washing.png" alt="Stroj za pranje preproge" />
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
        <Image src="delivery.png" alt="Prevzem in dostavo preproge" />

        <div>
          <h3 className="cleaning-process__item-title">
            1. Prevzem in vrednotenje
          </h3>
          <p>
            Za vsa naročila nad 20€ na območju Maribor in Ljubljana, pridemo mi
            iskat. Po prejemu preproge osebje pralnice oceni stopnjo umazanosti
            in določi način obdelave tkanine.
          </p>
        </div>
      </div>
      <div className="cleaning-process__item">
        <Image src="carpet-photo.png" alt="Slikanje preproge s poškodami" />
        <div>
          <h3 className="cleaning-process__item-title">
            2. Fotografiranje preprog (s poškodovano in razlito barvo)
          </h3>
          <p>
            Pred kakršnim koli dejanjem se preproge s poškodbami fotografirajo
            in arhivirajo v odjemalski bazi podatkov.
          </p>
        </div>
      </div>
      {/* <div className="cleaning-process__item">
          <img src="https://res.cloudinary.com/dvvbls283/image/upload/v1600947575/t6kc9ygwts6zesleiojh.jpg" />

          <div>
            <h3 className="cleaning-process__item-title">
              2. Merenje Dimenzija (m<sup>2</sup>)
            </h3>
            <p>
              Pre bilo koje radnje, tepisi sa oštećenjima se slikaju i
              arhiviraju u bazu klijenata. Pre bilo koje radnje, tepisi sa
              oštećenjima se slikaju i arhiviraju u bazu klijenata.
            </p>
          </div>
        </div> */}
      <div className="cleaning-process__item">
        <Image src="dusting.png" alt="Tresenje preproge v posebnem stroju" />

        <div>
          <h3 className="cleaning-process__item-title">
            3. Stresanje prahu s preprog, v stroj ki odstrani 80%
            prahu/umazanje.
          </h3>
          <p>
            Preproge najprej gredo skozi stroj, ki jih na obeh straneh globoko
            pretrese, gre za odstranjevanje prahu ali stresalnik prahu. S to
            metodo odstranimo prah in umazanijo, ki se je prikradla v najgloblje
            plasti preproge.To je pravzaprav najbolj pomembno pri pranju.
            Preproga se brez tega postopka ni mogoče pravilno oprati.
          </p>
        </div>
      </div>
      <div className="cleaning-process__item">
        <Image src="washing.png" alt="Profesionalen stroj za pranje preproge" />

        <div>
          <h3 className="cleaning-process__item-title">
            4. Pranje preprog v avtomatskem pralnem stroju za preproge.
          </h3>
          <p>
            Pred pranjem so preproge popolnoma namočene v vodi, obdelane odvisno
            od vrste in debeline preproge z različnimi ščetkami in kemikalijami.
            Nato pod visokim pritiskom vode odstranimo vso umazanijo in
            kemikalije, ki so bile na preprogi. Če je preproga izredno umazana,
            postopek ponovimo večkrat.
          </p>
        </div>
      </div>
      <div className="cleaning-process__item">
        <Image src="centrifuge.png" alt="Ožemanje preproge v centrifugi" />

        <div>
          <h3 className="cleaning-process__item-title">
            5. Ožemanje in ispiranje v centrifuge.
          </h3>
          <p>
            Po pranju preprogo damo v centrifugo za ožemanje . To je poseben
            stroj, ki omogoča preproga samo po 2 min. Da se 95% posuši. Ta
            obdelava je zelo pomembna za volnene, perziske, svilene in vse
            občutljive preproge, ki zaradi razlitja barv so tvegane za njihovo
            nego. Med delovenjem tega stroja se doda tudi čista voda in preproga
            se popolnoma spere do roba (načeloma delovanja pralnega stroja)
          </p>
        </div>
      </div>
      <div className="cleaning-process__item">
        <Image src="drying.png" alt="Sušenje preprog v komorah" />

        <div>
          <h3 className="cleaning-process__item-title">6. Sušenje v komore</h3>
          <p>
            Po centrifugiranju preproge shranimo v posebne sušilne komore, ki so
            opremljene s sistemi za prhanje in odstranevanje vlage.
          </p>
        </div>
      </div>
      <div className="cleaning-process__item">
        <Image
          src="vacuming.png"
          alt="Sesanje, krtačenje in pakiranje preproge"
        />

        <div>
          <h3 className="cleaning-process__item-title">
            7. Končno krtačenje, sesanje, pakiranje in dostava preprog.
          </h3>
          <p>
            Preproge iz komore so suhe, čiste in gredo na zadnjo obdelavo, kjer
            končni stroj jih končno posrka in razčeše. Nato se pakirajo v
            transportne vrečke, ki vam omogočajo varno in higijenska dostavo na
            vaš naslov.
          </p>
        </div>
      </div>
      <p className="warning-message">
        Opomnik: Za brezplačni prevzem/dostavo je potrebno naročilo od minimum
        20€ v občini Maribor in Ljubljana.
      </p>
    </section>

    <div className="germs">
      <Image src="germs.jpg" alt="Umazanije na preproge" />
      <div className="services-desc">
        <p>
          Naša storitev preprog ALADINKO ponuja storitev profisionalnega
          čiščenja in antibakterijskega pranja preprog.
        </p>
        <p>
          Ne glede na to, koliko skrbite za higijeno v svojem domu, ne glede na
          to, kako pogosto pretresete in posesate preprogo in nikomur ne
          dovolite , da na njo stopi v čevljih, bakterije se še vedno bodo
          tvorile in ujele.
        </p>
        {/* <p>
          Zato je zelo pomembno, ne samo zaradi estetike, ampak tudi zaradi
          svojega zdravlja, redno vzdrževati svoje preproge v profesionalnem
          servisu preprog kakršen je naš.
        </p> */}
        <p>
          Antibakterijskega pranja preprog, ki ga izvajamo, ni treba pogosto
          opravljati, pomembno pa je , da je dovolj reden in vašezdravlje ne bo
          ogroženo.
        </p>
        <p>
          Upoštevajte , da imamo posebne čistilne stroje, pa tudi to, da imamo
          profesionalne antibakterijske detergente, ki so posebej zasnovani za
          uničevanje bakterij, ki so skrite globoko v vaši preprogi.
        </p>
        {/* <p>
          S kombinacijo strojev, posebnih ščetk in teh sredstev nam uspe
          očistiti preprogo tudi najmanjših in najbolj skritih organizmov, ki
          lahko resno škodijo vašemu zdravlju.
        </p> */}
        <p>
          Izkoristite vse prednosti, ki jih preproge prinašajo domu, kot so
          toplo vzdušje, lep dizajn in idealna podlaga za igro otrok.
          Pomanjklivosti, kot je težka higijena, pa prepustite nam.
        </p>
      </div>
    </div>
  </ServicesStyled>
);

export default Services;
