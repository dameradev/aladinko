import React from "react";
import styled from "styled-components";
import icons from "../utils/icons";

import respondTo from "../utils/respondTo";

import Image from "./Image";

import Logo from "./Logo";

const FooterStyled = styled.footer`
  padding: 2rem 5%;
  width: 100%;
  display: flex;
  flex-direction: column;

  background-color: #2b2b2b;
  color: #fff;
  font-size: 3rem;

  .logo-desktop {
    ${respondTo.tabletMini`
    display: none;
  `}
  }

  .logo-mobile {
    display: none;

    ${respondTo.tabletMini`
      display: block;
    `}
  }

  ${respondTo.tabletMini`
    
  `}

  .google-map {
    width: 100%;

    .gatsby-image-wrapper {
      max-height: 60rem;
      width: 100%;
    }
  }
  .map-header {
    padding-bottom: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h3 {
      color: var(--primary);
    }
  }
  .marker {
    svg {
      width: 2rem;
      height: 2rem;
    }
  }

  h3 {
    font-weight: 300;
    font-size: 1.8rem;
  }

  .right-info {
    padding: 2rem;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    ${respondTo.tabletMini`
      flex-direction: row;
      align-items: center;
    `}

    ${respondTo.mobile`
      flex-direction: column;  
    `}
    

    .contact {
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      ${respondTo.tabletMini`
        flex-direction: row;
        align-items:center;
      `}

      .phone {
        ${respondTo.tabletMini`
          margin-right: 2rem;
        `}
      }
    }

    i {
      background: white;
      width: 5rem;
      height: 5rem;
      svg {
        width: 5rem;
        height: 5rem;
      }
    }
    ul {
      display: flex;

      li {
        font-size: 1.8rem;

        &:not(:last-of-type) {
          padding-right: 2rem;
        }
      }
    }
  }
`;

const onAddressClick = (address) => {
  window.open("//" + "google.com/search?q=" + address, "_blank");
};

const scrollToElement = (id) => {
  const element = document.getElementById(id);
  window.scrollTo({
    top: element.getBoundingClientRect().top + window.scrollY - 100,
  });
};

const Footer = () => {
  return (
    <FooterStyled>
      <div
        className="google-map"
        onClick={() => onAddressClick("Loka 5, 2205 Starše")}
      >
        <div className="map-header">
          <h3>Loka 5, 2205 Starše</h3>
          <Logo className="logo-mobile" />
        </div>
        <Image src="google-map.png" />
      </div>
      <div className="right-info">
        <ul>
          <li>
            <a onClick={() => scrollToElement("price-list")}>Cenik</a>
          </li>
          <li>
            <a onClick={() => scrollToElement("cleaning-process")}>Storitve</a>
          </li>
        </ul>
        <div className="contact">
          <p className="phone">
            <a href="tel:+38664163381">064 16 33 81</a>
          </p>

          <i>
            <a
              href="https://www.facebook.com/aladinkopreproge"
              target="_blank"
              rel="noreferrer"
            >
              {icons.Facebook}
            </a>
          </i>
        </div>
      </div>
    </FooterStyled>
  );
};

export default Footer;
