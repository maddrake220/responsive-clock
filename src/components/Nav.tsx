import styled from "styled-components";

const NavContainer = styled.ul`
  display: flex;

  li {
    margin: 0px 40px;

    a {
      font: bold 14px/1 "arial";
      color: #fff;
    }
  }
`;

const Nav = () => {
  return (
    <NavContainer>
      <li>
        <a href="#">About</a>
      </li>
      <li>
        <a href="#">Company</a>
      </li>
      <li>
        <a href="#">History</a>
      </li>
      <li>
        <a href="#">Community</a>
      </li>
      <li>
        <a href="#">Contact us</a>
      </li>
    </NavContainer>
  );
};

export default Nav;
