import { useEffect, useState } from "react";
import styled from "styled-components";
import Cloud from "./Cloud";
const WatchContainer = styled.figure<{
  bgImg: string;
}>`
  width: 1200px;
  height: 800px;
  position: absolute;
  right: -50px;
  top: 50%;
  background-position: right top;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(${({ bgImg }) => bgImg});

  transform: translateY(-30%);
  .screen {
    width: 540px;
    height: 300px;
    position: absolute;

    top: 100px;
    left: 130px;
    font: 60px/300px "orbitron";
    color: #fff;
    text-align: center;
    overflow: hidden;
  }
`;

const getCurrent = () => {
  const now = new Date();

  let hours: string | number = now.getHours();
  let minutes: string | number = now.getMinutes();
  let seconds: string | number = now.getSeconds();

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  return {
    hours,
    minutes,
    seconds,
  };
};

type WatchProps = {
  phoneImg: string;
};

const Watch = ({ phoneImg }: WatchProps) => {
  const [current, setCurrent] = useState<{
    hours: string | number;
    minutes: string | number;
    seconds: string | number;
  }>(getCurrent());
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(getCurrent());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <WatchContainer bgImg={phoneImg}>
      <div className="screen">
        <span>{current.hours}</span> : <span>{current.minutes}</span> :{" "}
        <span>{current.seconds}</span>
        <Cloud />
      </div>
    </WatchContainer>
  );
};

export default Watch;
