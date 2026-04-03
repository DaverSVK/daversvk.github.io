import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgGitFork } from "react-icons/cg";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function formatDate(str) {
  if (!str) return null;
  const [y, m] = str.split("-");
  return new Date(y, parseInt(m, 10) - 1).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}

function ArticleCard({ title, overview, ghLink, articleLink, tags, date, navigateTo, imgPath }) {
  const formattedDate = formatDate(date);
  const navigate = useNavigate();

  const handleCardClick = () => {
    if (navigateTo) {
      navigate(navigateTo);
    } else if (articleLink) {
      window.open(articleLink, "_blank", "noreferrer");
    } else {
      window.open(ghLink, "_blank", "noreferrer");
    }
  };

  const stopPropagation = (e) => e.stopPropagation();

  return (
    <Card
      className="article-card-view"
      onClick={handleCardClick}
      style={{ cursor: "pointer", textAlign: "center" }}
    >
      <Card.Body>
        <Card.Title style={{ marginBottom: "16px" }}>
          {title}
        </Card.Title>

        {imgPath && (
          <Card.Img
            src={imgPath}
            alt={title}
            style={{
              borderRadius: "8px",
              opacity: 0.85,
              marginBottom: "12px",
              padding: "0 10px",
            }}
          />
        )}

        {formattedDate && (
          <div className="article-date-badge" style={{ position: "static", display: "inline-block", marginBottom: "12px" }}>
            {formattedDate}
          </div>
        )}

        <Card.Text style={{ textAlign: "justify", color: "var(--text-muted)", marginTop: "8px" }}>
          {overview}
        </Card.Text>

        <div className="article-tags-row">
          {tags.map((tag) => (
            <span key={tag} className="article-tag">
              {tag}
            </span>
          ))}
        </div>

        <div
          style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center" }}
          onClick={stopPropagation}
        >
          <Button
            variant="primary"
            href={ghLink}
            target="_blank"
            rel="noreferrer"
          >
            <CgGitFork style={{ fontSize: "1.2em" }} /> GitHub
          </Button>

          {articleLink && (
            <Button
              variant="primary"
              href={articleLink}
              target="_blank"
              rel="noreferrer"
            >
              <BsBoxArrowUpRight style={{ fontSize: "1em" }} /> Read Article
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ArticleCard;
