import React from "react";
import styled from "styled-components";
import "normalize.css";
import Header from "./Header";
import Footer from "./Footer";
import GlobalStyles from "../styles/GlobalStyles";
import Typography from "../styles/Typography";
import Drawer from "./Navigation/drawer";
import { useState } from "react";

export default function Layout({ children }) {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = (navOpen) => {
    setNavOpen(!navOpen);
  };

  if (typeof window !== "undefined") {
    require("smooth-scroll")('a[href*="#"]');
  }
  return (
    <>
      <GlobalStyles />
      <Typography />
      <div>
        {/* <ContentStyles> */}
        <Header toggleNav={toggleNav} isOpenNav={navOpen} />

        <Drawer has toggleNav={toggleNav} isOpenNav={navOpen} />
        {children}
        <Footer />
        {/* </ContentStyles> */}
      </div>
    </>
  );
}
