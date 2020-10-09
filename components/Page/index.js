import React, { Component } from "react";
// import styled, { ThemeProvider, createGlobalStyle, css } from 'styled-components';
// import {
//   ThemeProvider as MuiThemeProvider,
//   createMuiTheme,
// } from "@material-ui/core";
// import Meta from '../Meta';

import {
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemText,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core";

import { Cancel } from "@material-ui/icons";
import Header from "../Header";
import Nav from "../Nav";
import Footer from "../Footer";
// import Footer from '../Footer';
import { withRouter } from "next/router";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import Meta from "../Meta";

// const MuiTheme = createMuiTheme({
//   typography: {
//     htmlFontSize: 10,
//   },
//   palette: {
//     primary: {
//       main: colors.blue[800],
//     },
//   },
// });

const theme = {
  red: "#FF5964",
  whiteGray: "#f2f2f2",
  black: "#393939",
  grey: "#3A3A3A",
  blue: "#2F5DA8",
  lightgrey1: "#E1E1E1",
  darkgrey1: "#383838",

  colorPrimary: "#2090c0",
  colorSecondary: "#F02814",
  offWhite: "#EDEDED",
  maxWidth: "80%",
  bs: "0 12px 10px 0 rgba(0, 0, 0, 0.09)",
  containerMaxHeight: "calc(100vh - 84px)",
};

const StyledPage = styled.div`
  /* display: grid; */

  .backdrop {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1000;
  }

  .drawer {
    .mobile-nav {
      font-size: 2.5rem;
      padding: 3rem;
      text-align: center;
      li {
        padding-bottom: 1.5rem;
      }
      .call {
        padding-top: 3rem;
        a {
          color: ${(props) => props.theme.colorPrimary};
          font-size: 3rem;
        }
      }
    }

    .cancel-icon-container {
      display: flex;
      justify-content: flex-end;
    }
    .cancel-icon {
      text-align: right;
      svg {
        width: 2.5rem;
        height: 2.5rem;
      }
    }
  }
`;

// const StyledPage = styled.div`
//   background: #f5f5f5;
//   position: relative;
//   min-height: 100vh;
//   color: ${(props) => props.theme.black};
//   padding-top: ${(props) => props.router.route !== '/' && '70px'};
// `;

const GlobalStyle = createGlobalStyle`
   

  html {
    box-sizing: border-box;
    font-size: 62.5%;
    font-family: 'Roboto';
    scroll-behavior: smooth;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.6rem;
    line-height: 2;
    font-family: 'Roboto';
    color: #505050;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
  }
  p {
    margin: 0;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  /* button {  font-family: 'radnika_next'; } */
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .main-page {
    margin-top: 10rem;
    grid-column: full-start /full-end;
  }

// `;

// // injectGlobal`
//   `;

const Page = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <StyledPage router={props.router}>
        {open && <div onClick={handleDrawerClose} className="backdrop" />}
        <Meta />
        <GlobalStyle />
        <Header handleDrawerOpen={handleDrawerOpen} />
        <main className="main-page">{props.children}</main>

        {/* <Footer /> */}
        <Drawer
          className="drawer"
          variant="persistent"
          anchor="right"
          open={open}
          // open={true}
          // classes={{
          //   paper: classes.drawerPaper,
          // }}
        >
          <div className="cancel-icon-container">
            <IconButton className="cancel-icon" onClick={handleDrawerClose}>
              <Cancel />
            </IconButton>
          </div>
          <Divider />
          <List>
            <Nav className="mobile-nav" handleDrawerClose={handleDrawerClose} />
          </List>
        </Drawer>
        <Footer />
      </StyledPage>
    </ThemeProvider>
  );
};

// class Page extends Component {
// render() {
//   // const { user, loading } = userFetchUser();

// }
export default withRouter(Page);
