import React, { useLayoutEffect, useState, useEffect } from "react";

import Link from "next/Link";
import {
  AppBar,
  Toolbar,
  IconButton,
  //   MenuIcon,
  Typography,
  Button,
} from "@material-ui/core";

import styled from "styled-components";
import icons from "../utils/icons";

import Nav from "./Nav";

const HeaderStyled = styled.header`
  /* padding: 1rem 0; */

  grid-column: full-start / full-end;

  /* color: #fff; */
  /* justify-content: space-between; */
  border-bottom: 1px solid ${(props) => props.theme.lightgrey1};

  .contact-section {
    padding: 0 10%;
    height: 3rem;

    display: flex;
    /* transform: ${(props) =>
      !props.windowScroll ? "translateY(0)" : "translateY(-3rem)"};   */
    justify-content: space-between;

    background: ${(props) => props.theme.colorPrimary};
    
    color: #fff;
    animation: all .2s;


    &__location {
      span {
        margin-right: 0.5rem;
        svg {
          transform: translateY(2px);
          width: 2rem;
          height: 2rem;
        }
      }
    }
  }



  .header-section {
    /* max-width: ${(props) => props.theme.maxWidth}; */
    background: rgba(245,245,245,1);
    /* color: white; */
    font-weight:600;
    font-size: 2rem;
    padding: 0 10%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 10rem;
    position: fixed;
    width: 100%;
    transform: ${(props) =>
      !props.windowScroll ? "translateY(0)" : "translateY(-3rem)"};  
    z-index:100;

    box-shadow: ${(props) => props.theme.bs};
    /* box-shadow:  inset 3px -40px 14px -31px rgba(58,58,58,1); */
    /* border-bottom: 2px solid ${(props) => props.theme.colorPrimary}; */

    .logo {
      
      grid-column: center-start / col-end 2;
      text-transform: uppercase;
      font-weight: 400;
      z-index:200;
      display: flex;
      align-items: center;
      svg {
        width: 10rem;
        height: 8rem;
      }
    }
    .nav {
      grid-column: col-start 7 / center-end;
      z-index:200;
      ul {
        display: flex;
        li {
          text-transform: uppercase;

          &:not(:last-of-type) {
            margin-right: 3.5rem;
          }
        }
      }
    }
  }
`;

const Header = () => {
  const [windowScroll, setWindowScroll] = useState(false);

  // componentDidMount() {

  // }

  const listenScrollEvent = () => {
    window.pageYOffset > 0 ? setWindowScroll(true) : setWindowScroll(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => listenScrollEvent());
    // return () => window.removeEventListener("scroll", listenScrollEvent());
  }, []);
  console.log(windowScroll);
  return (
    <HeaderStyled windowScroll={windowScroll}>
      <div className="contact-section">
        <p className="contact-section__location">
          <span>{icons.Location}</span>Kamniška 28, 2000 Maribor
        </p>
        <p>069 652 555</p>
      </div>
      <div className="header-section">
        <h1 className="logo">{icons.Logo}</h1>
        <Nav />
      </div>
    </HeaderStyled>
  );
};

export default Header;
