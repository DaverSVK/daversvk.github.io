import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ArticleCard from "./ArticleCard";
import { articles } from "../../data/articles";

function Articles() {
  return (
    <Container fluid className="article-section" id="articles">
      <Container>
        <h1 className="project-heading">
          My Technical <strong className="purple">Articles</strong>
        </h1>
        <p style={{ color: "var(--text-muted)" }}>
          Write-ups on projects, engineering decisions, and experiments.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {articles.map((article) => (
            <Col
              key={article.id}
              md={4}
              className="project-card"
            >
              <ArticleCard
                title={article.title}
                overview={article.overview}
                ghLink={article.ghLink}
                articleLink={article.articleLink}
                navigateTo={article.navigateTo}
                imgPath={article.imgPath}
                tags={article.tags}
                date={article.date}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Articles;
