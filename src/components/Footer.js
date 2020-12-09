import React from "react";
import styled from "styled-components";
import icons from "../utils/icons";
// import Link from "next/link";

import respondTo from "../utils/respondTo";

// import GoogleMapReact from "google-map-react";

import Image from "./Image";

// import Icons from "../../utils/icons";
import Logo from "./Logo";

const FooterStyled = styled.footer`
  margin-top: 5rem;
  background: var(--primary);
  background-color: #2b2b2b;
  color: #fff;
  width: 100%;
  /* height: 100px; */
  /* min-height: 400px; */
  /* height: fit-content; */
  /* grid-column: full-start/ full-end; */
  display: flex;
  padding: 2rem 5%;
  font-size: 3rem;
  flex-direction: column;

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
    /* height: 300px; */
    /* height: 80rem; */
    .gatsby-image-wrapper {
      max-height: 60rem;
      width: 100%;
      
    }
  }
  .map-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 2rem;
    h3 {
      color:var(--primary);
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
    font-size: 2rem;
    /* ${respondTo.tabletMini`
       
       font-size: 2rem;
    `} */
  }

  .right-info {
    padding: 2rem;
    display: flex;
    /* flex-direction: column; */
    align-items: flex-end;
    /* flex-flow: end; */
    justify-content: space-between;
    /* width: fit-content; */

    ${respondTo.tabletMini`
      flex-direction: row;
      // padding: 12rem 0 0 0;
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
        font-size: 2rem;

        &:not(:last-of-type) {
          padding-right: 2rem;
        }
      }
    }
  }

  /* align-self:flex */
`;

const location = {
  // center: {
  //   lat: 59.95,
  //   lng: 30.33,
  // },
  center: { lat: 46.48132, lng: 15.7421 },
  zoom: 12,
};

const onAddressClick = (address) => {
  window.open("//" + "google.com/search?q=" + address, "_blank");
};

const scrollToElement = (id) => {
  const element = document.getElementById(id);
  window.scrollTo({
    top: element.getBoundingClientRect().top + window.scrollY - 100,
  });
};
const Marker = ({ text, className }) => <div className={className}>{text}</div>;

const Footer = () => {
  return (
    <FooterStyled>
      {/* <h1>Footer placeholder</h1> */}
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
        {/* {window?.innerWidth > 849 && <Logo className="logo-desktop" />} */}
        <ul>
          <li>
            {/* <Link href="/storitve#prices"> */}
            <a onClick={() => scrollToElement("price-list")}>Cenik</a>
            {/* </Link> */}
          </li>
          <li>
            {/* <Link href="/storitve"> */}
            <a onClick={() => scrollToElement("cleaning-process")}>Storitve</a>
            {/* </Link> */}
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