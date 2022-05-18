import styled from "styled-components";
import bg_morning from "../assets/bg_morning.jpg";
import Article from "./Article";
import Watch from "./Watch";
import Header from "./Header";
import Footer from "./Footer";
import Cloud from "./Cloud";
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
    <Main bgImg={bg_morning}>
      <Cloud />
      <Header />
      <Article />
      <Watch />
      <Footer />
    </Main>
  );
};

export default Home;
