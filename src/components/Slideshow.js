import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import BackgroundSlider from "gatsby-image-background-slider";
import styled from "styled-components";

const SlideshowStyles = styled.div`
  &::before {
    content: "";
    background: #000;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.6;
  }
`;
const Slideshow = ({ slidesCaptions }) => (
  <SlideshowStyles>
    <BackgroundSlider
      className="slider"
      query={useStaticQuery(graphql`
        query {
          backgrounds: allFile(
            filter: { internal: { mediaType: { regex: "/image/" } } }
          ) {
            nodes {
              relativePath
              childImageSharp {
                fluid(maxHeight: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      `)}
      initDelay={2} // delay before the first transition (if left at 0, the first image will be skipped initially)
      transition={4} // transition duration between images
      duration={6} // how long an image is shown
      // specify images to include (and their order) according to `relativePath`
      images={["carpets-rolled.jpg", "carpets-rolled-1.jpg"]}
    >
      {/* Captions in sync with background images */}
      {/* {slidesCaptions.map((caption) => (
          <div key={caption} className="caption">
            <p>{caption.text}</p>
            <button>{caption.button}</button>
          </div>
        ))} */}
    </BackgroundSlider>
  </SlideshowStyles>
);

export default Slideshow;
