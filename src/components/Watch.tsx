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

    span {
      display: inline-block;
      width: 100px;
    }
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
type Tdata = {
  condition: boolean;
  name: TTime;
};

export const whatNow = (hours: number, time: TTime) => {
  let isChangeTime = false;
  let nowTime: TTime = "morning";

  const data: Tdata[] = [
    {
      condition: hours >= 5 && hours < 11 && time !== "morning",
      name: "morning",
    },
    {
      condition: hours >= 11 && hours < 16 && time !== "afternoon",
      name: "afternoon",
    },
    {
      condition: hours >= 16 && hours < 19 && time !== "evening",
      name: "evening",
    },
    {
      condition: hours >= 19 || (hours < 5 && time !== "night"),
      name: "night",
    },
  ];

  data.forEach((item) => {
    if (item.condition) {
      isChangeTime = true;
      nowTime = item.name;
    }
  });
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
