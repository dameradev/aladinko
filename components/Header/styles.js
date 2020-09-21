import styled from "styled-components";
import { respondTo } from "../../utils/respondTo";

export const HeaderStyled = styled.header`
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
    height: 10rem;
    position: fixed;
    width: 100%;
    transform: ${(props) =>
      !props.windowScroll ? "translateY(0)" : "translateY(-3rem)"};
    z-index: 100;

    box-shadow: ${(props) => props.theme.bs};
    /* box-shadow:  inset 3px -40px 14px -31px rgba(58,58,58,1); */
    /* border-bottom: 2px solid ${(props) => props.theme.colorPrimary}; */

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

      ${respondTo.tablet` 
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
            border-bottom: 0.8rem solid ${(props) => props.theme.colorPrimary};
            overflow: hidden;
          }
        }
      }
      .call {
        text-align: center;
        text-transform: uppercase;
        a {
          color: ${(props) => props.theme.colorPrimary};
        }
      }
    }
  }
  .scroll .nav ul li a {
    padding-bottom: 3rem;
  }

  .hamburger-icon {
    display: none;
    ${respondTo.tablet` 
      display: block;
    `}

    svg {
      width: 3.5rem;
      height: 3.5rem;
    }
  }
`;
