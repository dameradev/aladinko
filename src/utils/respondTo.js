import { css } from "styled-components";

const breakpoints = {
  mobileSmallest: "400px",
  mobilePortrait: "499px",
  mobileSmall: "639px",
  mobile: "767px",
  tabletMini: "849px",
  tablet: "1024px",
  laptopSmall: "1199px",
  laptop: "1440px",
  desktopSmall: "1600px",
  desktop: "1799px",
  desktopLarge: "1800px",
  desktopExtraLarge: "2048px",
  desktopUltraLarge: "2240px",
};

const respondTo = Object.keys(breakpoints).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (max-width: ${breakpoints[label]}) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});

export default respondTo;
