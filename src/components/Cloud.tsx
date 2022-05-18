import styled from "styled-components";
import cloud1 from "../assets/cloud1.png";
import cloud2 from "../assets/cloud2.png";

const CloudContainer = styled.div<{
  watch: boolean;
}>`
  .sky_cloud1 {
    position: absolute;
    top: ${({ watch }) => (watch ? "-170px" : "-100px")};
    left: -50%;
    opacity: 0;
    animation: cloud_animation 40s linear 20s infinite;
  }

  .sky_cloud2 {
    position: absolute;
    top: ${({ watch }) => (watch ? "-120px" : "-50px")};
    left: -50%;
    opacity: 0;
    animation: cloud_animation 40s linear 0s infinite;
  }

  @keyframes cloud_animation {
    0% {
      left: -50%;
      opacity: 0;
    }

    5% {
      opacity: 0.5;
    }

    95% {
      opacity: 0.5;
    }

    100% {
      left: 80%;
      opacity: 0;
    }
  }
`;

type CloudProps = {
  watch?: boolean;
};

const Cloud = ({ watch = false }: CloudProps) => {
  return (
    <CloudContainer watch={watch}>
      <img src={cloud1} alt="cloud1" className="sky_cloud1" />
      <img src={cloud2} alt="cloud2" className="sky_cloud2" />
    </CloudContainer>
  );
};

export default Cloud;
