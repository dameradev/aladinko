import React from "react";

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
    justify-content: space-between;

    background: ${(props) => props.theme.colorPrimary};
    color: #fff;

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
    max-width: ${(props) => props.theme.maxWidth};
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 10rem;
    .logo {
      grid-column: center-start / col-end 2;
      text-transform: uppercase;
      font-weight: 400;
    }
    .nav {
      grid-column: col-start 7 / center-end;
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
  return (
    <HeaderStyled>
      <div className="contact-section">
        <p className="contact-section__location">
          <span>{icons.Location}</span>Kamniška 28, 2000 Maribor
        </p>
        <p>069 652 555</p>
      </div>
      <div className="header-section">
        <h1 className="logo">Čarobni stroj</h1>
        <nav className="nav">
          <ul>
            <li>
              <Link href="/">
                <a>Domov</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Storitve</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Cenik</a>
              </Link>
            </li>

            <li>
              <Link href="/">
                <a>Kontakt</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </HeaderStyled>
  );
};

export default Header;
