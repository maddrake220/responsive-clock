import styled from "styled-components";
import bgImg from "../assets/elgacia.jpg";
import Article from "./Article";
import Watch from "./Watch";
import Header from "./Header";
const Main = styled.main<{
  bgImg: string;
}>`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(${(props) => props.bgImg});
`;

const Home = () => {
  return (
    <Main bgImg={bgImg}>
      <Header />
      <Article />
      <Watch />
    </Main>
  );
};

export default Home;
