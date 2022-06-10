import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import logo from "../assets/images/logo.svg";

const LogoStyles = styled.div`
  padding: 2rem;
  padding-top: 3rem;
  img {
    /* height: 7rem; */
    width: 7rem;
  }
`;

export default function Logo() {
  return (
    <LogoStyles className="logo">
      <Link to="/#">
        <img src={logo} alt="logo" />
      </Link>
    </LogoStyles>
  );
}
