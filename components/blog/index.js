import React from "react";
import styled from "styled-components";

import data from "../assets/data";

const BlogPostStyled = styled.article`
  max-width: 60rem;
  margin: 2rem auto;
  text-align: justify;
  padding: 2rem;

  h1 {
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 200;
    text-align: center;
  }
  p {
    line-height: 3.5rem;
    font-size: 2.2rem;
  }

  .main-text {
    padding: 2rem 0 4rem 0;
  }

  ul {
    li {
      padding: 2rem 0;
    }
    h3 {
      font-size: 2.6rem;
    }
    img {
      max-width: 60rem;
      width: 100%;
    }
  }
`;

const Blog = () => {
  return data.map((post) => (
    <BlogPostStyled>
      <h1>{post.title}</h1>
      <p className="main-text">{post.mainText}</p>

      <ul>
        {post.content.map((contentItem) => (
          <li key={contentItem.title}>
            <img src={contentItem.image}></img>
            <h3>{contentItem.title}</h3>
            <p>{contentItem.description}</p>
          </li>
        ))}
      </ul>
    </BlogPostStyled>
  ));
};

export default Blog;
