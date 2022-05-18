import styled from "styled-components";

const ArticleContainer = styled.article`
  width: 40vw;
  position: absolute;
  top: 40vh;
  left: 5vw;

  p {
    font: 4vw/1 "orbitron";
    color: #fff;
    margin-bottom: 20px;

    strong {
      opacity: 0.7;
    }
  }

  em {
    font: bold 14px/1.2 "arial";
    color: #fff;
    letter-spacing: 2px;
  }
`;

const Article = () => {
  return (
    <ArticleContainer>
      <p>
        <strong>Lorem</strong> Ipsum
      </p>
      <em>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
        perferendis tempore debitis hic totam voluptates asperiores. Libero sit,
        quod autem fugiat vero placeat ullam quos illo maxime praesentium!
        Fugiat, minus.
      </em>
    </ArticleContainer>
  );
};

export default Article;
