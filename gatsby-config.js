const path = require("path");

module.exports = {
  // pathPrefix: "",
  siteMetadata: {
    title: `Aladinko Pranje Preproge`,
    siteUrl: "https://aladinko.si",
    description:
      "Profesionalna opremljena čistilnica za globinsko pranje preproge v Mariboru in Ljubljane. Delamo na več mestih v Sloveniji, ponujamo berzplačni prevzem in dostavo vaših preprog na dom.",
    facebook: "@aladinkopreproge",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",

    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Josefin Sans`,
          `Josefin Sans\:100`,
          `Josefin Sans\:200`,
          // `montserrat`, `montserrat\:700`, `montserrat\:900`, `open sans`
          // `source Nunito\: 100, 200,300,400,400i,700`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-modal-routing`,
      options: {
        // A selector to set react-modal's app root to, default is `#___gatsby`
        // See http://reactcommunity.org/react-modal/accessibility/#app-element
        appElement: "#___gatsby",

        // Object of props that will be passed to the react-modal container
        // See http://reactcommunity.org/react-modal/#usage
        modalProps: {
          closeTimeoutMS: 500,
        },
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
};
