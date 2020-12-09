import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Logo from "./Logo";
import respondTo from "../utils/respondTo";

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
  /* padding: 1rem 0; */

  /* grid-column: full-start / full-end; */

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

    background: var(--primary);

    color: #fff;
    animation: all 0.2s;
    width: 100%;

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
    background: rgba(245, 245, 245, 1);

    /* color: white; */
    font-weight: 600;
    font-size: 2rem;
    padding: 0 10%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 8rem;
    position: fixed;
    width: 100%;
    transform: ${(props) =>
      !props.windowScroll ? "translateY(0)" : "translateY(-3rem)"};
    z-index: 100;

    box-shadow: ${(props) => props.theme.bs};
    /* box-shadow:  inset 3px -40px 14px -31px rgba(58,58,58,1); */
    /* border-bottom: 2px solid var(--primary); */

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
    .nav {
      z-index: 200;
      display: flex;
      align-items: center;

      ${respondTo.tabletMini` 
        display: none;
      `}
      ul {
        display: flex;
        margin-right: 3rem;
        li {
          text-transform: uppercase;

          &:not(:last-of-type) {
            margin-right: 3.5rem;
          }

          a {
            padding-bottom: 3.1rem;
            /* padding-top: ${(props) => console.log(props.scrolled)}; */
            transition: all 0.3s;
          }

          /* overflow: hidden; */
          a:hover {
            border-bottom: 0.8rem solid var(--primary);
            overflow: hidden;
          }
        }
      }
      .call {
        text-align: center;
        text-transform: uppercase;
        a {
          color: var(--primary);
        }
      }
    }
  }
  .scroll .nav ul li a {
    padding-bottom: 3rem;
  }

  .hamburger-icon {
    display: none;
    ${respondTo.tabletMini` 
      display: block;
    `}

    svg {
      width: 3.5rem;
      height: 3.5rem;
    }
  }
`;

export default function Nav() {
  const scrollToElement = (id, handleDrawerClose) => {
    const element = document.getElementById(id);
    window.scrollTo({
      top: element.getBoundingClientRect().top + window.scrollY - 100,
    });
    handleDrawerClose && handleDrawerClose(true);
    console.log(handleDrawerClose);
  };
  return (
    <HeaderStyled>
      <div className={`header-section `}>
        {/* <h1 className="logo">{icons.Logo}</h1> */}
        <Logo />
        <nav className={`nav `}>
          <ul>
            {/* <li>
              <Link to="#">
                <a
                // onClick={() => props.handleDrawerClose(true)}
                >
                  Domov
                </a>
              </Link>
            </li> */}
            <li>
              {/* <Link href="/storitve"> */}
              <a onClick={() => scrollToElement("services")}>Storitve</a>
              {/* </Link> */}
            </li>
            <li>
              {/* <Link href="/storitve"> */}
              <a onClick={() => scrollToElement("price-list")}>Cenik</a>
              {/* </Link> */}
            </li>
            {/* <li>
          <Link href="/kontakt">
            <a>Kontakt</a>
          </Link>
        </li> */}
          </ul>
          <div className="call">
            Pokličite <br />
            <a href="tel:+38664163381">064 16 33 81</a>
          </div>
        </nav>
        {/* <Nav /> */}
        {/* <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={props.handleDrawerOpen}
          // className="icon-button"
          className="hamburger-icon"
        >
          <Menu fontSize={"large"} />
          {/* da */}
        {/* </IconButton> */}
      </div>
    </HeaderStyled>
  );
}
