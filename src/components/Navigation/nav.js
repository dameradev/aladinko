import styled from "@emotion/styled";
import React from "react";

import respondTo from "../../utils/respondTo";
import scrollToElement from "../../utils/scrollToElement";
import Logo from "../Logo";

const NavStyles = styled.nav`
  &.nav__desktop {
    ${respondTo.tabletMini` 
        display: none;
      `}
  }
  font-weight: 600;
  font-size: 1.8rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 8rem;

  /* width: 100%; */
  transform: ${(props) =>
    !props.windowScroll ? "translateY(0)" : "translateY(-3rem)"};
  z-index: 100;

  box-shadow: ${(props) => props.theme.bs};

  .logo {
    text-transform: uppercase;
    font-weight: 400;
    z-index: 200;
    display: flex;
    align-items: center;

    width: 10rem;
    height: 8rem;

    img {
      width: 100%;
    }
  }

  ul {
    display: flex;
    justify-content: space-between;
    margin-right: 3rem;

    li {
      text-transform: uppercase;

      &:not(:last-of-type) {
        padding-top: 1rem;
        margin-right: 2.5rem;
        a:hover {
          border-bottom: 0.8rem solid var(--primary);
          overflow: hidden;
        }
      }

      a {
        padding-bottom: 2.5rem;
        /* padding-top: ${(props) => console.log(props.scrolled)}; */
        transition: all 0.3s;
      }

      /* overflow: hidden; */
    }
  }
  .call {
    /* text-align: center; */
    text-transform: uppercase;
    a {
      color: var(--primary);
    }
  }
`;

const Nav = ({ hasItems, quantity, className, toggleNav, isOpenNav }) => {
  return (
    <NavStyles className={className}>
      <ul>
        <li>
          <a onClick={() => scrollToElement("services")}>Storitve</a>
          {/* </Link> */}
        </li>
        <li>
          {/* <Link href="/storitve"> */}
          <a onClick={() => scrollToElement("price-list")}>Cenik</a>
          {/* </Link> */}
        </li>
        <li className="call">
          Pokličite <br />
          <a href="tel:+38664163381">064 16 33 81</a>
        </li>
      </ul>
    </NavStyles>
  );
};

export default Nav;
