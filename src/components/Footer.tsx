import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";

const FooterContainer = styled.nav`
  width: 90vw;
  height: 35px;
  position: absolute;
  left: 5vw;
  bottom: 7vh;
  display: flex;
  justify-content: space-between;

  button {
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

    cursor: pointer;
    &.on {
      background: rgba(255, 255, 255, 0.8);
      border: 1px solid #fff;
      color: #000;
      opacity: 1;
    }
  }
`;

type FooterProps = {
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
};

const Footer = ({ selected, setSelected }: FooterProps) => {
  const onClickSelect = (event: any) => {
    setSelected(event.target.value);
  };
  return (
    <FooterContainer>
      <button
        onClick={onClickSelect}
        className={selected === "morning" ? "on" : "off"}
        value="morning"
      >
        morning
      </button>
      <button
        onClick={onClickSelect}
        className={selected === "afternoon" ? "on" : "off"}
        value="afternoon"
      >
        afternoon
      </button>
      <button
        onClick={onClickSelect}
        className={selected === "evening" ? "on" : "off"}
        value="evening"
      >
        evening
      </button>
      <button
        onClick={onClickSelect}
        className={selected === "night" ? "on" : "off"}
        value="night"
      >
        night
      </button>
    </FooterContainer>
  );
};

export default Footer;
