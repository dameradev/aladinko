import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import logo from "../assets/images/logo.svg";

const LogoStyles = styled.div`
  padding: 1.5rem 0;
  img {
    height: 7rem;
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
