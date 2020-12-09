import frontendIcon from "../assets/images/frontend-icon.svg";
import backendIcon from "../assets/images/backend-icon.svg";
export const data = {
  about: {
    frontend: {
      icon: frontendIcon,
      title: "Front-end",
      description:
        "Responsive websites built using the latest technologies for optimal UX",
      languages: {
        title: "Languages",
        items: ["Html5", "Css3", "Scss/Sass", "Java Script"],
      },
      devTools: {
        title: "Technologies",
        items: [
          "React JS (React Hooks)",
          "Material Ui",
          "Next JS",
          "Gatsby JS",
          "Graphql",
        ],
      },
    },
    backend: {
      icon: backendIcon,
      title: "CUSTOM BACKEND/CMS",
      description:
        "You will get an admin Ui with which you can control the content users see on your website",
      languages: {
        title: "Technologies",
        items: ["Node JS", "Java Script", "Prisma", "Graphql"],
      },
      devTools: {
        title: "CMS",
        items: ["Shopify", "Sanity", "Strapi", "Keystone"],
      },
    },
  },
  portfolio: {
    roarBikes: {
      title: "Roar bikes",
      image: { src: "roar-bikes.png", alt: "" },
      technologies: ["Gatsby JS", "React JS", "CSS-in-JS", "Shopify-CMS"],
    },

    pep: {
      title: "Platform for erasmus projects",
      image: { src: "pep.png", alt: "" },
      technologies: [
        "Next JS",
        "React JS",
        "Graphql",
        "Prisma-DB",
        "Node JS",
        "Material UI",
        "Apollo",
      ],
    },
    queens: {
      title: "Queen's gambit",
      image: { src: "queens.png", alt: "" },
      technologies: [
        "Gatsby JS",
        "React JS",
        "CSS-in-JS",
        "Keystone 5 CMS",
        "Node JS",
      ],
    },
    aladinko: {
      title: "Aladinko",
      image: { src: "aladinko.png", alt: "" },
      technologies: ["Gatsby JS", "React JS", "CSS-in-JS"],
    },
  },
};
