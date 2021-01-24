import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Logo from "./Logo";
import respondTo from "../utils/respondTo";
import scrollToElement from "../utils/scrollToElement";

import Nav from "./Navigation/nav";
import icons from "../utils/icons";

// const NavStyles = styled.nav`
//   /* margin-bottom: 3rem; */
//   background: var(--primary);;
//   position: fixed;
//   z-index: 100;

//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   width: 100%;
//   padding: 0 5%;
//   ul {
//     display: flex;
//     list-style: none;
//     text-transform: uppercase;
//   }
//   li {
//     &:not(:last-of-type) {
//       margin-right: 2rem;
//     }
//   }
//   a {
//     color: var(--white);
//   }
// `;

export const HeaderStyled = styled.header`
  height: 8rem;
  padding: 0 10%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  width: 100%;
  z-index: 200;

  /* color: #fff; */
  /* justify-content: space-between; */
  /* border-bottom: 1px solid ${(props) => props.theme.lightgrey1}; */

  .scroll .nav ul li a {
    padding-bottom: 3rem;
  }

  .hamburger {
    z-index: 200;
    color: black;
    display: none;
    position: relative;

    ${respondTo.tabletMini`
      display: block;
      
    `}

    .close-icon,
    .menu-icon {
      /* width: 3rem;
      height: 3rem; */
      position: absolute;
      top: -2.5rem;
      right: 0;
      font-size: 1.8rem;

      transition: all 0.5s;
      svg {
        width: 4rem;
        height: 4rem;
        g {
          background: black;
        }
      }
    }

    .close-icon {
      opacity: 0;
      top: -1.5rem;
      svg {
        width: 3rem;
        height: 3rem;
      }
      /* display: none; */
    }

    /* .menu-icon {
      svg {
        height: 4rem;
        width: 5rem;
      }
    } */
  }

  .hamburger-open {
    .menu-icon {
      opacity: 0;
    }
    .close-icon {
      opacity: 1;
    }
  }
`;

export default function Header({ isOpenNav, toggleNav }) {
  return (
    <HeaderStyled>
      <Logo />
      <Nav className="nav__desktop" />
      <div
        className={`hamburger ${isOpenNav && "hamburger-open"}`}
        onClick={() => toggleNav(isOpenNav)}
      >
        <div className="menu-icon">{icons.Hamburger} </div>
        <div className="close-icon">{icons.closeHamburger}</div>
      </div>
    </HeaderStyled>
  );
}
