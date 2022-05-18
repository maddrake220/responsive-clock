import styled from "styled-components";

const SNSContainer = styled.ul`
  display: flex;

  li {
    margin: 0px 10px;

    i {
      font-size: 18px;
      color: #fff;
    }
  }
`;

export const SNS = () => {
  return (
    <SNSContainer>
      <li>
        <a href="#">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="#">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#">
          <i className="fab fa-envelop"></i>
        </a>
      </li>
    </SNSContainer>
  );
};
