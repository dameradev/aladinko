import React from "react";
import styled from "styled-components";

const FooterStyled = styled.footer`
  margin-top: 5rem;
  background: ${(props) => props.theme.colorPrimary};
  color: #fff;
  width: 100%;
  grid-column: full-start/ full-end;
  padding: 0 20%;
  font-size: 3rem;

  ul {
    display: flex;
    justify-content: space-between;
  }
`;

const Footer = () => {
  return (
    <FooterStyled>
      <h1>Footer placeholder</h1>
      <ul>
        <li>Facebook</li>
        <li>Twitter</li>
        <li>Instagram</li>
      </ul>
    </FooterStyled>
  );
};

export default Footer;
