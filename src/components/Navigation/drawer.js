import styled from "styled-components";
import React from "react";
import Nav from "./nav";

const DrawerStyles = styled.div`
  position: fixed;
  /* top: 0; */
  right: 0;
  height: 100vh;
  /* width: 40vw; */
  /* padding: 0 3rem 3rem 3rem; */

  z-index: 100000;
  background: white;
  color: black;
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
  transition: all 0.5s ease-in-out;
  transform: ${(props) =>
      !props.isOpenNav ? "translate(400px)" : "translate(0)"}
    translateY(8rem);
  a {
    color: #fff;
    color: black;
  }

  .mobile-nav {
    display: flex;
    padding: 0 3rem;
    ul {
      margin-top: 18rem;
      display: flex;
      flex-direction: column;
      text-transform: uppercase;

      padding: 0;
      li {
        padding: 2rem 0;
        a {
          &:hover {
            border-bottom: none !important;
          }
        }
      }
    }
  }
`;

const Drawer = ({ isOpenNav, toggleNav }) => {
  return (
    <DrawerStyles
      className={`${isOpenNav && "drawer-open"} drawer`}
      isOpenNav={isOpenNav}
    >
      <Nav className="mobile-nav" isOpenNav={isOpenNav} toggleNav={toggleNav} />
    </DrawerStyles>
  );
};

export default Drawer;
