import styled from "styled-components";
import bg_morning from "../assets/bg_morning.jpg";
import phone_morning from "../assets/phone_morning.png";
import Article from "./Article";
import Watch, { whatNow } from "./Watch";
import Header from "./Header";
import Footer from "./Footer";
import Cloud from "./Cloud";
import { useEffect, useState } from "react";
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

export type TTime = "morning" | "afternoon" | "evening" | "night" | "";

const Home = () => {
  const now = new Date();
  const hours = now.getHours();
  const { nowTime } = whatNow(hours, "");
  const [time, setTime] = useState<TTime>(nowTime);
  const [selected, setSelected] = useState("morning");
  const [bgImg, setBgImg] = useState(bg_morning);
  const [phoneImg, setPhoneImg] = useState(phone_morning);
  useEffect(() => {
    import(`../assets/bg_${selected}.jpg`).then((src) => {
      setBgImg(src.default);
    });
    import(`../assets/phone_${selected}.png`).then((src) => {
      setPhoneImg(src.default);
    });
  }, [selected]);

  useEffect(() => {
    setSelected(time);
  }, [time]);
  return (
    <Main bgImg={bgImg}>
      <Cloud />
      <Header />
      <Article />
      <Watch phoneImg={phoneImg} time={time} setTime={setTime} />
      <Footer selected={selected} setSelected={setSelected} />
    </Main>
  );
};

export default Home;
