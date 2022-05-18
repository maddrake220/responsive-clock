import { Dispatch, SetStateAction, useEffect, useState } from "react";
import styled from "styled-components";
import Cloud from "./Cloud";
import { TTime } from "./Home";
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

export const whatNow = (hours: number, time: TTime) => {
  let isChangeTime = false;
  let nowTime: TTime = "morning";
  if (hours >= 0 && hours < 6 && time !== "night") {
    isChangeTime = true;
    nowTime = "night";
  }
  if (hours >= 6 && hours < 12 && time !== "morning") {
    isChangeTime = true;
    nowTime = "morning";
  }
  if (hours >= 12 && hours < 18 && time !== "afternoon") {
    isChangeTime = true;
    nowTime = "afternoon";
  }
  if (hours >= 18 && hours < 24 && time !== "evening") {
    isChangeTime = true;
    nowTime = "evening";
  }

  return {
    isChangeTime,
    nowTime,
  };
};
type WatchProps = {
  phoneImg: string;
  time: TTime;
  setTime: Dispatch<SetStateAction<TTime>>;
};

const Watch = ({ phoneImg, time, setTime }: WatchProps) => {
  const [current, setCurrent] = useState<{
    hours: string | number;
    minutes: string | number;
    seconds: string | number;
  }>(getCurrent());

  useEffect(() => {
    const interval = setInterval(() => {
      const { hours, minutes, seconds } = getCurrent();
      const { isChangeTime, nowTime } = whatNow(Number(hours), time);

      if (isChangeTime) {
        setTime(nowTime);
      }
      setCurrent({ hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [setTime, time]);

  return (
    <WatchContainer bgImg={phoneImg}>
      <div className="screen">
        <span>{current.hours}</span> : <span>{current.minutes}</span> :{" "}
        <span>{current.seconds}</span>
        <div className="cloud">
          <Cloud watch={true} />
        </div>
      </div>
    </WatchContainer>
  );
};

export default Watch;
