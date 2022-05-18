import styled from "styled-components";
import Nav from "./Nav";
import { SNS } from "./SNS";

const HeaderContainer = styled.header`
  width: 90vw;
  position: absolute;
  top: 5vh;
  left: 5vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > h1 {
    font: bold 30px/1 "orbitron";
    color: #fff;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h1>MADDRAKE</h1>
      <Nav />
      <SNS />
    </HeaderContainer>
  );
};

export default Header;
