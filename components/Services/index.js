import React from "react";
import styled from "styled-components";
import { respondTo } from "../../utils/respondTo";
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
      font-size: 3rem;
      /* color: ${(props) => props.theme.colorPrimary}; */
      font-weight: 300;
      ${respondTo.mobileSmall` 
      
        text-align:center;        
    `}
    }
    p {
      font-size: 1.8rem;
      ${respondTo.tablet`
      font-size: 1.6rem;
      `}
    }
    ul {
      list-style: square;
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
      margin-top: 80%;
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
      grid-template-columns: repeat(2, minmax(15rem, 1fr));

      ${respondTo.laptop` 
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
     `}
    
    
    }
    &__item {
      display: flex;
      align-items: center;
      &-title {
        font-size: 3rem;
        color: ${(props) => props.theme.colorPrimary};
        text-transform: uppercase;
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

      &:nth-child(1) {
        grid-column: 2 / 3;
        ${respondTo.tablet`
        grid-column: 1 / 3;
     `}
      }
      &:nth-child(2) {
        grid-column: 2 / 1;
        flex-direction: row-reverse;
        .cleaning-process__item-number {
          /* font-size: 15rem; */
          margin-right: 0;
          margin-left: 2rem;
        }

        ${respondTo.laptop`
            grid-column: 1 / 3;
            margin-right: 35rem;
        `}
        ${respondTo.tablet`
            margin-right: 0;            
        `}
        ${respondTo.mobilePortrait`
        flex-direction: column;
     `}
      }
      &:nth-child(3) {
        grid-column: 3 / 2;
        grid-row: 3 / 4;
        ${respondTo.tablet`
            grid-column: 1 / 3;
        `}
      }
      ${respondTo.mobilePortrait`
        flex-direction: column;
     `}
      
      img {
        width: 100%;
      }
      /* width: 50%; */
    }
  }
`;

const Services = () => {
  return (
    <ServicesStyled>
      {/* <h1>Naše Storitve</h1> */}
      <div className="hero">
        <div className="left-hero">
          <h2>Zakaj izbrati Aladin?</h2>
          <p>
            Everyone knows about cleaning carpets, right? Well yes and no. We
            know it takes time. We know that the carpets need to dry and you
            need to keep furniture off them. But what more is there? A lot more.
            When I’ve had my carpets cleaned I’ve wanted to know: How long will
            it take to clean all the carpets?
            <ul>
              <li>
                How long will it take for the carpets to dry (summer versus
                winter)?
              </li>
              <li>
                What do you use to clean the carpets, do you use natural
                cleaners that are safe for kids and pets?
              </li>
              <li>
                Do you remove stains? Do you need a water hook up outside?
                Simple things, you know off the top of your head.
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
                Make a <span>lasting</span> first impression
              </li>
              <li>
                <span>Improve</span> indoor air quality and increase
                productivity
              </li>
              <li>
                <span>Reduce</span> staff sick time
              </li>
              <li>
                <span>Save</span> money
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="price-list">
        <h2 className="price-list__title">Cenik</h2>

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
        </div>
      </div>

      <div className="cleaning-process">
        <h2 className="cleaning-process__title">
          Kako poteka naš pralni process
        </h2>
        <div className="cleaning-process__container">
          <div className="cleaning-process__item">
            <h2 className="cleaning-process__item-number">1</h2>
            <div>
              <img src="/second-step.gif" />
              <h4 className="cleaning-process__item-title">Tresenje</h4>
              <p>
                Najpomemnješi korak, trenutno smo edini ki čistijo preproge na
                ta način da najprej tresejo preprog, 90% od umazanija je..
                trenutno smo edini ki čistijo preproge na ta način da najprej
                tresejo preprog, 90% od umazanija je.. trenutno smo edini ki
                čistijo preproge na ta način da najprej tresejo preprog, 90% od
                umazanija je..trenutno smo edini ki čistijo preproge na ta način
                da najprej tresejo preprog, 90% od umazanija je..trenutno smo
                edini ki čistijo preproge na ta način da najprej tresejo
                preprog, 90% od umazanija je..
              </p>
            </div>
          </div>
          <div className="cleaning-process__item">
            <h2 className="cleaning-process__item-number">2</h2>
            <div>
              <img src="/second-step.gif" />
              <h4 className="cleaning-process__item-title">Kemično pranje</h4>
              <p>
                Najpomemnješi korak, trenutno smo edini ki čistijo preproge na
                ta način da najprej tresejo preprog, 90% od umazanija je..
                trenutno smo edini ki čistijo preproge na ta način da najprej
                tresejo preprog, 90% od umazanija je.. trenutno smo edini ki
                čistijo preproge na ta način da najprej tresejo preprog, 90% od
                umazanija je..trenutno smo edini ki čistijo preproge na ta način
                da najprej tresejo preprog, 90% od umazanija je..trenutno smo
                edini ki čistijo preproge na ta način da najprej tresejo
                preprog, 90% od umazanija je..
              </p>
            </div>
          </div>
          <div className="cleaning-process__item">
            <h2 className="cleaning-process__item-number">3</h2>
            <div>
              <img src="/second-step.gif" />
              <h4 className="cleaning-process__item-title">Usisivanje</h4>
              <p>
                Najpomemnješi korak, trenutno smo edini ki čistijo preproge na
                ta način da najprej tresejo preprog, 90% od umazanija je..
                trenutno smo edini ki čistijo preproge na ta način da najprej
                tresejo preprog, 90% od umazanija je.. trenutno smo edini ki
                čistijo preproge na ta način da najprej tresejo preprog, 90% od
                umazanija je..trenutno smo edini ki čistijo preproge na ta način
                da najprej tresejo preprog, 90% od umazanija je..trenutno smo
                edini ki čistijo preproge na ta način da najprej tresejo
                preprog, 90% od umazanija je..
              </p>
            </div>
          </div>
        </div>
      </div>
    </ServicesStyled>
  );
};

export default Services;
