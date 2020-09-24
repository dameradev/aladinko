import React, { useLayoutEffect, useState, useEffect } from "react";
import Link from "next/link";
import styled from "styled-components";

import { HeaderStyled } from "./styles";

import { IconButton } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
// import MenuIcon from "@material-ui/icons/Menu";

import icons from "../../utils/icons";

import Nav from "../Nav";

const Header = (props) => {
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

  return (
    <HeaderStyled windowScroll={windowScroll}>
      <div className="contact-section">
        <p className="contact-section__location">
          <span>{icons.Location}</span>Loka 5, 2205 Starše
        </p>
        {/* <p>069 652 555d</p> */}
      </div>
      <div className={`header-section ${windowScroll && "scroll"}`}>
        {/* <h1 className="logo">{icons.Logo}</h1> */}
        <Link href="/">
          <a className="logo">
            <img src="aladinko.png" />
          </a>
        </Link>

        <Nav />
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={props.handleDrawerOpen}
          // className="icon-button"
          className="hamburger-icon"
        >
          <Menu fontSize={"large"} />
          {/* da */}
        </IconButton>
      </div>
    </HeaderStyled>
  );
};

export default Header;
