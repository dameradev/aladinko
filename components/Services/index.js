import React from "react";
import styled from "styled-components";

const ServicesStyled = styled.div`
  grid-column: full-start / full-end;
  h1 {
    text-align: center;
  }
  .hero {
    display: flex;
  }

  .left-hero {
    padding: 10rem 15rem;
    background: #fafafa;
    width: 50%;
    height: calc(100vh -15rem);
    h2 {
      padding-bottom: 2rem;
      font-size: 3rem;
      color: ${(props) => props.theme.colorPrimary};
    }
    p {
      font-size: 1.8rem;
    }
    ul {
      list-style: square;
    }
  }

  .right-hero {
    width: 50%;
    height: calc(100vh -15rem);
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
    }

    &__list {
      margin-top: calc(100vh - 30rem);
      padding: 0 10rem;

      h3 {
        font-size: 2.5rem;
      }

      ul {
        list-style: circle;
        padding-left: 2.2rem;
        li {
          font-size: 2.2rem;
        }
        span {
          color: ${(props) => props.theme.colorPrimary};
          font-weight: bold;
        }
      }
    }
  }

  .price-list {
    padding: 0 20%;

    &__title {
      padding: 2rem 0;
      text-align: center;
      font-size: 5rem;
      font-weight: 300;
    }

    &__offers {
      display: flex;
    }
    &__offer {
      width: 33%;
      padding: 5rem;
      text-align: center;
      border: 1px solid #ccc;
      transition: all 0.3s;

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
            Your website needs to answer all these questions for customers to
            start thinking about using you. Most people don’t have their carpets
            cleaned often, so even if they knew the answers before, they might
            not remember now. Your customers ask a lot more than just these, so
            keep building this section with the new questions. Now let’s get
            down to brass tacks: pricing.
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
    </ServicesStyled>
  );
};

export default Services;
