import React from "react";
import styled from "styled-components";

const FooterContainer = styled.nav`
  width: 90vw;
  height: 35px;
  position: absolute;
  left: 5vw;
  bottom: 7vh;
  display: flex;
  justify-content: space-between;

  a {
    width: 23%;
    height: 100%;
    background: rgba(255, 255, 255, 0.3);

    display: flex;
    justify-content: center;
    align-items: center;

    font: 12px/1 "orbitron";
    color: #fff;
    letter-spacing: 2px;
    border: 1px solid #bbb;
    opacity: 0.7;
    transition: 0.5s;

    &.on {
      background: rgba(255, 255, 255, 0.8);
      border: 1px solid #fff;
      color: #000;
      opacity: 1;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <a href="#" className="on">
        morning
      </a>
      <a href="#">afternoon</a>
      <a href="#">evening</a>
      <a href="#">night</a>
    </FooterContainer>
  );
};

export default Footer;
