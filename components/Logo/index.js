import React from "react";
import Link from "next/link";
import styled from "styled-components";

const LogoStyled = styled.p`
  .logo {
    text-transform: uppercase;
    font-weight: 400;
    z-index: 200;
    display: flex;
    align-items: center;

    /* svg { */
    width: 10rem;
    height: 8rem;
    /* } */
    img {
      width: 100%;
    }
  }
`;

const Logo = (props) => {
  return (
    <LogoStyled>
      <Link href="/">
        <a className={`${props.className} logo`}>
          <img src="aladinko.png" />
        </a>
      </Link>
    </LogoStyled>
  );
};

export default Logo;
